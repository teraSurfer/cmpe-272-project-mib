/**
 * @author teraSurfer <me@terasurfer.com>
 * Initialize express app, load routes, middleware and other services.
 */
'use strict';
const events = require('events');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./util/routes');
const logger = require('./util/logger');


class Server extends events.EventEmitter {
    constructor() {
        super();
        this.app = express();
        this.server = null;
    }


    startServer() {
        if(this.server === null)  {
            this.emit('server:starting');
            this.initMiddleware();
            try {
                this.server = this.app.listen (
                    process.env.PORT,
                    process.env.HOST,
                    () => {
                        logger.info(
                            `App started and running on Port: ${process.env.PORT}`
                            );
                    }
                );
            } catch(err) {
                logger.error(err);
            } finally {
                return this.server;
            }
        } else {
            logger.warn('Server already running.')
            return this.server;
        }
    }

    stopServer() {
        if(this.server !== null) {
            this.server.close();
        }
    }

    // Load regular middleware and also external ones if need be.
    initMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('combined'));
        
        // Load routes
        this.app.use('/', routes)
    }
}

module.exports = Server;
