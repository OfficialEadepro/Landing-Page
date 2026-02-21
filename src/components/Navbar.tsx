import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full z-50 bg-transparent py-8"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <img
                        src="/images/Eadepro Logo.png"
                        alt="Eadepro Logo"
                        className="h-20 md:h-30 w-auto object-contain brightness-0 invert"
                    />
                    <img
                        src="/images/Klemeru Logo.png"
                        alt="Klemeru Logo"
                        className="h-18 md:h-28 w-auto object-contain brightness-0 invert"
                    />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
