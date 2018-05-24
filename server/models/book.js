const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  judul: {
      type:String
  },
  penerbit: {
      type: String,
  },
  penulis: {
    type: String,
  },
  gambar: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user
