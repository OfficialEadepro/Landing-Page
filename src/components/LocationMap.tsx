import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
    return (
        <section className="px-6 py-16 bg-cream/30 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Find Us</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary leading-tight">
                        Our <span className="text-primary">Location</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-primary mx-auto mt-6 rounded-full"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden shadow-lg border border-secondary/10"
                >
                    <img
                        src="/images/Location Map.png"
                        alt="Klemeru Location Map"
                        className="w-full h-auto block"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-8"
                >
                    <div className="relative inline-block">
                        {/* Pulse ring */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.15, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-full bg-primary blur-md"
                        />
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://maps.app.goo.gl/XBsbdvjByPFxPaef9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-3 bg-primary hover:bg-[#c4a059] text-white font-bold py-5 px-12 rounded-full shadow-2xl uppercase tracking-widest text-base transition-colors"
                        >
                            <MapPin className="w-5 h-5" />
                            View on Google Maps
                        </motion.a>
                    </div>
                    <p className="text-xs text-secondary/40 mt-4 uppercase tracking-widest">Klemeru North & South · Ipoh, Perak</p>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationMap;
