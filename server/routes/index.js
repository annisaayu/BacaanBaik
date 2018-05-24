const router = require('express').Router()
const {homepage, signin, signup} = require('../controllers/user')

router.post('/login', signin)
router.post('/register', signup)

module.exports = router
