const express = require('express')
const AdminController = require('../controllers/AdminController')
const authMiddlware = require('../middlewares/authMiddlware')
const router = express.Router()

/* Render home admin */
router.get('/', authMiddlware, AdminController.index)

module.exports = router
