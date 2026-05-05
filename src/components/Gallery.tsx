import { BedDouble, Bath } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="gallery" className="px-6 py-12 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4"
                    >
                        Your Future Home Awaits
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary leading-tight">
                        Join the Upcoming <br className="hidden md:block" />
                        <span className="text-primary italic">New Township.</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-primary mx-auto mt-6 rounded-full"
                    ></motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Single Storey */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-secondary/5 group hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden">
                            <img alt="Single Storey" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="/images/Single Storey House.png" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-display font-bold text-secondary mb-1">Single-Storey Terrace</h3>
                            <p className="text-primary italic font-medium mb-4">"The Smart Starter."</p>
                            <div className="flex gap-6 text-xs text-secondary/60 font-bold uppercase tracking-widest border-t border-secondary/10 pt-4">
                                <span className="flex items-center"><BedDouble className="text-primary w-4 h-4 mr-2" /> 4 Beds</span>
                                <span className="flex items-center"><Bath className="text-primary w-4 h-4 mr-2" /> 2 Baths</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-secondary/10">
                                <p className="text-[0.6rem] text-secondary/50 uppercase tracking-widest font-bold mb-0.5">Est. Installment From</p>
                                <p className="text-primary font-display font-bold text-xl">RM 1,700 <span className="text-xs text-secondary/50 font-normal font-body">/month</span></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Double Storey */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-secondary/5 group hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden">
                            <img alt="Double Storey" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="/images/Double Storey.webp" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-display font-bold text-secondary mb-1">Double-Storey Terrace</h3>
                            <p className="text-primary italic font-medium mb-4">"For Growing Families."</p>
                            <div className="flex gap-6 text-xs text-secondary/60 font-bold uppercase tracking-widest border-t border-secondary/10 pt-4">
                                <span className="flex items-center"><BedDouble className="text-primary w-4 h-4 mr-2" /> 4 Beds</span>
                                <span className="flex items-center"><Bath className="text-primary w-4 h-4 mr-2" /> 3 Baths</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-secondary/10">
                                <p className="text-[0.6rem] text-secondary/50 uppercase tracking-widest font-bold mb-0.5">Est. Installment From</p>
                                <p className="text-primary font-display font-bold text-xl">RM 2,200 <span className="text-xs text-secondary/50 font-normal font-body">/month</span></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Luxury Units */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-secondary/5 group hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden">
                            <img alt="Luxury Units" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="/images/Bungalow.webp" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-display font-bold text-secondary mb-1">Cluster, Semi-D, Bungalow</h3>
                            <p className="text-primary italic font-medium mb-4">"The Luxury Legacy."</p>
                            <div className="text-xs text-secondary/60 font-bold uppercase tracking-widest border-t border-secondary/10 pt-4">
                                Premium layouts available
                            </div>
                            <div className="mt-3 pt-3 border-t border-secondary/10">
                                <p className="text-[0.6rem] text-secondary/50 uppercase tracking-widest font-bold mb-0.5">Est. Installment From</p>
                                <p className="text-primary font-display font-bold text-xl">RM 3,000 <span className="text-xs text-secondary/50 font-normal font-body">/month</span></p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Brochure CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#contact"
                        className="inline-block bg-primary hover:bg-[#c4a059] text-white font-bold py-4 px-10 rounded-full shadow-lg uppercase tracking-widest text-sm transition-colors"
                    >
                        Get Klemeru Ipoh Brochure
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
