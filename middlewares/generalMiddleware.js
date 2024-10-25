// generalMiddleware.js
const fs = require('fs')
const path = require('path')

const generalMiddleware = (req, res, next) => {
  const message = 'Ingreso a la ruta: ' + req.url
  const dateTime = new Date().toLocaleString()
  const logPath = path.join('logs', 'general_logs.txt')

  // Make sure the ‘logs’ directory exists
  if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs')
  }

  // Write the message log in the file general_logs.txt
  try {
    fs.appendFileSync(logPath, `${dateTime} - ${message}\n`)
  } catch (err) {
    console.error('Error al escribir en el archivo de logs', err)
  }

  next()
}
module.exports = generalMiddleware
