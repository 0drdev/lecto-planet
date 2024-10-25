// errorHandlers.js
const path = require('path')
const fs = require('fs')
const createError = require('http-errors')
// catch 404 and forward to error handler
const handle404 = (req, res, next) => {
  next(createError(404))
}

// error handler
const errorHandler = (err, req, res, next) => {
  // Define the message and date
  const message = 'Error' + err.message
  const dateTime = new Date().toLocaleString()

  // Define the route file log
  const logPath = path.join('logs', 'error_logs.txt')

  // Make sure the ‘logs’ directory exists
  if (!fs.existsSync('logs')) {
    fs.mkdir('logs')
  }

  // Create stream for this file log and write mesagge error
  const logStream = fs.createWriteStream(logPath, { flags: 'a' })
  logStream.write(`${dateTime} - ${message}\n`)
  logStream.end()

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
}

module.exports = { handle404, errorHandler }
