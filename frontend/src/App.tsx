import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin/adminLayout";
import UserLayout from "./components/user/userLayout";
import AddBlog from "./components/admin/AddBlog";
import BlogList from "./components/admin/BlogList";
import Subscriptions from "./components/admin/subscriptions";
import UserDashboard from "./components/user/UserDashboard";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import BlogDetails from "./components/user/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path='blog-details/:id' element={<BlogDetails />}/>
        </Route>

        {/* Admin Layout */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AddBlog />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='subscriptions' element={<Subscriptions />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
