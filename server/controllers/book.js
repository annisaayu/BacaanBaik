const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mBook = require('../models/book')

module.exports = {
  addBook: (req, res, next) => {
    let userId = req.headers.decoded.id
    let objBook = {
      title: req.body.judul,
      image: 'https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg' || req.file.cloudStoragePublicUrl,
      publisher: req.body.penerbit,
      writer: req.body.penulis,
      user: userId
    }
    mBook
      .create(objBook)
      .then( newBook => {
        res.status(200).json({
          message: 'success add book',
          book : newBook
        })
      })
      .catch( err => {
        res.json({
          err
        })
      })
  },
  deleteBook: (req, res, next) => {
    let userId = req.headers.decoded.id

    mBook
      .findOne({_id: req.params.id})
      .then(book => {
        if( !book ) {
          res.status(404).json({message: 'not found'})
        } else {
          mBook
            .remove({_id: req.params.id})
            .then(result => {
              res.status(200).json({
                message: 'book has been deleted',
                result
              })
            })
            .catch( err => {
              res.json({
                err
              })
            })
        }
      })
  },
  findOneBook: (req, res, next) => {
    mBook
      .findOne({_id: req.params.id})
      .exec()
      .then( book => {
        res.status(200).json({
          message: `detail book id ${req.params.id}`,
          book
        })
      })
      .catch( err => {
        res.json({
          err
        })
      })

  },
  findAllBook: (req, res, next) => {
    mBook
      .find()
      .populate('user')
      .exec()
      .then( books => {
        res.status(200).json({
          message: 'all books',
          books
        })
      })
      .catch(err => {
        res.json({
          err
        })
      })
  }
}
