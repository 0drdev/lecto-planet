const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || 'miSuperSecreto'

const usersData = fs.readFileSync(path.join('data', 'users.json'), 'utf8')
const users = JSON.parse(usersData)

const UserController = {
  login: (req, res) => {
    const token = req.cookies.token
    let user = null

    if (token) {
      try {
        user = jwt.verify(token, SECRET_KEY)
        // Si el usuario ya está autenticado, redirige a la página principal o a otra
        return res.redirect('/') // O la ruta que consideres apropiada
      } catch (error) {
        console.error(error)
      }
    }

    res.render('login', { title: 'LectoPlanet', user }) // Pasa user como null para la vista de login
  },
  processLogin: async (req, res) => {
    const { email, password, checkbox } = req.body

    // find if exists user
    const user = users.find((user) => user.email === email)

    if (!user) {
      return res.status(404).render('login', {
        title: 'LectoPlanet',
        error: 'User not found'
      })
    }
    const passwordMatched = await bcrypt.compare(password, user.password)

    if (!passwordMatched) {
      return res.status(401).render('login', {
        title: 'LectoPlanet',
        error: 'Password incorrect'
      })
    }
    // validate checkbox
    const isChecked = checkbox === 'on' // value this checkbos is sticky is 'on'

    if (!isChecked) {
      return res.status(400).render('login', {
        title: 'LectoPlanet',
        error: 'Debes aceptar los términos y condiciones'
      })
    }
    // Generate token
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        role: user.role,
        issuedAt: new Date().toISOString() // Add date and time of generation
      },
      SECRET_KEY,
      {
        expiresIn: '1h'
      }
    )
    // Store token in a secure cookie (httpOnly for security)
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }) // Cookie last 1h
    console.log(token)

    res.redirect('/admin')
  },
  logout: (req, res) => {
    res.clearCookie('token')
    console.log('User is desconnected!')
    res.redirect('/user/login') // Redirect to form login
  }
}
module.exports = UserController
