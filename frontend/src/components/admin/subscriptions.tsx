import { X } from "lucide-react";
import React from "react";

const Subscriptions = () => {
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
            {Array.from({ length: 20 }).map((_, i) => (
              <tr key={i} className='odd:bg-white even:bg-gray-50'>
                <td className='px-4 py-2 border-b'>user{i}@email.com</td>
                <td className='px-4 py-2 border-b'>2025-04-09</td>
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
