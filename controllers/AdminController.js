const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || 'miSuperSecreto'

const AdminController = {
  index: (req, res) => {
    // Verificar el token
    const token = req.cookies.token // Asegúrate de tener el token en las cookies
    if (!token) {
      return res.redirect('/user/login') // Redirigir a login si no hay token
    }
    try {
      // Decodificar el token
      const decodedToken = jwt.verify(token, SECRET_KEY)
      // Pasar el usuario decodificado a la vista
      res.render('admin/index', { title: 'AdminPage', user: decodedToken })
    } catch (error) {
      // Manejo de errores si el token es inválido
      console.error(error)
      return res.redirect('/user/login') // Redirigir a login si el token no es válido
    }
  }
}
module.exports = AdminController
