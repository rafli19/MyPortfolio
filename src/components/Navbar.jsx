import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 font-medium rounded-md transition-colors duration-200 ${
      isActive
        ? "text-emerald-500 border-b-2 border-emerald-500"
        : "text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `py-2 font-medium transition-colors duration-200 ${
      isActive
        ? "text-emerald-500"
        : "text-slate-600 dark:text-slate-300 hover:text-emerald-500"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300
      bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-700
      ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          RAFERL
        </NavLink>

        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={navLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-slate-500 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 p-2 rounded-full transition-colors"
          >
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`} />
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden text-slate-500 dark:text-slate-300 hover:text-emerald-500 p-2 rounded-md transition-colors"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-4 flex flex-col space-y-1">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={mobileNavLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
