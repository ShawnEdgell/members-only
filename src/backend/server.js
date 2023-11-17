require('dotenv').config({ path: '../../.env.local' });

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Trust first proxy
app.set('trust proxy', 1);  // Add this line

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Security Middlewares
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    ignoreXForwardedFor: true
}));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport Config
require('./config/passport')(passport);

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
