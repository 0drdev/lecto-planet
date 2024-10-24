const fs = require('node:fs')
const path = require('path')

const data = fs.readFileSync(path.join('data', 'books.json'), 'utf8')
const books = JSON.parse(data)

const GenreController = {
  allGenres: (req, res) => {
    const genres = [...new Set(books.map((book) => book.genre))]
    res.render('genres/genres', { title: 'LectoPlanet', genres })
  }
}
module.exports = GenreController
