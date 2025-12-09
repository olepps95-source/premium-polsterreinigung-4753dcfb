import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface ContactFormHandle {
  setSelectedProduct: (product: string) => void;
}

export const ContactFormSection = forwardRef<ContactFormHandle>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const { toast } = useToast();

  useImperativeHandle(ref, () => ({
    setSelectedProduct: (product: string) => {
      setFormData(prev => ({ ...prev, product }));
    },
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });

    // Reset form
    setFormData({
      name: '',
      location: '',
      email: '',
      phone: '',
      product: '',
      message: '',
    });
  };

  return (
    <section id="kontaktformular" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kontaktdaten
            </h2>
            <p className="text-lg text-muted-foreground">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ihr vollständiger Name"
                className="h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-foreground font-medium">
                Stadt & Postleitzahl
              </Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="z.B. Hamburg 20095"
                className="h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                E-Mail <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ihre@email.de"
                className="h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Telefonnummer <span className="text-primary">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0176 123 456 78"
                className="h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>

            {/* Selected Product */}
            <div className="space-y-2">
              <Label htmlFor="product" className="text-foreground font-medium">
                Ausgewähltes Produkt
              </Label>
              <Input
                id="product"
                name="product"
                type="text"
                value={formData.product}
                onChange={handleChange}
                placeholder="Wählen Sie ein Produkt aus der Preisliste"
                className="h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Nachricht / zusätzliche Informationen
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Beschreiben Sie Ihr Anliegen oder teilen Sie uns weitere Details mit..."
                className="min-h-[140px] bg-card border-border/50 focus:border-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="cta"
              size="xl"
              className="w-full"
            >
              <Send className="w-5 h-5" />
              Anfrage senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
});

ContactFormSection.displayName = 'ContactFormSection';
