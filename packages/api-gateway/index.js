'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const chalk = require('chalk');
const routes = require('./routes');
const devConfig = require('./environment/config.dev');

class App {
    constructor() {
        this.app = express();
        this.init();
        this.loadRoutes();
        this.server = null;
    }

    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('combined'));
    }

    loadRoutes() {
        this.app.use('/', routes)
    }

    startServer(port, host) {
        this.server = this.app.listen(port, host, () => {
            console.info(chalk.red(`App started on ${chalk.green(`http://${host}:${port}`)}`));
        })
    }

    stopServer() {
        if(this.server) {
            this.server.close();
            console.info(chalk.blue('Stopped server.'));
        }
        console.warn(chalk.yellow('Server is not running...'));
    }
}

const app = new App();

if(process.env.NODE_ENV !== 'production') {
    app.startServer(devConfig.port, devConfig.host);
}

module.exports = app;
