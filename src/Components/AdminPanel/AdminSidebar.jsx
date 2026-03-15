import { NavLink } from "react-router-dom";
import { FiGrid, FiFileText, FiBriefcase, FiLogOut } from "react-icons/fi";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 font-bold text-lg">
        🛡️ AdminPanel
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-1">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <FiGrid /> Dashboard
        </NavLink>

        <NavLink
          to="/admin/news"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
        >
          <FiFileText /> News
        </NavLink>

        <NavLink
          to="/admin/jobs"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
        >
          <FiBriefcase /> Jobs
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button className="flex items-center gap-2 text-red-500 text-sm">
          <FiLogOut /> Logout
        </button>
      </div>
    </aside>
  );
}
