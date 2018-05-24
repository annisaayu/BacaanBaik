const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = mongoose.Schema({
  content: {
      type:String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "book"
  }
}, {
  timestamps: true
})

let review = mongoose.model('review', reviewSchema)

module.exports = review
