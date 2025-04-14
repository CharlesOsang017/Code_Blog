import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { X } from "lucide-react";

type Subscription = {
  _id: string;
  email: string;
  createdAt: string;
};

const Subscriptions = () => {
  const { data: subscriptions, isLoading } = useQuery<Subscription[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await axios.get("/api/subscriptions/all");
      return response?.data;
    },
  });
  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>All Subscriptions</h1>
      <div className='h-100 overflow-y-auto border border-gray-300 rounded-lg'>
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
            {/* Example rows for testing scroll */}
            {subscriptions?.map((sub) => (
              <tr key={sub?._id} className='odd:bg-white even:bg-gray-50'>
                <td className='px-4 py-2 border-b'>{sub?.email}</td>
                <td className='px-4 py-2 border-b'>
                  {new Date(sub.createdAt).toLocaleDateString()}
                </td>
                <td className='px-4 py-2 border-b'>
                  <button className='cursor-pointer'>
                    <X />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
