import { useState } from "react";
import { Link } from "react-router-dom";
import { CirclePlus, Mail, NotebookText } from "lucide-react";
import logo from "../../assets/logoipsum-224.svg";

const Sidebar = () => {
  const [active, setActive] = useState("Add Blogs");

  const links = [
    { name: "Add Blogs", href: "", icon: <CirclePlus /> },
    { name: "Blog Lists", href: "blog-list", icon: <NotebookText /> },
    { name: "Subscriptions", href: "subscriptions", icon: <Mail /> },
  ];

  return (
    <aside className='w-64 bg-gray-100 border-r border-gray-800 text-black p-4'>
      <div className="flex items-center gap-2 pb-6">
        <img src={logo} alt="" />
        <h2 className="text-2xl font-bold">Code_Blog</h2>
      </div>
      <nav>
        <ul className='space-y-4'>
          {links.map((link) => (
            <li
              key={link.name}
              onClick={() => setActive(link.name)}
              className={`border px-10 py-2 border-gray-800 cursor-pointer transition-all ${
                active === link.name
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <Link to={link.href} className='flex gap-2 w-full h-full'>
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
