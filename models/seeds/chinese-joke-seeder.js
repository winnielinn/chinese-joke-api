const db = require('../../database/mongoose')
const Logger = require('../../utils/logger')

const logger = Logger.getLogger('chinese-joke-seeder.js')
const ChineseJoke = require('../ChineseJoke')
const chineseJokeList = require('./chinese.joke.json').results

db.once('open', async () => {
  await ChineseJoke.insertMany(chineseJokeList)

  logger.info('ChineseJokeSeeder created')
  process.exit()
})
