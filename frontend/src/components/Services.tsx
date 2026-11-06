import { servicesData } from '../services/serviceData';

const Services = () => {
  return (
    <section id="service" className="px-6 max-w-7xl mx-auto py-16 md:py-24 scroll-mt-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-dark/50 mb-3">What I Do</p>
        <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight">
          Services I offer to bring your ideas to life
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="bg-cream border border-dark/10 rounded-2xl p-6 hover:bg-lime transition-colors">
              <div className="w-12 h-12 rounded-full bg-dark text-lime flex items-center justify-center text-xl mb-5">
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
              <p className="text-sm text-dark/70">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;