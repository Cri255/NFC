const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleWare');
const authController = require('../controllers/authController');

router.post('/verify', authMiddleware, authController.auth)


module.exports = router;
