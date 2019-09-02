'use-strict';

const router = require('express').Router();
const {getApiRoute} = require('../handlers/api.handler');

router.route('/')
        .get(getApiRoute);

module.exports = router;