const express = require('express');
const {
  registerUser,
  loginUser,
  getMe,
  googleAuth,
  updateProfile,
  updatePassword
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.post('/google', googleAuth);
router.put('/profile', protect, updateProfile);
router.put('/password', protect, updatePassword);

module.exports = router;