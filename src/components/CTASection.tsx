import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="kontakt" className="py-24 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für saubere Polster?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Kontaktieren Sie uns noch heute und sichern Sie sich Ihren Wunschtermin. 
            Wir beraten Sie gerne unverbindlich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90" asChild>
              <a href="https://wa.me/4917612345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp schreiben
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground" asChild>
              <a href="tel:+4917612345678">
                <Phone className="w-5 h-5" />
                0176 123 456 78
              </a>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60">
            Schnelle Antwort garantiert – meist innerhalb von 30 Minuten
          </p>
        </div>
      </div>
    </section>
  );
}
