const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chinesejokeSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('ChineseJoke', chinesejokeSchema)
