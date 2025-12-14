import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  hasMarketingConsent, 
  initializeMetaPixel, 
  trackPageView 
} from '@/lib/meta-pixel';

/**
 * Hook to initialize Meta Pixel and track page views
 * Only activates after marketing consent is granted
 */
export const useMetaPixel = () => {
  const location = useLocation();

  // Initialize pixel on mount if consent exists
  useEffect(() => {
    if (hasMarketingConsent()) {
      initializeMetaPixel();
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (hasMarketingConsent()) {
      // Small delay to ensure pixel is initialized
      const timer = setTimeout(() => {
        trackPageView();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
};
