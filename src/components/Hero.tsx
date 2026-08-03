import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

const Hero = () => {
    return (
        <div id="home" className="relative w-full min-h-[100vh] overflow-hidden">
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="/images/Park Header.webp"
                alt="Klemeru Park Header"
                className="absolute inset-0 w-full h-full object-cover object-[center_top] md:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-secondary/20"></div>

            <div className="relative min-h-[100vh] flex flex-col justify-end items-center px-4 sm:px-6 pt-36 pb-10 md:pt-40 md:pb-16">
                <div className="w-full max-w-2xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-display font-bold text-white mb-2 leading-[1.1]"
                    >
                        Ipoh New Project — <span className="drop-shadow-lg">Klemeru</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary mb-6 font-display font-bold text-xl md:text-3xl drop-shadow-lg"
                    >
                        Upcoming New Township
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-md mx-auto"
                    >
                        <LeadForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
