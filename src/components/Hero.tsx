

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="home" className="relative h-[100vh] w-full overflow-hidden">
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="/images/Park Header.webp"
                alt="Klemeru Park Header"
                className="w-full h-full object-cover object-[center_top] md:object-center block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent"></div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end pb-10 md:pb-16 text-center items-center">
                <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1]"
                    >
                        Ipoh New Project — <br />
                        <span className="text-primary italic drop-shadow-lg">KLEMERU</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/90 mb-8 font-light text-sm md:text-lg max-w-sm mx-auto"
                    >
                        Sustainability Begins from Home
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-full max-w-sm"
                    >
                        <a
                            href="https://wa.me/60165500271?text=I%20am%20Interest%20in%20Klemeru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-premium-sage hover:bg-[#7da878] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-[1.05] active:scale-95 w-full uppercase tracking-wider text-sm flex items-center justify-center"
                        >
                            Secure Your Future
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

