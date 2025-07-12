const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');         // ✅ New
const categoryRoutes = require('./routes/categoryRoutes'); // ✅ New
const errorHandler = require('./middleware/errorHandler'); // connects to errorHandler.js

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);


// Test Route
app.get('/', (req, res) => {
  res.send('API is working 🎉');
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);           // ✅ Posts routes
app.use('/api/categories', categoryRoutes);  // ✅ Categories routes

// Optional: Centralized error handling middleware
// app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
