import React, { useState } from 'react';

const BlogList = () => {
  const blogs = [
    { id: 1, title: "React Basics", category: "Tech" },
    { id: 2, title: "Healthy Eating", category: "Health" },
    { id: 3, title: "Advanced JavaScript", category: "Tech" },
    { id: 4, title: "Workout Routines", category: "Health" },
    { id: 5, title: "Business Growth Tips", category: "Business" },
  ];

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="p-6">
           {/* Horizontal Filter Options */}
      <div className="flex space-x-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border 
              ${selectedCategory === category 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Display */}
      <div className="grid gap-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="border p-4 rounded shadow-sm">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.category}</p>
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
