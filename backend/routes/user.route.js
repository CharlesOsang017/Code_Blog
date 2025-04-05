import express from 'express'
import { getRequest } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", getRequest)



export default router