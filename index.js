const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes'); // Import student routes
const courseRoutes = require('./routes/courseRoutes'); // Import course routes
const facultyRoutes = require('./routes/facultyRoutes'); // Import faculty routes
const timetableRoutes = require('./routes/timetableRoutes'); // Import timetable routes

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET; 
if (!JWT_SECRET) { 
    console.error('Error: JWT_SECRET is not defined in the environment variables.'); 
    process.exit(1); 
    // Exit the application with an error code 
}

// API routes
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes); // Add student routes
app.use('/api/courses', courseRoutes); // Add course routes
app.use('/api/faculty', facultyRoutes); // Add faculty routes
app.use('/api/timetable', timetableRoutes); // Add timetable routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
