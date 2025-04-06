import dotenv from 'dotenv';
import express from 'express';
import cookieParser from "cookie-parser";
import { connectDb } from './lib/db.js';
import userRoutes from './routes/user.route.js'
import blogRoutes from './routes/blog.route.js'
import {v2 as cloudinary} from 'cloudinary';

dotenv.config()

const app = express();
const port = process.env.PORT


//cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY, // Your Cloudinary API key
    api_secret: process.env.CLOUDINARY_SECRET_KEY, // Your Cloudinary API secret
  });

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/blogs', blogRoutes)
// Connect to DB and listening to a port
app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
     connectDb()
});