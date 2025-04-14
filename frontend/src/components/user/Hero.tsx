import { useState } from "react";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import type { AxiosError } from "axios";

type ErrorResponse = {
  message: string;
};
const Hero = () => {
  const [subscribe, setSubscribe] = useState<string>("");

  const { mutate } = useMutation({
    mutationFn: async (subscribe: string) => {
      const response = await axios.post("/api/subscriptions/subscribe", {
        email: subscribe,
      });
      return response?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      setSubscribe("");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data?.message);
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(subscribe);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-medium'>Latest Blogs</h2>
      <p className='w-[750px] mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non
        accusamus accusantium eius cupiditate eligendi, magnam fuga fugiat,
        ipsum natus quam quibusdam necessitatibus nostrum, laborum inventore
        pariatur enim dolorem ab.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-4 mb-4 flex gap-2 items-center'
      >
        <input
          type='text'
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
          placeholder='Enter your email'
          className='border w-[260px] rounded-md  border-gray-400 px-3 py-2 gap-2 shadow-lg'
        />
        <Button className='cursor-pointer'>Subscribe</Button>
      </form>
    </div>
  );
};

export default Hero;
