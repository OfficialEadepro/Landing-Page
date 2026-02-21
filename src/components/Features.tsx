import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const features = [
    {
        id: 1,
        tag: 'Feature #1 — Energy',
        headline: 'Solar-Powered & EV-Ready',
        body: 'Pre-installed Solar PV Panels act as a roof shield, naturally lowering the temperature of your home while slashing your electricity bills. Paired with EV Isolators, your home becomes a high-value asset built for the future.',
        stat: 'Cut your electricity bills',
        image: '/images/Solar Panels.JPG', // USER: Add your image path here (e.g., '/images/solar.jpg')
        bgColor: 'bg-orange-50',
        accentColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        statBg: 'bg-orange-100',
        emoji: '⚡',
        flip: false,
    },
    {
        id: 2,
        tag: 'Feature #2 — Lifestyle',
        headline: '4.5-Acres Versatile Park',
        body: 'Outside, we replaced hot, dangerous asphalt with a massive 4.5-Acres Versatile Park. Your children finally have a safe, shaded, and vibrant environment to run, breathe, and play — right outside your front door.',
        stat: '4.5 acres versatile park',
        image: '/images/Park.JPG', // USER: Add your image path here
        bgColor: 'bg-green-50',
        accentColor: 'text-green-700',
        borderColor: 'border-green-200',
        statBg: 'bg-green-100',
        emoji: '🌳',
        flip: true,
    },
    {
        id: 3,
        tag: 'Feature #3 — Security',
        headline: 'Exclusive Guarded Community',
        body: 'Privacy and safety without the cage. Professional security for total peace of mind, ensuring your family\'s protection in a serene, well-managed environment. You choose who enters your world.',
        stat: 'professional security',
        image: '/images/Guarded.jpg', // USER: Add your image path here
        bgColor: 'bg-blue-50',
        accentColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        statBg: 'bg-blue-100',
        emoji: '🛡️',
        flip: false,
    },
];

const Features = () => {
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="amenities" className="px-6 py-24 bg-cream/50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 flex flex-col items-center">

                    {/* Eyebrow */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="inline-flex items-center gap-3 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5"
                    >
                        <span className="w-8 h-px bg-primary" />
                        The Benchmark for Upcoming Green Township
                        <span className="w-8 h-px bg-primary" />
                    </motion.span>

                    {/* Main heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-5xl font-display font-bold text-secondary leading-tight max-w-xl"
                    >
                        Why <span className="text-primary">Klemeru?</span>
                    </motion.h2>

                    {/* Animated underline */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-[3px] bg-primary mx-auto mt-5 rounded-full"
                    />
                </div>

                {/* Stacked Features */}
                <div className="flex flex-col gap-12 md:gap-20">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            className={`flex flex-col ${feature.flip ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
                        >
                            {/* Visual Panel */}
                            <div className="w-full md:w-5/12 flex-shrink-0">
                                <div className={`relative rounded-3xl ${feature.bgColor} border ${feature.borderColor} overflow-hidden flex flex-col items-center justify-center aspect-[4/3] text-center shadow-sm`}>
                                    {feature.image ? (
                                        <>
                                            <img src={feature.image} alt={feature.headline} className="w-full h-full object-cover" />
                                            {/* Overlay Badge */}
                                            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                                                <motion.div
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                                    className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-lg"
                                                >
                                                    <span className="text-2xl">{feature.emoji}</span>
                                                    <div className={`text-[10px] md:text-xs font-bold leading-tight uppercase tracking-wider ${feature.accentColor}`}>
                                                        {feature.stat}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="p-10 flex flex-col items-center">
                                            <motion.div
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                                className="text-7xl md:text-8xl mb-4"
                                            >
                                                {feature.emoji}
                                            </motion.div>
                                            <div className={`inline-block ${feature.statBg} rounded-2xl px-4 py-3 text-xs font-bold ${feature.accentColor} leading-relaxed max-w-[220px]`}>
                                                {feature.stat}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Text Panel */}
                            <div className="w-full md:w-7/12 flex flex-col justify-center">
                                <span className={`text-xs font-bold uppercase tracking-widest ${feature.accentColor} mb-3 block`}>
                                    {feature.tag}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-5 leading-tight">
                                    {feature.headline}
                                </h3>
                                <p className="text-secondary/65 leading-relaxed text-base">
                                    {feature.body}
                                </p>
                                <div className={`mt-6 h-1 w-12 rounded-full ${feature.statBg}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
