// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const jobsRoutes = require('./routes/jobRoutes');
const applicantsRoutes = require('./routes/applicantRoutes');
const interviewsRoutes = require('./routes/interviewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes); // Use auth routes
app.use('/jobs', jobsRoutes);
app.use('/applicants', applicantsRoutes);
app.use('/interviews', interviewsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
