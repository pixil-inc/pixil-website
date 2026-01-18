// Analytics utility - unified tracking for GTM
// Eliminates duplication across Layout and GetInTouch components

interface DataLayer {
  push: (data: Record<string, any>) => void;
}

declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

/**
 * Core function to track any event to Google Tag Manager
 */
export function trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
}

/**
 * Track when a section comes into viewport
 */
export function trackSection(sectionName: string): void {
  trackEvent('section_view', {
    section_name: sectionName,
    page_title: document.title,
    page_location: window.location.href,
  });
}

/**
 * Track button clicks throughout the site
 */
export function trackButton(buttonText: string, buttonType: string = 'button'): void {
  trackEvent('button_click', {
    button_text: buttonText,
    button_type: buttonType,
    page_title: document.title,
    page_location: window.location.href,
  });
}

/**
 * Track form-specific events
 */
export function trackForm(eventName: string, formData: Record<string, any> = {}): void {
  trackEvent(eventName, {
    form_name: 'contact_form',
    ...formData,
  });
}

/**
 * Track page views
 */
export function trackPageView(): void {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_referrer: document.referrer,
  });
}
