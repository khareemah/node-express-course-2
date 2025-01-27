const express = require('express');
const router = express.Router();

const { authenticateUser } = require('../middleware/authentication');
const {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  logout,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/verify-email', verifyEmail);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.delete('/logout', authenticateUser, logout);

module.exports = router;
