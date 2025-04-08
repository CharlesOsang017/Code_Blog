import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/adminLayout";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import UserLayout from "./components/userLayout";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import Subscriptions from "./components/Subscriptions"; // make sure "S" is capital if the file name is

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
          <Route index element={<AdminDashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="subscriptions" element={<Subscriptions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
