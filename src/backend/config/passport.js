const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model (Create this model next)
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      // User.findOne...
    })
  );

  passport.serializeUser((user, done) => {/* ... */});
  passport.deserializeUser((id, done) => {/* ... */});
};
