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
const winston = require('winston');
const routes = require('./util/routes');
const logger = require('./util/logger');


class Server extends events.EventEmitter {
    constructor() {
        super();
        this.app = express();
        this.server = null;
        // Don't log to file if not in production.
        if (process.env.NODE_ENV !== 'production') {
            logger.info('Not in production, will log only in console.');
            logger.add(new winston.transports.Console({
              format: winston.format.simple()
            }));
        }
        this.logger = logger;
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
                        this.logger.info(
                            `App started and running on Port: ${process.env.PORT}`
                            );
                    }
                );
            } catch(err) {
                this.logger.error(err);
            } finally {
                return this.server;
            }
        } else {
            this.logger.warn('Server already running.')
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
