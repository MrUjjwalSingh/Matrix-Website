import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiCalendar,
  FiUsers,
  FiImage,
  FiLogOut,
  FiMessageCircle,
} from "react-icons/fi";

const links = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <FiGrid /> },
  { to: "/admin/projects", label: "Projects", icon: <FiFolder /> },
  { to: "/admin/events", label: "Events", icon: <FiCalendar /> },
  { to: "/admin/team", label: "Team", icon: <FiUsers /> },
  { to: "/admin/gallery", label: "Gallery", icon: <FiImage /> },
  { to: "/admin/feedbacks", label: "Feedbacks", icon: <FiMessageCircle /> },
];

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("admin_jwt");
    navigate("/admin/login");
  };

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg fixed">
      <div className="h-20 flex items-center justify-center text-2xl font-bold border-b border-gray-800">
        Admin Portal
      </div>
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 rounded-lg transition font-medium text-base hover:bg-gray-800 ${
                    isActive ? "bg-gray-800 text-cyan-400" : "text-gray-200"
                  }`
                }
                end
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-6 py-3 m-4 rounded-lg bg-gray-800 hover:bg-red-600 transition text-base font-medium text-red-400 hover:text-white"
      >
        <FiLogOut className="text-xl" /> Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
