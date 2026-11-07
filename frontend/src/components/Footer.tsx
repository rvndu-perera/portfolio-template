import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { navItems } from '../services/navData';

const Footer = () => {
  return (
    <section className="relative px-6 max-w-7xl mx-auto pb-10 pt-16">
      <footer className="relative bg-dark rounded-3xl overflow-hidden px-8 md:px-14 pt-20 pb-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-size-[18px_18px]" />

        <div className="relative grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold text-cream mb-4">
              Port<span className="text-lime">folio</span>
            </div>
            <p className="text-cream/60 max-w-xs mb-6">
              Frontend Developer &amp; UI/UX Designer crafting clean, user-focused digital experiences.
            </p>
            <div className="flex items-center gap-4 text-cream text-lg">
              <a href="#" className="hover:text-lime transition-colors" aria-label="GitHub"><FiGithub /></a>
              <span className="text-cream/20">|</span>
              <a href="#" className="hover:text-lime transition-colors" aria-label="LinkedIn"><FiLinkedin /></a>
              <span className="text-cream/20">|</span>
              <a href="#" className="hover:text-lime transition-colors" aria-label="Instagram"><FiInstagram /></a>
              <span className="text-cream/20">|</span>
              <a href="#" className="hover:text-lime transition-colors" aria-label="Email"><FiMail /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cream mb-5">Quick Links</h3>
            <ul className="space-y-3 text-cream/70">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-lime transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cream mb-5">Get in Touch</h3>
            <ul className="space-y-3 text-cream/70">
              <li>your.email@example.com</li>
              <li>+94 7X XXX XXXX</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-cream/10 pt-6 text-center">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Your Name — All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;