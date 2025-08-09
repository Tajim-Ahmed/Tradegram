import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postroutes.js';
import locationRoutes from './routes/locationroute.js';


const router = express.Router();

dotenv.config();
const app = express();

router.get('/', (req, res) => {
  res.send('Location endpoint is live');
});


// Enable CORS for frontend (Vite dev server on port 5173)
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api/location', locationRoutes);
// app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
