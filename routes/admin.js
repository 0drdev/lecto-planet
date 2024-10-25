const express = require('express')
const AdminController = require('../controllers/AdminController')
const router = express.Router()

/* Render home admin */
router.get('/', AdminController.index)

module.exports = router
