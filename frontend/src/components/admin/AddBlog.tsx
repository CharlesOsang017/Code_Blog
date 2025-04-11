import { CloudUpload } from "lucide-react";
import { Button } from "../ui/button";
import MyEditor from "./Editor";
import Category from "./Category";

const AddBlog = () => {
  return (
    <div className='ml-6 gap-y-10'>
      <div className='gap-8'>
        <h2 className='font-medium'>Upload Thumbnail</h2>
        <div className='mt-2 bg-gray-400 cursor-pointer w-[120px] flex flex-col items-center justify-center text-gray-700 py-1 border-2 border-dotted border-gray-300'>
          <CloudUpload />
          <p>upload</p>
        </div>
      </div>
      <div className="mt-6 mb-3">
        <h2 className='font-medium'>Blog Title</h2>
        <input
          className='w-[400px] px-3 py-2 border border-gray-300 rounded mt-2'
          type='text'
          placeholder='type here...'
        />
      </div>

      <div>
        <h2 className='font-medium'>Blog Description</h2>
        <MyEditor />
      </div>
      <Category />
      <Button className='cursor-pointer'>Add Blog</Button>
    </div>
  );
};

export default AddBlog;
