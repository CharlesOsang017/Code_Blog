import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './lib/db.js';

dotenv.config()

const app = express();

const port = process.env.PORT

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectDb()
});