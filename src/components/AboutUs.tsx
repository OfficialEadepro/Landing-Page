import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section id="about" className="px-6 py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Visual Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <img
                                src="https://eadepro.com/wp-content/uploads/2023/10/Eadepro-Building-Beyond-Expectations.jpg"
                                alt="Eadepro Building Beyond Expectations"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';
                                }}
                            />
                            <div className="absolute inset-0 bg-secondary/10"></div>
                        </div>
                    </motion.div>

                    {/* Text Panel */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-3 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5"
                        >
                            <span className="w-8 h-px bg-primary" />
                            Confident in Building Beyond Expectations
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-3xl md:text-5xl font-display font-bold text-secondary mb-6 leading-tight"
                        >
                            About <span className="text-primary">Eadepro</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-secondary/70 leading-relaxed text-lg mb-8"
                        >
                            Eadepro is a premier property developer in Ipoh, dedicated to building beyond expectations.
                            Our focus on quality, innovation, and modern living ensures that every home we create
                            is a high-value asset built for the future. From eco-friendly designs to guarded communities,
                            we redefine the benchmark for modern townships.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            <a
                                href="https://eadepro.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 uppercase tracking-wider text-sm group"
                            >
                                Visit Our Main Website
                                <svg
                                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
