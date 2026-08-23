import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import '../index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    window.location.reload()
  };

  const navLinks = [
    { to: "About", label: "About" },
    { to: "Projects", label: "Projects" },
    { to: "Skills", label: "Skills" },
    { to: "Education", label: "Education" },
    { to: "Experience", label: "Experience" },
    { to: "Certification", label: "Certification" },
    { to: "Contact", label: "Contact" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 ${isScrolled ? "bg-white/30 backdrop-blur-md dark:bg-bg-dark shadow-md" : "bg-white dark:bg-bg-dark"} transition-all duration-300`}>
      <nav className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center gap-3">
        {/* Logo */}

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-bold text-gray-950 dark:text-secondary-text-color">
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-gray-500 dark:hover:text-white transition cursor-pointer">
              <Link to={link.to} activeClass={"active-link"} spy={true} smooth={true} duration={700}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl text-blue-800 dark:text-white hover:text-yellow-400 transition"
            title="Toggle theme"
          >
            {theme === "light" ? <FaMoon className="size-3 md:size-4" /> : <FaSun className="size-3 md:size-4" />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-2xl text-blue-800 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="size-4 md:size-4" /> : <FaBars className="size-4 md:size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-bg-dark px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-sm font-bold text-blue-950 dark:text-secondary-text-color">
            {navLinks.map((link) => (
              <li key={link.to} className="hover:text-blue-800 dark:hover:text-white transition cursor-pointer">
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={700}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={toggleTheme}
                className="text-lg text-blue-800 dark:text-white hover:text-yellow-400 transition"
              >
                {theme === "light" ? (
                  <div className="flex items-center text-sm gap-2"><FaMoon className="size-3 md:size-4 text-sm " /> Dark Mode</div>
                ) : (
                  <div className="flex items-center text-sm gap-2"><FaSun className="size-3 md:size-4 text-sm " /> Light Mode</div>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
