export const createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    let {thumbnail} = req.body;   
   
    if (!title || !description || !category){
        return res.status(400).json({message: 'All fields are required'})
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
