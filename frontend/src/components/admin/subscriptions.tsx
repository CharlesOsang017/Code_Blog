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

type ErrorResponse = {
  message: string;
};

const Subscriptions = () => {
  const queryClient = useQueryClient();

  const {
    data: subscriptions,
    isLoading,
    isError,
    error,
  } = useQuery<Subscription[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await axios.get("/api/subscriptions/all");
      return response?.data;
    },
  });

  const { mutate: deleteSub } = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`/api/subscriptions/${id}`);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Subscription deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data?.message || "Failed to delete subscription."
      );
    },
  });

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>All Subscriptions</h1>

      <div className='h-100 overflow-y-auto border border-gray-300 rounded-lg'>
        {isLoading && (
          <div className='flex justify-center py-8'>
            <p className='font-medium'>Loading subscriptions...</p>
          </div>
        )}

        {isError && (
          <div className='flex justify-center py-8'>
            <p className='font-medium text-red-600'>
              {(error as AxiosError<ErrorResponse>)?.message}
            </p>
          </div>
        )}

        {!isLoading &&
        !isError &&
        subscriptions &&
        subscriptions.length > 0 ? (
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
              {subscriptions.map((sub) => (
                <tr key={sub?._id} className='odd:bg-white even:bg-gray-50'>
                  <td className='px-4 py-2 border-b'>{sub?.email}</td>
                  <td className='px-4 py-2 border-b'>
                    {new Date(sub?.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-4 py-2 border-b'>
                    <button
                      className='cursor-pointer text-red-600 hover:text-red-800 transition'
                      onClick={() => {
                        deleteSub(sub?._id);
                      }}
                      aria-label='Delete subscription'
                    >
                      <X size={20}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !isLoading &&
          !isError && (
            <div className='flex justify-center mt-12'>
              <p className='font-medium'>Subscription List is empty</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
