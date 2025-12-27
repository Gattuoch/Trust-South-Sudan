import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/impact", label: "Impact" },
    { to: "/membership", label: "Membership" },
    { to: "/news", label: "News" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Trust South Sudan Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-lg font-semibold text-gray-900 uppercase">
              Trust South Sudan
            </span>
            <span className="text-xs text-gray-600">
              Restoring Dignity, Building a Sustainable Future
            </span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-900"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md md:hidden">
            <div className="flex flex-col space-y-4 p-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-green-900 ${
                      isActive ? "font-semibold text-green-950" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-[#28e767] px-4 py-2 text-white transition hover:bg-[#12a838]"
              >
                Donate now
              </NavLink>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-semibold"
                  : "text-gray-700 hover:text-[#15ee4c]"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/donate"
            className="rounded-lg bg-[#068f28] px-4 py-2 text-white transition hover:bg-[#15ee4c] "
          >
            Donate Now 
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
