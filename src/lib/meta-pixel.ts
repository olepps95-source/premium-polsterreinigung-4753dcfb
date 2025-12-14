// Meta Pixel utility - GDPR/DSGVO compliant implementation
// Only loads after explicit marketing consent

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = '1173321795000924';
let isPixelInitialized = false;

/**
 * Check if marketing consent has been granted
 */
export const hasMarketingConsent = (): boolean => {
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'all';
};

/**
 * Initialize Meta Pixel - only call after consent is granted
 */
export const initializeMetaPixel = (): void => {
  // Prevent duplicate initialization
  if (isPixelInitialized || typeof window === 'undefined') {
    return;
  }

  // Double-check consent before initializing
  if (!hasMarketingConsent()) {
    return;
  }

  // Initialize fbq function
  const fbq = function(...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as typeof window.fbq & { 
    callMethod?: (...args: unknown[]) => void; 
    queue: unknown[][]; 
    loaded: boolean; 
    version: string; 
    push: (...args: unknown[]) => void;
  };

  if (!window._fbq) {
    window._fbq = fbq;
  }

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;

  // Dynamically load the Meta Pixel script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  
  script.onload = () => {
    // Initialize pixel after script loads
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    isPixelInitialized = true;
  };

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
};

/**
 * Track a PageView event - only if consent is granted and pixel is initialized
 */
export const trackPageView = (): void => {
  if (!hasMarketingConsent() || !isPixelInitialized) {
    return;
  }
  
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track a Lead event (form submission) - only if consent is granted
 */
export const trackLead = (): void => {
  if (!hasMarketingConsent() || !isPixelInitialized) {
    return;
  }
  
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }
};

/**
 * Track a Contact event (WhatsApp click) - only if consent is granted
 */
export const trackContact = (): void => {
  if (!hasMarketingConsent() || !isPixelInitialized) {
    return;
  }
  
  if (window.fbq) {
    window.fbq('track', 'Contact');
  }
};

/**
 * Check if pixel is ready for tracking
 */
export const isPixelReady = (): boolean => {
  return isPixelInitialized && hasMarketingConsent();
};
