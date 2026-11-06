import { FiArrowUpRight } from 'react-icons/fi';
import { workData } from '../services/workData';

const Work = () => {
  return (
    <section id="work" className="px-6 max-w-7xl mx-auto py-16 md:py-24 scroll-mt-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-dark/50 mb-3">My Work</p>
        <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight">
          Selected projects I've worked on
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {workData.map((project) => (
          <div key={project.title} className="group cursor-pointer">
            <div className="w-full h-64 md:h-80 rounded-2xl border-2 border-dashed border-dark/20 flex items-center justify-center mb-5 group-hover:border-lime transition-colors">
              <span className="text-dark/40 font-medium">Image</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-dark/50 mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                <p className="text-sm text-dark/70 mt-2 max-w-md">{project.description}</p>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center group-hover:bg-lime group-hover:border-lime transition-colors">
                <FiArrowUpRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;