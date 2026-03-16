import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Squares2X2Icon,
  UsersIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  LogOut,
  
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* ================= Mobile Overlay ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* ================= Sidebar ================= */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64
          bg-slate-900 text-white
          flex flex-col
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* ================= Mobile Header ================= */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <span className="font-semibold">Super Admin</span>
          <button onClick={closeSidebar}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* ================= Header ================= */}
        <div className="hidden lg:block px-6 py-5 text-lg font-semibold border-b border-slate-800">
          Super Admin
        </div>

        {/* ================= Navigation ================= */}
        <nav className="flex-1 px-3 py-6 space-y-6 overflow-y-auto">
          <Section title="MAIN">
            <NavItem
              to="/super-admin/dashboard"
              icon={Squares2X2Icon}
              label="Dashboard"
              onClick={closeSidebar}
              end
            />
          </Section>

          <Section title="ADMIN">
            <NavItem
              to="/super-admin/admin-management"
              icon={UsersIcon}
              label="Admin Management"
              onClick={closeSidebar}
            />
            <NavItem
              to="/super-admin/content-approval"
              icon={CheckBadgeIcon}
              label="Content Approval"
              onClick={closeSidebar}
            />
          </Section>

          <Section title="SYSTEM">
            <NavItem
              to="/super-admin/system-settings"
              icon={Cog6ToothIcon}
              label="System Settings"
              onClick={closeSidebar}
            />
            <NavItem
              to="/super-admin/logs"
              icon={DocumentTextIcon}
              label="Logs"
              onClick={closeSidebar}
            />
          </Section>

          <Section title="ACCOUNT">
            <LogoutButton
              icon={LogOut}
              label="Logout"
              onClick={handleLogout}
            />
          </Section>
        </nav>
      </aside>

      {/* ================= Mobile Open Button ================= */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50
            bg-white p-3 rounded-xl shadow"
        >
          <Bars3Icon className="w-6 h-6 text-gray-800" />
        </button>
      )}
    </>
  );
}

/* ================= Section ================= */
function Section({ title, children }) {
  return (
    <div>
      <p className="px-3 mb-2 text-xs font-semibold tracking-widest text-slate-400">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

/* ================= Nav Item ================= */
function NavItem({ icon: Icon, label, to, onClick, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-3 rounded-xl transition
        ${
          isActive
            ? "bg-blue-600 text-white shadow"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
        `
      }
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
}

/* ================= Logout Button ================= */
function LogoutButton({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition
        bg-red-500/10 text-red-400
        hover:bg-red-600 hover:text-white cursor-pointer
      "
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
