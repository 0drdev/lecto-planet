const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || 'miSuperSecreto'

const authMiddlware = (req, res, next) => {
  const token = req.cookies.token
  if (!token) return res.redirect('/user/login')

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.redirect('/user/login')
    req.user = user // Almacenar el usuario decodificado en la solicitud
    next() // Pasar al siguiente middleware o ruta
  })
}

module.exports = authMiddlware
