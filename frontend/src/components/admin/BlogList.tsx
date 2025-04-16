import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import axios from "axios";

type Blog = {
  _id: string;
  title: string;
  description: string;
  category: "technology" | "programming" | "lifestyle" | "startup" | "sports";
  thumbnail: string;
  author: {
    _id: string;
    username: string;
    email: string;
    profileImg: string;
    role: "reader" | "admin";
  };
  createdAt: string;
  updatedAt: string;
};

const BlogList = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axios.get("/api/blogs/all");
      return response.data;
    },
  });

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>All Blogs</h1>

      <div className='h-100 overflow-y-auto border border-gray-300 rounded-lg'>
        {isLoading && (
          <div className='flex justify-center py-8'>
            <p className='font-medium'>Loading blogs...</p>
          </div>
        )}

        {isError && (
          <div className='flex justify-center py-8'>
            <p className='font-medium text-red-600'>Failed to load blogs.</p>
          </div>
        )}

        {!isLoading && !isError && Array.isArray(blogs) && blogs?.length > 0 ? (
          <table className='min-w-full'>
            <thead className='bg-gray-100 text-gray-800 sticky top-0 z-10'>
              <tr>
                <th className='text-left px-4 py-2 border-b'>AUTHOR NAME</th>
                <th className='text-left px-4 py-2 border-b'>BLOG TITLE</th>
                <th className='text-left px-4 py-2 border-b'>DATE</th>
                <th className='text-left px-4 py-2 border-b'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {blogs?.map((blog: Blog) => (
                <tr key={blog._id} className='odd:bg-white even:bg-gray-50'>
                  <td className='px-4 py-2 border-b flex items-center gap-2'>
                    <img
                      src={blog?.author?.profileImg || "/default-profile.png"}
                      alt={blog?.author?.username}
                      className='w-8 h-8 object-cover rounded-full'
                    />
                    {blog?.author?.username}
                  </td>
                  <td className='px-4 py-2 border-b'>{blog?.title}</td>
                  <td className='px-4 py-2 border-b'>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-4 py-2 border-b'>
                    <button
                      className='cursor-pointer text-red-600 hover:text-red-800 transition'
                      aria-label='Delete blog'
                    >
                      <X size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !isLoading &&
          !isError && (
            <div className='flex justify-center py-8'>
              <p className='font-medium'>No blogs available.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogList;
