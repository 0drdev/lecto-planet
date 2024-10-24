const express = require('express')
const GenreController = require('../controllers/GenreController')
const BookController = require('../controllers/BookController')
const router = express.Router()

router.get('/', GenreController.allGenres)

router.get('/:genre', BookController.booksByGenre)

module.exports = router
