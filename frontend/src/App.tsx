import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin/adminLayout";
import UserLayout from "./components/user/userLayout";
import AddBlog from "./components/admin/AddBlog";
import BlogList from "./components/admin/BlogList";
import Subscriptions from "./components/admin/subscriptions";
import UserDashboard from "./components/user/UserDashboard";


function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>         
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="subscriptions" element={<Subscriptions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
