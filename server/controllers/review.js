const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mReview = require('../models/review')

module.exports = {
  allReviews: (req, res, next) => {
    mReview
      .find({book: req.params.bookid})
      .then( reviews => {
        res.status(200).json({
          message: `all reviews of book id ${req.params.bookid}`,
          reviews
        })
      })
      .catch( err => {
        res.json({
          err
        })
      })

  },
  addReviews: (req, res, next) => {

    let userId = req.headers.decoded.id

    let objReview = {
      content: req.body.content,
      user: userId,
      book: req.params.bookid
    }

    mReview
      .create(objReview)
      .then( review => {
        res.status(200).json({
          message: 'thank you for review',
          review
        })
      })
      .catch( err => {
        res.json({
          err
        })
      })
  }

}
