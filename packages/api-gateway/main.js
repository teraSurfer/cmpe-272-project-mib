'use strict';
const Server = require('./src/server');
const {config} = require('dotenv');
const {resolve} = require('path');

function init() {
    if(process.env.NODE_ENV === 'development') {
        config({path: resolve('./environment/.env.dev')});
    }
    try {
        const server = new Server().startServer();
    } catch(err) {
        console.error(err);
    }
}

init();