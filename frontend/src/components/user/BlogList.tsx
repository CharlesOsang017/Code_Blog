import { ArrowRight } from "lucide-react";
import  { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "React Basics",
      category: "Tech",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJmGQU-YJkAWvjqyS0zA6Ul5zqRPNBK_8YA&s",
    },
    {
      id: 2,
      title: "Healthy Eating Business Growth Tips Business Growth Tips",
      category: "Health",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      thumbnail:
        "https://cocoricoweb.com/wp-content/uploads/2020/03/comment-creer-un-blog-intro-03-18-1246.jpg",
    },
    {
      id: 3,
      title: "Advanced JavaScript Business Growth Tips ",
      category: "Tech",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/C5612AQHgkRcjNWyu6A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520240807249?e=2147483647&v=beta&t=B6j4BIsjzFa8UDJwNwFDukiMsi_cgrqOvPlselclgzk",
    },
    {
      id: 4,
      title: "Workout Routines Business Growth TipsBusiness Growth Tips",
      category: "Health",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/C5612AQEmCPPfzY5jRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1617087332742?e=2147483647&v=beta&t=WX60nOMDFT8eLqQiHcLSxWSXOeHgv3hOADXl7q7FlCM",
    },
    {
      id: 5,
      title: "Business Growth Tips Business Growth TipsBusiness Growth Tips",
      category: "Business",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
            <div
              key={blog.id}
              className='hover:border-gray-900 border-gray-300 hover:shadow-md max-w-[400px] border rounded shadow-sm'
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className='object-contain'
              />
              <div className='px-6'>
                <p className='text-sm px-2 py-1 mt-4 bg-black text-white inline-block rounded-sm'>
                  {blog.category}
                </p>

                <h3 className='text-md mb-4 font-medium tracking-tighter mt-4'>
                  {blog.title}
                </h3>
                <p className='line-clamp-3 text-md tracking-tighter text-gray-700 mb-4 flex-grow'>
                  {blog.description}
                </p>
                <Link to={`blog-details/${blog.id}`} className='flex gap-1 cursor-pointer items-center font-medium mb-4'>
                  <h2 className='text-lg tracking-tighter'>Read more</h2>
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
