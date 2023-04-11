const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chinesejokeSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true,
    default: ''
  }
})

module.exports = mongoose.model('ChineseJoke', chinesejokeSchema)
