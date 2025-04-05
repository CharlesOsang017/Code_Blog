import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
export const getRequest = async (req, res) => {
  res.send("get request");
};

// Register User specificall an admin
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // checking for an existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is  already taken" });
    }
    // creating a new user
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await new User({ email, username, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "user created succeeffully!" });
  } catch (error) {
    return res.status(500).json({message: error.message})    
  }
};
