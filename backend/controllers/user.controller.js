import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/token.js";
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
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({ email, username, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "user created succeeffully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!password || !email) {
      return res.status(400).json({ message: "Fill all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // compare the password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // set token
    await generateTokenAndSetCookie(user._id, res);
    // Optional: exclude password before sending response
    const { password: _, ...userData } = user.toObject();

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Logout user
export const logOutUser = async(req, res)=>{
  try {
    // sign out user
    res.cookie('token', " ", {maxAge: 0})
    return res.status(200).json({message: 'logged out successfully!'})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}