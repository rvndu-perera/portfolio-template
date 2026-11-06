import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import ScrollReveal from '../components/ScrollReveal';
import PageSkeleton from '../components/PageSkeleton';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      <AnimatePresence>{isLoading && <PageSkeleton />}</AnimatePresence>
      <Navbar />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Work /></ScrollReveal>
      </main>
      <ScrollReveal><Footer /></ScrollReveal>
    </div>
  );
};

export default Home;