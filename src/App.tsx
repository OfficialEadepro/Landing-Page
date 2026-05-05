import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
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
      <Gallery />
      <PainPoints />
      <Features />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
