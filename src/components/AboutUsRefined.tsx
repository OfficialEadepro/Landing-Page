import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const AboutUsRefined = () => {
    return (
        <section id="about-refined" className="relative py-24 bg-secondary overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-premium-sage rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
                    {/* Inner Accent Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <img
                                src="/images/Eadepro Logo.png"
                                alt="Eadepro Logo"
                                className="h-20 w-auto object-contain brightness-0 invert opacity-90"
                            />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            The Visionary Behind <span className="text-primary italic">Klemeru</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 font-body"
                        >
                            Eadepro is a premier developer dedicated to creating high-value assets that redefine modern living in Ipoh. Our focus on quality, innovation, and sustainability ensures every project is built beyond expectations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="w-full md:w-auto"
                        >
                            <a
                                href="https://eadepro.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center bg-primary hover:bg-[#c4a159] text-white font-bold py-5 px-12 rounded-2xl shadow-[0_10px_40px_-10px_rgba(179,143,72,0.5)] transition-all hover:scale-[1.03] active:scale-95 uppercase tracking-[0.2em] text-sm overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore Our Main Portfolio
                                    <ExternalLink className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            </a>
                            <p className="mt-6 text-white/40 text-xs font-bold tracking-widest uppercase">
                                Visit Eadepro.com
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsRefined;
