const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Email validation helper
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Register User
router.post('/register', async (req, res) => {
  const { fullName, email, password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!fullName || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  // Check email format
  if (email && !isValidEmail(email)) {
    errors.push({ msg: 'Invalid email format' });
  }

  // Check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  // Check password length
  if (password && password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ msg: 'Email is already registered' });
    }

    const newUser = new User({
      fullName,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();

    res.status(201).json({ message: 'You are now registered and can log in' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error registering new user' });
  }
});

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      req.logIn(user, err => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        // Adjust the response as per your requirement
        return res.status(200).json({ message: 'Logged in successfully', user: { id: user.id, fullName: user.fullName, email: user.email } });
      });
    })(req, res, next);
});

module.exports = router;