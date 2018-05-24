const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = mongoose.Schema({
  title: {
      type:String
  },
  publisher: {
      type: String,
  },
  writer: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
})

let book = mongoose.model('book', bookSchema)

module.exports = book
