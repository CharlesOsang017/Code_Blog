import React, { useState } from "react";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "React Basics",
      category: "Tech",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJmGQU-YJkAWvjqyS0zA6Ul5zqRPNBK_8YA&s",
    },
    {
      id: 2,
      title: "Healthy Eating",
      category: "Health",
      thumbnail:
        "https://cocoricoweb.com/wp-content/uploads/2020/03/comment-creer-un-blog-intro-03-18-1246.jpg",
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      category: "Tech",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/C5612AQHgkRcjNWyu6A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520240807249?e=2147483647&v=beta&t=B6j4BIsjzFa8UDJwNwFDukiMsi_cgrqOvPlselclgzk",
    },
    {
      id: 4,
      title: "Workout Routines",
      category: "Health",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/C5612AQEmCPPfzY5jRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1617087332742?e=2147483647&v=beta&t=WX60nOMDFT8eLqQiHcLSxWSXOeHgv3hOADXl7q7FlCM",
    },
    {
      id: 5,
      title: "Business Growth Tips",
      category: "Business",
      thumbnail:
        "https://scrowp.com/wp-content/uploads/2023/11/What-is-a-Blog-Definition-Types-of-Blogs-and-Benefits-Explained.png",
    },
  ];

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className='p-6'>
      {/* Horizontal Filter Options */}
      <div className='flex justify-center space-x-4 mb-6'>
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
      <div className='max-w-[1050px] mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className='max-w-[700px] border rounded shadow-sm'>
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className='object-contain w-full h-40 mb-2'
              />
              <h3 className='text-xl font-semibold text-center'>
                {blog.title}
              </h3>
              <p className='text-sm text-gray-500 text-center'>
                {blog.category}
              </p>
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
