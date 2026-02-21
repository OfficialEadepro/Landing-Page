import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import GreenTownship from './components/GreenTownship';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cream font-body text-secondary"
    >
      <Navbar />
      <Hero />
      <PainPoints />
      <GreenTownship />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;

