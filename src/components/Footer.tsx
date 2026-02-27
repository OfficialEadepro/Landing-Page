import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-cream text-secondary pt-16 pb-10 px-8 border-t border-secondary/10 font-body overflow-hidden"
            >
                {/* Centered Container with 2 Columns for Sales Page focus */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-start md:pl-10"
                    >
                        <div className="mb-6">
                            <img
                                src="/images/Eadepro Logo.png"
                                alt="Eadepro Logo"
                                className="h-24 w-auto object-contain mb-4"
                            />
                            <p className="text-[0.6rem] font-bold tracking-[0.05em] text-secondary/70 uppercase">A member of Eastern Decorator Group</p>
                        </div>

                        <h3 className="text-primary font-display font-bold text-xl mb-4">About Eadepro</h3>
                        <p className="text-secondary/80 text-sm leading-relaxed mb-6">
                            Eadepro crafts spaces that connect people, inspire lifestyles, and embrace sustainability.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mb-8"
                        >
                            <a
                                href="https://eadepro.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-premium-sage hover:bg-[#7da878] text-white font-bold py-2.5 px-6 rounded-full shadow-md transition-colors text-sm uppercase tracking-wider"
                            >
                                Visit Website
                            </a>
                        </motion.div>

                        <div className="flex items-center space-x-4 mb-4">
                            <span className="font-display font-bold text-primary text-lg">Follow Us:</span>
                            <div className="flex space-x-3">
                                <motion.a whileHover={{ y: -3 }} href="#" className="text-secondary hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></motion.a>
                                <motion.a whileHover={{ y: -3 }} href="#" className="text-secondary hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></motion.a>
                                <motion.a whileHover={{ y: -3 }} href="#" className="text-secondary hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Info - Restored as requested */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:pl-10"
                    >
                        <h3 className="text-primary font-display font-bold text-xl mb-6">Contact Us</h3>

                        <div className="mb-6">
                            <h4 className="font-display font-bold text-primary text-lg mb-2">Address:</h4>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Lot 55992, Batu 5, Off Jalan Tunku Abdul Rahman, Ipoh, 31200, Chemor, Perak, Malaysia.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-display font-bold text-primary text-lg mb-2">Phone:</h4>
                            <p className="text-secondary/80 text-sm">
                                +6016-5500 271 <br />
                                +6016-5500 500 <br />
                                +6012-3704 330 <br />
                                +6016-5500 992 <br />
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto border-t border-secondary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60 text-center md:text-left">
                    <p>
                        Copyright © 2026 Eadepro Sdn. Bhd. (1075154-U) All Rights Reserved.
                    </p>
                </div>
            </motion.footer>

            {/* WhatsApp Float Button - Round Icon at Bottom Right */}
            <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                className="fixed bottom-6 right-6 z-[60]"
            >
                <motion.a
                    animate={{
                        boxShadow: [
                            "0 0 0 0px rgba(144, 188, 140, 0.4)",
                            "0 0 0 20px rgba(144, 188, 140, 0)",
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                    href="https://wa.me/60165500271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-premium-sage hover:bg-[#7da878] text-white p-4 rounded-full shadow-2xl transition-transform active:scale-95 hover:scale-110"
                >
                    <MessageCircle className="w-8 h-8" />
                </motion.a>
            </motion.div>
        </>
    );
};

export default Footer;
