import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'motion/react';
import { navItems } from '../services/navData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hoverAnimation = {
    whileHover: {
      scale: 1.1,
      transition: { duration: 0.1 },
    },
    transition: { duration: 0.5 },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-dark/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.a href="#home" className="text-xl font-bold text-dark" {...hoverAnimation}>
          Port<span className="text-lime">folio</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-dark">
          {navItems.map((item) => (
            <li key={item.label}>
              <motion.a href={item.href} className="hover:text-lime transition-colors" {...hoverAnimation}>
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#work"
          className="hidden md:inline-block bg-dark text-cream text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-lime hover:text-dark transition-colors"
          {...hoverAnimation}
        >
          Let's Talk
        </motion.a>

        <motion.button
          className="md:hidden text-2xl text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          {...hoverAnimation}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-dark font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <motion.a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-lime transition-colors"
                {...hoverAnimation}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
          <li>
            <motion.a
              href="#work"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-dark text-cream text-sm font-semibold px-5 py-2.5 rounded-full"
              {...hoverAnimation}
            >
              Let's Talk
            </motion.a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;