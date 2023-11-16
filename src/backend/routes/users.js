const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/User');

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', (req, res) => {
  // Registration logic
});

// @route   POST /api/users/login
// @desc    Authenticate & login
// @access  Public
router.post('/login', (req, res, next) => {
  // Login logic
});

module.exports = router;
