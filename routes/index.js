const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')
const userRouter = require('./users')
const booksRouter = require('./books')
const genresRouter = require('./genres')

/* GET home page. */
router.get('/', BookController.allBooks)

// routes user
router.use('/user', userRouter)
// routes books
router.use('/books', booksRouter)
// routes genres
router.use('/genres', genresRouter)

module.exports = router
