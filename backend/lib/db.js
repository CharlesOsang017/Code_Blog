import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to the Database");
  } catch (error) {
    console.log("Error connecting to Db", error.message);
  }
};
