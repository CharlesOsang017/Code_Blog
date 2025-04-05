import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './lib/db.js';
import userRoutes from './routes/user.route.js'
import blogRoutes from './routes/blog.routes.js'

dotenv.config()

const app = express();
const port = process.env.PORT

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/blogs', blogRoutes)
// Connect to DB and listening to a port
app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
     connectDb()
});