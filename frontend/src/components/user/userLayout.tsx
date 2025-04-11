import { Outlet } from "react-router-dom";
import Header from "./Header";

type Props = {};

function UserLayout({}: Props) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default UserLayout;
