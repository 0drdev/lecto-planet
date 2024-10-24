const fs = require('node:fs')
const path = require('path')

// Lee el archivo genres.json
const genresData = fs.readFileSync(path.join('data', 'genres.json'), 'utf8')
const genres = JSON.parse(genresData)

const GenreController = {
  allGenres: (req, res) => {
    // Filtra la lista de géneros para enviarlos a la vista
    res.render('genres/genres', { title: 'LectoPlanet', genres })
  }
}

module.exports = GenreController
