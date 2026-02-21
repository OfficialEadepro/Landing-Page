import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const points = [
    {
        label: 'The Future Ecosystem',
        desc: 'High-performance design that minimizes environmental impact and protects your wealth.',
    },
    {
        label: 'The Mini-City',
        desc: 'A self-sustaining sanctuary that harmonizes with nature to maximize your quality of life.',
    },
    {
        label: 'The 5-Minute Life',
        desc: 'A seamless "live-work-play" concept where your home, shops, and massive parks are always connected.',
    },
];

const GreenTownship = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center py-16 md:py-0 bg-secondary">
            {/* Background Image - Clean and sharp, no scale animation to avoid blurriness */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/Greentownship.jpg"
                    alt="Green township park and community"
                    className="w-full h-full object-cover object-center"
                />
                {/* Dark gradient for better text readability without making everything dull */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/30" />
            </div>

            {/* Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                {/* Left Column: Heading and Quote (Takes up 5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6">
                            <span className="w-8 h-px bg-primary" />
                            The Current Housing Trend
                        </span>

                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                            What is <br /><span className="text-primary italic">Green Township?</span>
                        </h2>

                        <p className="text-cream/90 text-lg md:text-xl leading-relaxed font-body">
                            A true Green Township isn't just about "planting trees." It is a <span className="text-white font-semibold">master-planned standard of living.</span>
                        </p>
                    </motion.div>

                    {/* GreenRE Badge & Quote - Compact integration */}
                    <motion.div variants={itemVariants} className="pt-8 border-t border-white/20 flex items-start gap-5">
                        <div className="relative shrink-0">
                            <img
                                src="/images/GreenRE.jpg"
                                alt="GreenRE Certified"
                                className="h-16 w-16 rounded-full object-cover border-2 border-primary/50 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                            />
                        </div>
                        <div>
                            <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-2">
                                The Klemeru Standard
                            </p>
                            <blockquote className="text-white text-base md:text-lg font-display font-medium leading-relaxed italic">
                                "Some just plant grass; <span className="text-primary">we engineered the future.</span>"
                            </blockquote>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: 3 Points Cards (Takes up 7 cols) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {points.map((p, i) => (
                        <motion.div
                            key={p.label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className={`relative group p-8 rounded-3xl border border-white/20 bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 ${i === 2 ? 'sm:col-span-2' : ''}`}
                        >
                            {/* Decorative number */}
                            <span className="absolute top-6 right-6 text-6xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors duration-300">
                                0{i + 1}
                            </span>

                            <div className="relative z-10 pr-10">
                                <h3 className="text-white font-display font-bold text-xl mb-3">
                                    {p.label}
                                </h3>
                                <p className="text-cream/80 text-base leading-relaxed font-body">
                                    {p.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default GreenTownship;
