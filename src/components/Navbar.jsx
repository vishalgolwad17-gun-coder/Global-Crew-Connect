import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpeg";

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block bg-[#051024] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <p className="text-gray-300">
            Overseas Recruitment & International Placement Services
          </p>

          <a
            href="tel:+919987956826"
            className="text-yellow-400 font-medium hover:text-yellow-300 transition"
          >
            +91 99879 56826
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#08142c]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 flex-1 min-w-0"
          >
            <img
              src={logo}
              alt="Global Crew Connect"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover border border-white/10"
            />

            <div className="min-w-0">
              <h2 className="text-yellow-400 font-bold text-sm md:text-lg truncate">
                GLOBAL CREW CONNECT
              </h2>

              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 truncate">
                Overseas Recruitment
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400 px-5 py-2 rounded-lg font-semibold"
                      : "text-white hover:text-yellow-400 px-5 py-2 rounded-lg transition duration-300"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:+919987956826"
            className="hidden lg:flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={18} />
            Contact Us
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="bg-[#102447] border-t border-white/10">
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-center py-4 text-base font-medium transition ${
                      isActive
                        ? "text-yellow-400 bg-white/5"
                        : "text-white hover:bg-white/5"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-6 pb-6">
              <a
                href="tel:+919987956826"
                className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-black py-4 rounded-xl font-semibold"
              >
                <Phone size={18} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
}