import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

type Props = {};

function UserLayout({}: Props) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
