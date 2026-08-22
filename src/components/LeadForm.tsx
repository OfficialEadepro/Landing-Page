import { useState } from 'react';
import { BUDGET_OPTIONS, PROPERTY_TYPES, TIME_OPTIONS, goToThankYou, sendLead, todayIso } from '../leads';

const fieldClass =
    'block w-full rounded-lg border border-secondary/20 bg-cream/60 text-secondary py-3 px-4 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary';

const LeadForm = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [property, setProperty] = useState('');
    const [monthlyBudget, setMonthlyBudget] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!fullName.trim()) {
            setError('Please enter your full name.');
            return;
        }
        if (!phoneNumber.trim()) {
            setError('Please enter your phone number.');
            return;
        }
        if (!property) {
            setError('Please select the property you are interested in.');
            return;
        }
        if (!monthlyBudget) {
            setError('Please select your monthly budget.');
            return;
        }
        if (!preferredDate) {
            setError('Please choose your preferred appointment date.');
            return;
        }
        if (!preferredTime) {
            setError('Please choose your preferred appointment time.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        const lead = {
            fullName: fullName.trim(),
            phoneNumber: phoneNumber.trim(),
            property,
            monthlyBudget,
            preferredDate,
            preferredTime,
        };

        await sendLead(lead);

        goToThankYou('hero_lead_form', [
            "Hi, I saw your landing page on Google and I'd like the Klemeru brochure and to book an appointment.",
            `Name: ${lead.fullName}`,
            `Phone: ${lead.phoneNumber}`,
            `Interest: ${lead.property}`,
            `Budget: ${lead.monthlyBudget}`,
            `Preferred Date: ${lead.preferredDate}`,
            `Preferred Time: ${lead.preferredTime}`,
        ].join('\n'));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/40 text-left space-y-3"
        >
            <div className="text-center mb-1">
                <p className="font-display font-bold text-secondary text-lg leading-tight">
                    Get Your Free Brochure &amp; Make Appointment
                </p>
                <p className="text-secondary/60 text-xs mt-1">
                    Leave your details — our sales team will reach out shortly.
                </p>
            </div>

            <input
                className={fieldClass}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Full Name"
                type="text"
                autoComplete="name"
                aria-label="Full Name"
            />

            <input
                className={fieldClass}
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Phone Number"
                type="tel"
                autoComplete="tel"
                aria-label="Phone Number"
            />

            <select
                className={fieldClass}
                value={property}
                onChange={(event) => setProperty(event.target.value)}
                aria-label="Interested Property"
            >
                <option value="">Interested Property</option>
                {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>

            <select
                className={fieldClass}
                value={monthlyBudget}
                onChange={(event) => setMonthlyBudget(event.target.value)}
                aria-label="Monthly Installment Budget"
            >
                <option value="">Monthly Installment Budget</option>
                {BUDGET_OPTIONS.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                ))}
            </select>

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <label className="block text-[0.65rem] font-bold text-secondary/50 uppercase tracking-widest ml-1" htmlFor="hero-date">
                        Preferred Date
                    </label>
                    <input
                        className={fieldClass}
                        id="hero-date"
                        value={preferredDate}
                        onChange={(event) => setPreferredDate(event.target.value)}
                        type="date"
                        min={todayIso()}
                        aria-label="Preferred Date"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-[0.65rem] font-bold text-secondary/50 uppercase tracking-widest ml-1" htmlFor="hero-time">
                        Preferred Time
                    </label>
                    <select
                        className={fieldClass}
                        id="hero-time"
                        value={preferredTime}
                        onChange={(event) => setPreferredTime(event.target.value)}
                        aria-label="Preferred Time"
                    >
                        <option value="">Select Time</option>
                        {TIME_OPTIONS.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>

            {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-premium-sage hover:bg-[#7da878] text-white font-bold py-4 rounded-lg shadow-lg uppercase tracking-[0.15em] text-sm transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Submitting...' : 'Get Brochure & Book Now'}
            </button>

            <p className="text-[0.65rem] text-center text-secondary/40 leading-relaxed">
                By submitting, you will be redirected to WhatsApp to continue.
            </p>
        </form>
    );
};

export default LeadForm;
