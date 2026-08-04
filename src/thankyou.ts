// Drives /thank-you.html: fires the conversion event, then forwards the visitor to WhatsApp.
//
// In Google Tag Manager, trigger the conversion tag on the custom event "conversion_confirmed".
//
// The page behaves differently depending on how the visitor got here, because the two routes
// carry very different proof of intent:
//
//   Submitted a form  — they typed a name, a phone number and picked two dropdowns. That cannot
//                       happen by accident, and the lead is already in the Google Sheet, so the
//                       conversion is counted straight away and we forward them to WhatsApp.
//
//   Tapped WhatsApp   — a single tap, which is exactly what gets mis-tapped. Nothing is counted
//                       until they deliberately tap "Continue to WhatsApp" on this page. Someone
//                       who landed here by mistake simply leaves, and is never counted.

import './index.css';
import { takePendingWhatsAppUrl } from './leads';

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        fbq?: (...args: unknown[]) => void;
    }
}

// Sources that already proved intent by filling in the form — see goToThankYou() in leads.ts.
const FORM_SOURCES = ['hero_lead_form', 'appointment_form'];

const AUTO_FORWARD_MS = 2000;
// Small grace period so the analytics request leaves the browser before we navigate away.
const HANDOFF_MS = 250;

const whatsappUrl = takePendingWhatsAppUrl();
const source = new URLSearchParams(window.location.search).get('src') ?? 'direct';
const cameFromForm = FORM_SOURCES.includes(source);

const continueLink = document.getElementById('continue') as HTMLAnchorElement;
const status = document.getElementById('status') as HTMLElement;

continueLink.href = whatsappUrl;

let confirmed = false;

const confirmConversion = (confirmedBy: 'form_submit' | 'click') => {
    if (confirmed) return;
    confirmed = true;

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
        event: 'conversion_confirmed',
        lead_source: source,
        confirmed_by: confirmedBy,
    });

    window.fbq?.('track', 'Lead');
};

const openWhatsApp = () => {
    status.textContent = 'Opening WhatsApp…';
    window.setTimeout(() => {
        window.location.href = whatsappUrl;
    }, HANDOFF_MS);
};

continueLink.addEventListener('click', (event) => {
    event.preventDefault();
    confirmConversion(cameFromForm ? 'form_submit' : 'click');
    openWhatsApp();
});

if (cameFromForm) {
    // A real lead either way — count it now, in case they close the tab before WhatsApp opens.
    confirmConversion('form_submit');

    const autoRedirect = document.getElementById('auto-redirect') as HTMLElement;
    const progress = document.getElementById('progress') as HTMLElement;

    autoRedirect.classList.remove('hidden');
    progress.style.transition = `width ${AUTO_FORWARD_MS}ms linear`;
    requestAnimationFrame(() => {
        progress.style.width = '100%';
    });

    window.setTimeout(openWhatsApp, AUTO_FORWARD_MS);
} else {
    // Nothing is counted until this visitor taps the button themselves.
    (document.getElementById('badge-lead') as HTMLElement).style.display = 'none';
    (document.getElementById('badge-chat') as HTMLElement).style.display = 'flex';
    (document.getElementById('heading') as HTMLElement).textContent = 'Chat With Our Sales Team';
    (document.getElementById('message') as HTMLElement).textContent =
        'Tap the button below and we will open WhatsApp for you. Our team is ready to answer your questions about Klemeru.';
}
