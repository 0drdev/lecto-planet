const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

/* Render form */
router.get('/login', UserController.login)

router.post('/login', UserController.processLogin)

module.exports = router
