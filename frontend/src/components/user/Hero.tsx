import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-medium'>Latest Blogs</h2>
      <p className='w-[750px] mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non
        accusamus accusantium eius cupiditate eligendi, magnam fuga fugiat,
        ipsum natus quam quibusdam necessitatibus nostrum, laborum inventore
        pariatur enim dolorem ab.
      </p>
      <div className='mt-4 mb-4 flex gap-2 items-center'>
        <input
          type='text'
          placeholder='Enter your email'
          className='border w-[260px] rounded-md  border-gray-400 px-3 py-2 gap-2 shadow-lg'
        />
        <Button className='cursor-pointer'>Subscribe</Button>
      </div>
    </div>
  );
};

export default Hero;
