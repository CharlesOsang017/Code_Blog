import { CloudUpload, X } from "lucide-react";
import { Button } from "../ui/button";
import MyEditor from "./Editor";
import Category from "./Category";
import { useState, useRef } from "react";

export type formDataType = {
  thumbnail: string;
  title: string;
  description: string;
  category: string;
};

const AddBlog = () => {
  const [formData, setFormData] = useState<formDataType>({
    thumbnail: "",
    title: "",
    description: "",
    category: "startup",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData({ ...formData, thumbnail: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData({ ...formData, thumbnail: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault()
    // handleImageUpload()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='ml-6 gap-y-10'>
      <div className='gap-8'>
        <h2 className='font-medium'>Upload Thumbnail</h2>

        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleImageUpload}
          className='hidden'
        />

        {!imagePreview ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className='mt-2 bg-gray-400 cursor-pointer w-[120px] flex flex-col items-center justify-center text-gray-700 py-2 border-2 border-dotted border-gray-300 rounded'
          >
            <CloudUpload />
            <p>Upload</p>
          </div>
        ) : (
          <div className='relative mt-2 w-[150px] h-[100px] border rounded overflow-hidden'>
            <img
              src={imagePreview}
              alt='Thumbnail Preview'
              className='w-full h-full object-contain'
            />
            <button
              onClick={removeImage}
              className='absolute cursor-pointer top-1 right-1 bg-white rounded-full p-1 shadow'
            >
              <X size={12} />
            </button>
          </div>
        )}
      </div>

      <div className='mt-6 mb-3'>
        <h2 className='font-medium'>Blog Title</h2>
        <input
          className='w-[400px] px-3 py-2 border border-gray-300 rounded mt-2'
          type='text'
          placeholder='type here...'
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div>
        <h2 className='font-medium'>Blog Description</h2>
        <MyEditor formData={formData} setFormData={setFormData}/>
      </div>

      <Category  formData={formData} setFormData={setFormData}/>
      <Button className='cursor-pointer mt-4'>Add Blog</Button>
    </form>
  );
};

export default AddBlog;
