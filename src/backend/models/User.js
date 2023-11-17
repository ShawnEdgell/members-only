const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Additional fields like isAdmin, membershipStatus, etc.
});

// Create the User model and specify the collection name
const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;
