const express = require('express')
const Logger = require('./utils/logger')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./database/mongoose')

const logger = Logger.getLogger('app.js')
const port = process.env.PORT

app.listen(port, () => {
  logger.info(`App is running on port ${port}`)
})
