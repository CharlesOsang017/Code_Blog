import React from 'react'

const Sidebar = () => {
  return (
          <aside className="w-64 bg-gray-700 text-white p-4">
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
            <nav>
              <ul className="space-y-4">
                <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
                <li className="hover:text-gray-300 cursor-pointer">Users</li>
                <li className="hover:text-gray-300 cursor-pointer">Reports</li>
                <li className="hover:text-gray-300 cursor-pointer">Settings</li>
              </ul>
            </nav>
          </aside>
  )
}

export default Sidebar