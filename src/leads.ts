// Lead capture: where enquiries are sent, and what happens right after someone submits.
// Phone / WhatsApp numbers live in siteConfig.ts — this file only decides what we do with them.

import { WHATSAPP_NUMBER } from './siteConfig';

// Google Apps Script web app that writes each lead to the Google Sheet and emails the sales team.
const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyJFQWHxq4_mBzG2gb89-wDJHfRR7nqM22yCh6XsJyX34MFXCBIC0NFTJ89JRuF6DKz4g/exec';

// The thank-you page reads the visitor's WhatsApp link from here, so their name and phone
// number never end up in the page URL (which analytics would record).
const PENDING_WHATSAPP_KEY = 'klemeru:pendingWhatsApp';

// Shown on the floating WhatsApp button and to anyone who opens the thank-you page directly.
export const DEFAULT_WHATSAPP_MESSAGE = "Hi, I saw your landing page on Google and I'm interested in Klemeru";

export const PROPERTY_TYPES = [
    'Single-Storey Terrace',
    'Double-Storey Terrace',
    'Single-Storey Cluster',
    '1.5-Storey Semi-D',
    'Bungalow',
];

// Brackets follow the "Est. Installment From" prices shown in the Gallery section.
// The cheapest unit starts at RM 1,588 / month, so there is no bracket below RM 1,600.
export const BUDGET_OPTIONS = [
    'RM 1,600 - RM 2,100 / month',
    'RM 2,100 - RM 2,600 / month',
    'RM 2,600 - RM 3,500 / month',
    'Above RM 3,500 / month',
];

// Appointment slots — shared by the hero lead form and the Book Appointment form.
export const TIME_OPTIONS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM',
];

// Earliest date the visitor can pick, in the yyyy-mm-dd format a date input expects.
export const todayIso = () => new Date().toISOString().split('T')[0];

export type Lead = {
    fullName: string;
    phoneNumber: string;
    property: string;
    monthlyBudget: string;
    preferredDate?: string;
    preferredTime?: string;
};

export const whatsAppUrl = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const sendLead = async (lead: Lead) => {
    const formData = new FormData();
    for (const [field, value] of Object.entries(lead)) {
        if (value) formData.append(field, value);
    }

    try {
        await fetch(LEAD_ENDPOINT, { method: 'POST', body: formData });
    } catch (error) {
        // Never block the visitor on a failed write — they still get through to WhatsApp.
        console.error('Lead submission failed:', error);
    }
};

// Send the visitor to the thank-you page. That page — not the click — is where the
// conversion tag fires, so accidental taps that bounce straight back are not counted.
export const goToThankYou = (source: string, whatsappMessage: string) => {
    try {
        sessionStorage.setItem(PENDING_WHATSAPP_KEY, whatsAppUrl(whatsappMessage));
    } catch {
        // Private browsing can block sessionStorage; the thank-you page falls back to a generic message.
    }

    window.location.href = `/thank-you.html?src=${encodeURIComponent(source)}`;
};

// Used by the thank-you page only.
export const takePendingWhatsAppUrl = () => {
    try {
        const pending = sessionStorage.getItem(PENDING_WHATSAPP_KEY);
        sessionStorage.removeItem(PENDING_WHATSAPP_KEY);
        if (pending) return pending;
    } catch {
        // Fall through to the generic message.
    }

    return whatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);
};
