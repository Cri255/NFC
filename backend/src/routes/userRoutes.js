const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleWare');

router.get('/users', authMiddleware, userController.getAllUsers);

module.exports = router;
