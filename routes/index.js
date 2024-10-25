const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')
const userRouter = require('./users')
const booksRouter = require('./books')
const genresRouter = require('./genres')
const adminRouter = require('./admin')
const authMiddlware = require('../middlewares/authMiddlware')

/* GET home page. */
router.get('/', authMiddlware, BookController.allBooks)

// routes user
router.use('/user', userRouter)
// routes books
router.use('/books', authMiddlware, booksRouter)
// routes genres
router.use('/genres', authMiddlware, genresRouter)
// routes admin
router.use('/admin', adminRouter)

module.exports = router
