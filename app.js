const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const { errorHandler, handle404 } = require('./middlewares/errorHandler')
const authMiddlware = require('./middlewares/authMiddlware')
const app = express()

// Initialized enviroment variables
require('dotenv').config()
const PORT = process.env.PORT || 3000

// Disable x-powered-by Response Header
app.disable('x-powered-by')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.use(authMiddlware)

// Middlewares error and 404
app.use(handle404)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT} `)
})

module.exports = app
