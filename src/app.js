const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const {apiStatusRouter} = require('./routes')

// init application
const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined'))
// enables cross origin requests for all apis
// change in production
app.use(cors())

// init routes
app.use('/api', apiStatusRouter)

module.exports = app