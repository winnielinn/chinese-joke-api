const express = require('express')
const app = express()
const Logger = require('./utils/logger')
const ChineseJoke = require('./models/ChineseJoke')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./database/mongoose')

const logger = Logger.getLogger('app.js')
const port = process.env.PORT

app.get('/api/chinesejoke', async (_req, res) => {
  try {
    const chinesejoke = await ChineseJoke.aggregate([{ $sample: { size: 1 } }])
    return res.status(200).json({
      description: `${chinesejoke[0].description}`,
      answer: `${chinesejoke[0].answer}`
    })
  } catch (err) {
    logger.error(err)
  }
})

app.get('/', (_req, res) => {
  return res.send('Welcome to use joke API')
})

app.listen(port, () => {
  logger.info(`App is running on port ${port}`)
})
