import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';

const FloatingOffer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isDismissed && window.scrollY > 400) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleClaim = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4"
                >
                    <div className="max-w-3xl mx-auto bg-secondary text-white rounded-2xl shadow-2xl flex items-center gap-4 p-4 md:p-5">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-premium-sage/20 flex items-center justify-center">
                            <Gift className="w-5 h-5 md:w-6 md:h-6 text-premium-sage" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Limited Offer</p>
                            <p className="text-sm md:text-base font-bold text-white leading-tight truncate">
                                Claim Your <span className="text-premium-sage">FREE Semi-Furnished Package</span> Today
                            </p>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClaim}
                            className="flex-shrink-0 bg-premium-sage hover:bg-[#7da878] text-white font-bold py-2.5 px-5 rounded-xl text-sm uppercase tracking-wider transition-colors whitespace-nowrap"
                        >
                            Claim Now
                        </motion.button>

                        {/* Dismiss Button */}
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="flex-shrink-0 text-white/40 hover:text-white/80 transition-colors"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingOffer;
