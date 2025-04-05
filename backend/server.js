import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './lib/db.js';
import userRoutes from './routes/user.route.js'

dotenv.config()

const app = express();
const port = process.env.PORT

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes)

// Connect to DB and listening to a port
app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
     connectDb()
});