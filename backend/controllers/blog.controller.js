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

export const deleteBlog = async(req, res)=>{
  try {
    const blog = await Blog.findById(req.params.id)
    if(!blog){
      return res.status(404).json({message: 'blog not found'})
    }
    // checking if the blog user is the logged in user
    if(!blog.author.equals(req.user._id)){
      return res.status(401).json({message: 'You are not authorized to delete this blog'})
    }
    // Delete the image from cloudinary
    if(blog.thumbnail){
      const imgId = blog.thumbnail.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }
    await Blog.findByIdAndDelete(req.params.id)
    return res.status(200).json({message: 'Blog post deleted successfully!'})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}
