import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='hidden md:flex'>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className='flex-1 flex flex-col'>
        <Header />
        <main className='p-6 bg-white flex-1 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
