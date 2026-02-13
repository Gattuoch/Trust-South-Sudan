import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Newspaper, Briefcase, LogOut, Menu, X } from "lucide-react";
import LogoutConfirm from "./LogoutConfirm";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={closeSidebar} />}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64
          bg-slate-900 text-white flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-slate-700">
          <Logo />
          <button onClick={closeSidebar} aria-label="Close Sidebar">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="hidden lg:flex items-center gap-2 px-6 py-5 border-b border-slate-700">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-6 overflow-y-auto">
          <Section title="MAIN">
            <NavItem to="/admin/dashboard" icon={LayoutDashboard} label="Dashboard" onClick={closeSidebar} end />
          </Section>

          <Section title="CONTENT">
            <NavItem to="/admin/news" icon={Newspaper} label="News" onClick={closeSidebar} />
            <NavItem to="/admin/jobs" icon={Briefcase} label="Jobs" onClick={closeSidebar} />
          </Section>

          <Section title="ACCOUNT">
            <LogoutButton icon={LogOut} label="Logout" onClick={() => setShowLogoutModal(true)} />
          </Section>
        </nav>
      </aside>

      {/* Mobile Open Button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-50 bg-white p-3 rounded-xl shadow hover:bg-gray-100 transition"
          aria-label="Open Sidebar"
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      )}

      {/* Logout Modal */}
      <LogoutConfirm open={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
    </>
  );
}

/* ================= Logo ================= */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white font-bold rounded-lg">
        A
      </div>
      <h1 className="text-lg font-semibold">AdminPanel</h1>
    </div>
  );
}

/* ================= Section ================= */
function Section({ title, children }) {
  return (
    <div>
      <p className="px-3 mb-2 text-xs font-semibold tracking-widest text-gray-400">{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

/* ================= NavItem ================= */
function NavItem({ icon: Icon, label, to, onClick, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition
         ${isActive ? "bg-blue-600 text-white shadow" : "text-gray-400 hover:bg-gray-700 hover:text-white"}`
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
        bg-red-50 text-red-600
        hover:bg-red-600 hover:text-white cursor-pointer
      "
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-sm font-medium text-left">
        {label}
      </span>
    </button>
  );
}