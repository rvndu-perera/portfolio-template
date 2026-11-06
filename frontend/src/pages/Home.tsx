import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';

const Home = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
      </main>
      <Footer />
    </div>
  );
};

export default Home;