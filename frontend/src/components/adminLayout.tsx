import { Outlet } from "react-router-dom"

type Props = {}

function AdminLayout({}: Props) {
  return (
    <div>
      <h1>Admin Panel</h1>
      Navbar
      <Outlet />
    </div>
  )
}

export default AdminLayout