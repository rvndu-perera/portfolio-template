import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../services/navData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-dark/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-dark">
          Port<span className="text-lime">folio</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-dark">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-lime transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#work"
          className="hidden md:inline-block bg-dark text-cream text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-lime hover:text-dark transition-colors"
        >
          Let's Talk
        </a>

        <button className="md:hidden text-2xl text-dark" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-dark font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setIsOpen(false)} className="block py-1 hover:text-lime transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#work" onClick={() => setIsOpen(false)} className="inline-block bg-dark text-cream text-sm font-semibold px-5 py-2.5 rounded-full">
              Let's Talk
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;