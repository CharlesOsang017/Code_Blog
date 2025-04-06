import { v2 as cloudinary } from "cloudinary";
import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const { title, description, category, thumbnail } = req.body;
    // const userId = req.user._id;

    if (!title || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imgUrl = null;
    if (thumbnail) {
      const uploadResponse = await cloudinary.uploader.upload(thumbnail);
      imgUrl = uploadResponse.secure_url;
    }

    // Create a blog
    const blog = new Blog({
      title,
      description,
      category,
      thumbnail: imgUrl,
      author: req.user._id,
    });

    await blog.save();
    return res.status(201).json({ message: "Blog created successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
