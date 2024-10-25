const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

/* Render form */
router.get('/login', UserController.login)
// Procces login and validate role
router.post('/login', UserController.processLogin)
// Finish cookie autenthication
router.get('/logout', UserController.logout)

module.exports = router
