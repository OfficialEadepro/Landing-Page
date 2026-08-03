// Drives /thank-you.html: fires the conversion event, then forwards the visitor to WhatsApp.
//
// The conversion is only pushed to the dataLayer once the visitor has actually stayed on this
// page — either for the full delay below, or long enough to tap "Continue to WhatsApp".
// Someone who mis-taps a button and immediately goes back is therefore never counted.
// In Google Tag Manager, trigger the conversion tag on the custom event "conversion_confirmed".

import './index.css';
import { takePendingWhatsAppUrl } from './leads';

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        fbq?: (...args: unknown[]) => void;
    }
}

const DWELL_MS = 2000;
// Small grace period so the analytics request leaves the browser before we navigate away.
const HANDOFF_MS = 250;

const whatsappUrl = takePendingWhatsAppUrl();
const source = new URLSearchParams(window.location.search).get('src') ?? 'direct';

const continueLink = document.getElementById('continue') as HTMLAnchorElement;
const progress = document.getElementById('progress') as HTMLElement;
const status = document.getElementById('status') as HTMLElement;

continueLink.href = whatsappUrl;

let confirmed = false;

const confirmConversion = (confirmedBy: 'dwell' | 'click') => {
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

const proceed = (confirmedBy: 'dwell' | 'click') => {
    confirmConversion(confirmedBy);
    status.textContent = 'Opening WhatsApp…';
    window.setTimeout(() => {
        window.location.href = whatsappUrl;
    }, HANDOFF_MS);
};

progress.style.transition = `width ${DWELL_MS}ms linear`;
requestAnimationFrame(() => {
    progress.style.width = '100%';
});

const dwellTimer = window.setTimeout(() => proceed('dwell'), DWELL_MS);

continueLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.clearTimeout(dwellTimer);
    proceed('click');
});
