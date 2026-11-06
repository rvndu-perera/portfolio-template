import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Completed' },
  { value: 6, suffix: '', label: 'Months Internship' },
];

const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  return (
    <p ref={ref} className="text-2xl md:text-3xl font-bold text-lime" aria-label={`${value}${suffix}`}>
      {isInView && shouldReduceMotion ? value : count}{suffix}
    </p>
  );
};

const About = () => {
  return (
    <section id="about" className="px-6 max-w-7xl mx-auto py-16 md:py-24 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-72 md:h-105 rounded-2xl border-2 border-dashed border-dark/20 flex items-center justify-center order-2 md:order-1">
          <span className="text-dark/40 font-medium">Image</span>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-dark/50 mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Turning ideas into clean, functional digital experiences
          </h2>
          <p className="text-dark/70 mb-10 max-w-lg">
            I'm a final-year IT student and frontend developer with a
            background in UI/UX design. I enjoy crafting interfaces that
            are both visually engaging and easy to use, and turning those
            designs into responsive, production-ready code.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark text-cream rounded-xl p-4 text-center">
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-cream/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;