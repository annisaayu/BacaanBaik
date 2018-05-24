const router = require('express').Router()
const images = require('../middlewares/image')
const { addBook, findAllBook, findOneBook, deleteBook } = require('../controllers/book');
const {auth} = require('../middlewares/auth')


router.get('/', auth, findAllBook)
router.post('/add', auth, images.multer.single('image'), images.sendUploadToGCS, addBook)
router.get('/:id', auth, findOneBook)
router.delete('/:id/delete', auth, deleteBook)

module.exports = router
