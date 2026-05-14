import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaLeaf, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "A propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Competences" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggleDark, eco, toggleEco } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card dark:bg-gray-900/70 backdrop-blur-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-bold gradient-text">
          LBT<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor={link.label}
              className="clickable text-charcoal/80 dark:text-gray-200 hover:text-accent font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button onClick={toggleDark} className="text-xl" title="Mode sombre">
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <button onClick={toggleEco} className="text-sm" title="Mode eco">
            <FaLeaf
              className={
                eco ? "text-green-leaf" : "text-gray-400 dark:text-gray-500"
              }
            />
          </button>
          <a
            href="mailto:leboueelie@gmail.com"
            data-cursor="Contact"
            className="clickable px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors shadow-md"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden clickable text-charcoal dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="clickable text-charcoal/80 dark:text-gray-200 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 items-center">
            <button onClick={toggleDark} className="text-xl">
              {dark ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-600" />
              )}
            </button>
            <button onClick={toggleEco} className="text-sm">
              <FaLeaf className={eco ? "text-green-leaf" : "text-gray-400"} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
