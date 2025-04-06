import express from 'express'
import { admin } from '../middleware/admin.middleware.js';
import { protectRoute } from '../middleware/protect.middleware.js';
import { createBlog } from '../controllers/blog.controller.js';

const router = express.Router();

router.post('/create', protectRoute, admin, createBlog)

export default router;