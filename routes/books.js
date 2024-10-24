const express = require('express')
const BookController = require('../controllers/BookController')
const router = express.Router()

/* GET book listing. */
router.get('/', BookController.allBooks)

router.get('/:id', BookController.showBook)

module.exports = router
