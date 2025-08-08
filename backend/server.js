// server.js
import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/postroutes.js';
dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Port config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
