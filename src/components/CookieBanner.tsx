import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { initializeMetaPixel } from '@/lib/meta-pixel';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
    // Initialize Meta Pixel after marketing consent is granted
    initializeMetaPixel();
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
    // Do NOT initialize Meta Pixel - only necessary cookies allowed
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background border-t border-border shadow-xl">
      <div className="container py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground max-w-2xl">
            Diese Website verwendet Cookies, um Ihnen ein besseres Nutzererlebnis zu ermöglichen. 
            Sie können der Nutzung zustimmen oder nur notwendige Cookies erlauben.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleAcceptNecessary}
              className="whitespace-nowrap"
            >
              Nur notwendige Cookies
            </Button>
            <Button
              variant="cta"
              size="sm"
              onClick={handleAcceptAll}
              className="whitespace-nowrap"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
