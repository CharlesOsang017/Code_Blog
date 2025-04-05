import express from 'express'
import { admin } from '../middleware/admin.middleware.js';
import { protectRoute } from '../middleware/protect.middleware.js';

const router = express.Router();

router.post('/create', admin, protectRoute, createBlog)

export default router;