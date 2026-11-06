import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type ScrollRevealProps = {
  children: ReactNode;
};

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
