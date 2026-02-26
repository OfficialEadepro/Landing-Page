import { ThermometerSun, MonitorOff, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const PainPoints = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="px-6 py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Reality Check</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4 leading-tight">
                        Pain of the Current House
                    </h2>
                    <div className="h-1 w-20 bg-premium-sage mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center"
                >
                    {/* Pain Point 1: Heat */}
                    <motion.div
                        variants={cardVariants}
                        className="group flex flex-col h-full bg-cream/30 p-8 rounded-3xl border border-secondary/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 items-center"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                            <ThermometerSun className="w-7 h-7 text-orange-600" />
                        </div>
                        <div className="min-h-[80px] flex items-center justify-center mb-4">
                            <h3 className="text-lg font-display font-bold text-secondary leading-tight">
                                You Are Working Hard Just to Pay for a Home That Drains Your Salary.
                            </h3>
                        </div>
                        <p className="text-secondary/70 leading-relaxed italic text-sm">
                            Standard houses trap heat, forcing you to run the A/C 24/7 just to keep your family comfortable. You aren't just paying for power—you are bleeding money into a concrete oven.
                        </p>
                    </motion.div>

                    {/* Pain Point 2: Screens/Caged */}
                    <motion.div
                        variants={cardVariants}
                        className="group flex flex-col h-full bg-cream/30 p-8 rounded-3xl border border-secondary/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 items-center"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                            <MonitorOff className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="min-h-[80px] flex items-center justify-center mb-4">
                            <h3 className="text-lg font-display font-bold text-secondary leading-tight">
                                Is Your House a Home, or Just a Box with WiFi?
                            </h3>
                        </div>
                        <p className="text-secondary/70 leading-relaxed italic text-sm">
                            Don't force your child to grow up in an unhealthy, caged lifestyle. Kids today are addicted to their screens because they have no safe place to run.
                        </p>
                    </motion.div>

                    {/* Pain Point 3: Financial Liability */}
                    <motion.div
                        variants={cardVariants}
                        className="group flex flex-col h-full bg-cream/30 p-8 rounded-3xl border border-secondary/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 items-center"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                            <TrendingDown className="w-7 h-7 text-red-600" />
                        </div>
                        <div className="min-h-[80px] flex items-center justify-center mb-4">
                            <h3 className="text-lg font-display font-bold text-secondary leading-tight">
                                Don't Buy a 1990s House in 2026
                            </h3>
                        </div>
                        <p className="text-secondary/70 leading-relaxed italic text-sm">
                            The golden rule of real estate: always buy with your exit in mind. In the future, buyers won't even look at a house without Solar PV Panels and Electric Vehicle isolator. Don't lock your life savings into a 1990s blueprint.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PainPoints;
