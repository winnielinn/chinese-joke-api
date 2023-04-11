const log4js = require('log4js')
const config = require('../config/log4js.config.json')

const Logger = log4js.configure(config)

module.exports = Logger
