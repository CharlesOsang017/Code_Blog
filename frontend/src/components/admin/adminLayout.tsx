import { Outlet } from "react-router-dom"
import AdminDashboard from "./AdminDashboard"

type Props = {}

function AdminLayout({}: Props) {
  return (
    <div>
      <AdminDashboard />
      <Outlet />
    </div>
  )
}

export default AdminLayout