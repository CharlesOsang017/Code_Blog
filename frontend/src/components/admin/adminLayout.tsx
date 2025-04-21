import AdminDashboard from "./AdminDashboard"

type Props = {}

function AdminLayout({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <AdminDashboard /> 
        </main> 
    </div>
  )
}

export default AdminLayout