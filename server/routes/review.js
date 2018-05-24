const router = require('express').Router()
const { addReviews, allReviews } = require('../controllers/review')
const {auth} = require('../middlewares/auth')

router.post('/:bookid/add-review', auth, addReviews)
router.get('/:bookid', auth, allReviews)

module.exports = router
