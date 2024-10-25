const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')

const usersData = fs.readFileSync(path.join('data', 'users.json'), 'utf8')
const users = JSON.parse(usersData)

const UserController = {
  login: (req, res) => {
    res.render('login', { title: 'LectPlanet' })
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
    res.redirect('/admin')
    // res.redirect('/admin')
  }
}
module.exports = UserController
