const router = require('express').Router()
const {getApiStatus} = require('../controllers/api.controller')

router.route('/')
        .get(getApiStatus)

module.exports = router