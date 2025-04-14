import { formDataType } from "./AddBlog";

type CategoryProps = {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
};

const Category = ({ formData, setFormData }: CategoryProps) => {
  return (
    <div className='w-[200px] mt-6 mb-6'>
      <label className='block mb-1 font-medium'>Blog Category</label>
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className='w-full border rounded px-3 py-2 mt-1'
      >
        <option value='startup'>Startup</option>
        <option value='technology'>Technology</option>
        <option value='programming'>Programming</option>
        <option value='sports'>Sports</option>
        <option value='lifestyle'>Lifestyle</option>
      </select>
    </div>
  );
};

export default Category;
