import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { X } from "lucide-react";
import { toast } from "sonner";
import type { AxiosError } from "axios";

type Subscription = {
  _id: string;
  email: string;
  createdAt: string;
};

const Subscriptions = () => {
  const { data: subscriptions } = useQuery<Subscription[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await axios.get("/api/subscriptions/all");
      return response?.data;
    },
  });
  // const { id } = useParams();
  // console.log("ID", id);
  type ErrorResponse = {
    message: string;
  };
  const queryClient = useQueryClient();

  const { mutate: deleteSub } = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`/api/subscriptions/${id}`);
      return response?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data?.message);
    },
  });
  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>All Subscriptions</h1>
      <div className='h-100 overflow-y-auto border border-gray-300 rounded-lg'>
        {subscriptions && subscriptions.length > 0 ? (
          <table className='min-w-full'>
            <thead className='bg-gray-100 text-gray-800 sticky top-0 z-10'>
              <tr>
                <th className='text-left px-4 py-2 border-b'>
                  EMAIL SUBSCRIPTION
                </th>
                <th className='text-left px-4 py-2 border-b'>DATE</th>
                <th className='text-left px-4 py-2 border-b'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions?.map((sub) => (
                <tr key={sub?._id} className='odd:bg-white even:bg-gray-50'>
                  <td className='px-4 py-2 border-b'>{sub?.email}</td>
                  <td className='px-4 py-2 border-b'>
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-4 py-2 border-b'>
                    <button
                      className='cursor-pointer'
                      onClick={() => deleteSub(sub?._id)}
                    >
                      <X />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='flex justify-center mt-50'>
            <p className='font-medium'>Subscription List is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
