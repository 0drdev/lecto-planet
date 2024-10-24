const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const { errorHandler, handle404 } = require('./middlewares/errorHandler')
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// Middlewares error and 404
app.use(handle404)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT} `)
})

module.exports = app
