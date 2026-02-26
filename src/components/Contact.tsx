import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <section className="relative w-full aspect-video md:aspect-auto md:h-[100vh] bg-secondary text-center overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="/images/Furniture.webp"
                    alt="Furniture Package"
                    className="w-full h-full object-cover object-center block"
                />

                <div className="absolute inset-0 flex items-center md:items-start justify-end p-2 sm:p-4 md:pt-16 md:px-24">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-[60%] sm:max-w-sm md:max-w-md text-right drop-shadow-md"
                    >
                        <h2 className="font-display font-bold text-sm sm:text-base md:text-3xl text-white mb-1 md:mb-4 leading-tight drop-shadow-lg">
                            Limited Time Offer
                        </h2>
                        <p className="text-white font-medium text-[0.55rem] sm:text-[0.65rem] md:text-sm leading-snug drop-shadow-md tracking-tight">
                            Reward your vision. Book your unit now to unlock a:<br />
                            <span className="text-white font-bold italic text-[0.65rem] sm:text-sm md:text-lg drop-shadow-md text-premium-sage">Complimentary Semi-Furnished Package*</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            <section id="contact" className="px-8 py-16 overflow-hidden">
                <div className="max-w-xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4"
                        >
                            Let's Talk
                        </motion.span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary leading-tight">
                            Connect with <span className="text-primary">Us.</span>
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 bg-primary mx-auto mt-6 rounded-full"
                        ></motion.div>
                        <p className="text-secondary/70 mt-4 leading-relaxed">
                            Ready to secure your future home? Contact our sales team today for a private viewing or more information about Klemeru.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-cream/30 p-8 rounded-2xl border border-secondary/5 shadow-sm"
                    >
                        <form className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-1"
                            >
                                <label className="block text-xs font-bold text-secondary/60 uppercase tracking-widest ml-1" htmlFor="name">Full Name</label>
                                <input
                                    className="block w-full rounded-lg border-secondary/20 bg-cream/50 text-secondary focus:border-primary focus:ring-primary py-4 px-5 text-sm transition-all focus:bg-white"
                                    id="name"
                                    placeholder="Enter your name"
                                    type="text"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-1"
                            >
                                <label className="block text-xs font-bold text-secondary/60 uppercase tracking-widest ml-1" htmlFor="phone">Phone Number</label>
                                <input
                                    className="block w-full rounded-lg border-secondary/20 bg-cream/50 text-secondary focus:border-primary focus:ring-primary py-4 px-5 text-sm transition-all focus:bg-white"
                                    id="phone"
                                    placeholder="+60"
                                    type="tel"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-3"
                            >
                                <label className="block text-xs font-bold text-secondary/60 uppercase tracking-widest ml-1">Interested Property</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="interest-group">
                                    {['Single-Storey Terrace', 'Double-Storey Terrace', 'Single-Storey Cluster', '1.5-Storey Semi-D', 'Bungalow'].map((type) => (
                                        <label key={type} className="flex items-center space-x-3 p-3 rounded-lg border border-secondary/20 bg-cream/50 cursor-pointer hover:bg-white transition-all">
                                            <input
                                                type="radio"
                                                name="interest"
                                                value={type}
                                                className="form-radio text-primary focus:ring-primary h-4 w-4"
                                            />
                                            <span className="text-sm text-secondary">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="space-y-1"
                                >
                                    <label className="block text-xs font-bold text-secondary/60 uppercase tracking-widest ml-1" htmlFor="date">Preferred Date</label>
                                    <input
                                        className="block w-full rounded-lg border-secondary/20 bg-cream/50 text-secondary focus:border-primary focus:ring-primary py-4 px-5 text-sm transition-all focus:bg-white"
                                        id="date"
                                        type="date"
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-1"
                                >
                                    <label className="block text-xs font-bold text-secondary/60 uppercase tracking-widest ml-1" htmlFor="time">Preferred Time</label>
                                    <select
                                        className="block w-full rounded-lg border-secondary/20 bg-cream/50 text-secondary focus:border-primary focus:ring-primary py-4 px-5 text-sm transition-all focus:bg-white"
                                        id="time"
                                    >
                                        <option value="">Select Time</option>
                                        <option value="09:00 AM">09:00 AM</option>
                                        <option value="09:30 AM">09:30 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="10:30 AM">10:30 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="11:30 AM">11:30 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="12:30 PM">12:30 PM</option>
                                        <option value="01:00 PM">01:00 PM</option>
                                        <option value="01:30 PM">01:30 PM</option>
                                        <option value="02:00 PM">02:00 PM</option>
                                        <option value="02:30 PM">02:30 PM</option>
                                        <option value="03:00 PM">03:00 PM</option>
                                        <option value="03:30 PM">03:30 PM</option>
                                        <option value="04:00 PM">04:00 PM</option>
                                        <option value="04:30 PM">04:30 PM</option>
                                        <option value="05:00 PM">05:00 PM</option>
                                    </select>
                                </motion.div>
                            </div>

                            <div className="pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "#B38F48" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary text-white font-bold py-5 rounded-lg shadow-xl uppercase tracking-[0.2em] text-sm transition-all"
                                    type="button"
                                    onClick={() => {
                                        const name = (document.getElementById('name') as HTMLInputElement).value;
                                        // Get selected interest from radio buttons
                                        const interestRadio = document.querySelector('input[name="interest"]:checked') as HTMLInputElement;
                                        const interest = interestRadio ? interestRadio.value : '';

                                        const date = (document.getElementById('date') as HTMLInputElement).value;
                                        const time = (document.getElementById('time') as HTMLSelectElement).value;

                                        if (!interest) {
                                            alert("Please select an interested property.");
                                            return;
                                        }

                                        if (!date || !time) {
                                            alert("Please select both a date and time for your appointment.");
                                            return;
                                        }

                                        const message = `Hi, I would like to book an appointment.\nName: ${name}\nInterest: ${interest}\nDate: ${date}\nTime: ${time}`;
                                        const whatsappUrl = `https://wa.me/60165500271?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappUrl, '_blank');
                                    }}
                                >
                                    Book Appointment Now
                                </motion.button>
                                <p className="text-[0.65rem] text-center text-secondary/40 mt-6 leading-relaxed">
                                    By submitting, you will be redirected to WhatsApp to complete your booking.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
