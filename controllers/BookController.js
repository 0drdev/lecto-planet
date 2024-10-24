const fs = require('node:fs')
const path = require('path')

// Lee el archivo books.json
const booksData = fs.readFileSync(path.join('data', 'books.json'), 'utf8')
const books = JSON.parse(booksData)

// Lee el archivo genres.json
const genresData = fs.readFileSync(path.join('data', 'genres.json'), 'utf8')
const genres = JSON.parse(genresData)

const BookController = {
  allBooks: (req, res) => {
    res.render('index', { title: 'LectoPlanet', books })
  },

  showBook: (req, res) => {
    const book = books.find((book) => book.id === req.params.id)
    if (book) {
      return res.render('movie/movie', { title: 'LectoPlanet', book })
    } else {
      res.status(404).send('Libro no encontrado')
    }
  },

  booksByGenre: (req, res) => {
    const { genreId, name } = req.params

    let genre
    if (genreId) {
      // Busca el género por ID
      genre = genres.find((g) => g.id === genreId)
    } else if (name) {
      // Busca el género por nombre (ignorando mayúsculas/minúsculas)
      genre = genres.find((g) => g.name.toLowerCase() === name.toLowerCase())
    }

    if (!genre) {
      return res.status(404).send('Género no encontrado')
    }

    // Filtra los libros que pertenecen a este género
    const filteredBooks = books.filter((book) => book.genreId === genre.id)

    if (filteredBooks.length > 0) {
      res.render('genres/books', {
        title: `Libros de ${genre.name}`,
        books: filteredBooks,
        genre: genre.name
      })
    } else {
      res.status(404).send('No hay libros en este género')
    }
  }
}

module.exports = BookController
