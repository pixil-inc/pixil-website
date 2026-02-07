export interface Service {
  heading: string;
  description: string;
  icon: string;
}

export interface Client {
  name: string;
  industry: string;
  address1: string;
  address2: string;
  phone: string;
  email: string;
}

// Global analytics interface
declare global {
  interface Window {
    __analytics: {
      trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
      trackSection: (sectionName: string) => void;
      trackButton: (buttonText: string, buttonType?: string) => void;
      trackForm: (eventName: string, formData?: Record<string, any>) => void;
      trackPageView: () => void;
    };
  }
}
