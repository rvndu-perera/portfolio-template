import { FiArrowUpRight } from 'react-icons/fi';
import heroImg from '../assets/images/hero-img.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="bg-lime rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-dark/70 mb-4">
            Hi, I'm [Your Name]
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight mb-6">
            Frontend Developer
            <br />
            &amp; UI/UX Designer
          </h1>
          <p className="text-dark/80 max-w-md mb-8">
            I design and build clean, user-focused digital products —
            from interfaces to fully functional websites.
          </p>
          <a href="#work" className="inline-flex items-center gap-2 bg-dark text-cream font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors">
            View My Work <FiArrowUpRight />
          </a>
        </div>

        <div className="w-full h-64 sm:h-80 md:h-105 rounded-2xl overflow-hidden shadow-sm">
          <img
            src={heroImg}
            alt="Frontend developer working on laptop illustration"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
