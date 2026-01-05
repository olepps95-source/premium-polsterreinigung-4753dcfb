import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSelectedServices } from '@/contexts/SelectedServicesContext';

export function StickyCtaButton() {
  const { getTotalQuantity } = useSelectedServices();
  const hasSelectedServices = getTotalQuantity() > 0;

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const firstInput = contactSection.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      }, 800);
    }
  };

  if (!hasSelectedServices) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-[calc(env(safe-area-inset-bottom,16px)+80px)] bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <Button
          onClick={scrollToContact}
          variant="cta"
          size="xl"
          className="w-full shadow-xl shadow-primary/25"
        >
          Weiter zur Anfrage
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
