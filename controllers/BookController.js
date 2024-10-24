const fs = require('node:fs')
const path = require('path')
const books = require('../data/books.json')

const data = fs.readFileSync(path.join('data', 'books.json'), 'utf8')

const BookController = {
  allBooks: (req, res) => {
    const books = JSON.parse(data)
    // console.log(books)
    res.render('index', { title: 'LectoPlanet', books })
  },
  showBook: (req, res) => {
    const book = books.find((book) => book.id === req.params.id)
    if (book) {
      return res.render('movie/movie', { title: 'LectoPlanet', book }) // Cambia esta línea
    } else {
      res.status(404).send('Movie not found')
    }
  },
  booksByGenre: (req, res) => {
    const genre = req.params.genre
    const filteredBooks = books.filter((book) => book.genre === genre)
    if (filteredBooks.length > 0) {
      res.render('genres/book', {
        title: `Libros de ${genre}`,
        books: filteredBooks
      })
    } else {
      res.status(404).send('No hay libros en este género')
    }
  }
}
module.exports = BookController
