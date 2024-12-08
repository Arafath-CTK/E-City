const express = require('express')
const router = express.Router()

const adminControllers = require('../controllers/admin');

router.get("/signin", adminControllers.adminAuthCheck)

module.exports = router