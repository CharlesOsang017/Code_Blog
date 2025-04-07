import express from 'express'
import { admin } from '../middleware/admin.middleware.js';
import { protectRoute } from '../middleware/protect.middleware.js';
import { createBlog, deleteBlog, allBlogs } from '../controllers/blog.controller.js';

const router = express.Router();

router.post('/create', protectRoute, admin, createBlog)
router.delete('/delete/:id', protectRoute, admin, deleteBlog)
router.get("/all", allBlogs)

export default router;