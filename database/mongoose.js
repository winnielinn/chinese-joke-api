if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI
mongoose.connect(uri)

const Logger = require('../utils/logger')
const logger = Logger.getLogger('mongoose.js')
const db = mongoose.connection

db.on('err', () => {
  logger.error('connection error')
})

db.on('open', () => {
  logger.info('MongoDB connection')
})

module.exports = db
