const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Register User
router.post('/register', (req, res) => {
  const { fullName, email, password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!fullName || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  // Check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  // Check pass length
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors, fullName, email, password, password2 });
  } else {
    // Validation passed
    User.findOne({ email: email }).then(user => {
      if (user) {
        // User exists
        errors.push({ msg: 'Email is already registered' });
        res.status(400).json({ errors, fullName, email, password, password2 });
      } else {
        const newUser = new User({
          fullName,
          email,
          password
        });

        // Hash Password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // Set password to hashed
            newUser.password = hash;
            // Save user
            newUser.save()
              .then(user => {
                res.status(201).json({ message: 'You are now registered and can log in' });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/', // Redirect path after successful login
    failureRedirect: '/users/login', // Redirect path if login fails
    failureFlash: true
  })(req, res, next);
});

module.exports = router;
