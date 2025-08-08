// routes/postRoutes.js
import express from 'express';
import { getAllPosts } from '../controllers/postController.js';

const router = express.Router();

// GET /api/posts
router.get('/', getAllPosts);

export default router;
