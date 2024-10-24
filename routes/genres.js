const express = require('express')
const GenreController = require('../controllers/GenreController')
const BookController = require('../controllers/BookController')
const router = express.Router()

router.get('/', GenreController.allGenres)

router.get('/:name', BookController.booksByGenre)

module.exports = router
