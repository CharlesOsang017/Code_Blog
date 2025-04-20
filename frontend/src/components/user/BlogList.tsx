import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Define the Blog type
interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
}

const BlogList = () => {
  const { data: blogs = [], isPending } = useQuery<Blog[]>({
    queryKey: ['allBlogs'],
    queryFn: async () => {
      const response = await axios.get('/api/blogs/all');
      return response.data;
    },
  });

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

  if (isPending) {
    return <div className="p-6 text-center">Loading blogs...</div>;
  }

  return (
    <div className="p-6">
      {/* Horizontal Filter Options */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border cursor-pointer 
              ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Display */}
      <div className="max-w-[1050px] mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="hover:border-gray-900 border-gray-300 hover:shadow-md max-w-[400px] border rounded shadow-sm"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="object-contain"
              />
              <div className="px-6">
                <p className="text-sm px-2 py-1 mt-4 bg-black text-white inline-block rounded-sm">
                  {blog.category}
                </p>

                <h3 className="text-md mb-4 font-medium tracking-tighter mt-4">
                  {blog.title}
                </h3>
                <p className="line-clamp-3 text-md tracking-tighter text-gray-700 mb-4 flex-grow">
                  {blog.description}
                </p>
                <Link
                  to={`blog-details/${blog.id}`}
                  className="flex gap-1 cursor-pointer items-center font-medium mb-4"
                >
                  <h2 className="text-lg tracking-tighter">Read more</h2>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
