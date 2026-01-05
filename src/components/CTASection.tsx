import { useState, forwardRef, useImperativeHandle } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { trackLead, trackContact } from '@/lib/meta-pixel';
import { useSelectedServices } from '@/contexts/SelectedServicesContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';

export interface CTAFormHandle {
  setSelectedProduct: (product: string) => void;
}

export const CTASection = forwardRef<CTAFormHandle>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    appointmentDate: '',
    message: '',
  });
  const { toast } = useToast();
  const { getSelectedServices, getTotalQuantity, getTotalPrice, clearSelections } = useSelectedServices();

  const selectedServices = getSelectedServices();
  const totalQuantity = getTotalQuantity();
  const totalPrice = getTotalPrice();

  useImperativeHandle(ref, () => ({
    setSelectedProduct: (_product: string) => {
      // Legacy method - no longer needed with new system
    },
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatServicesForEmail = () => {
    if (selectedServices.length === 0) return '';
    
    let text = '\n\n--- Ausgewählte Leistungen ---\n';
    selectedServices.forEach(service => {
      const rowTotal = service.quantity * service.numericPrice;
      text += `${service.title}: ${service.quantity}x à ${service.price} = ${rowTotal > 0 ? `${rowTotal} €` : 'Preis nach Absprache'}\n`;
    });
    text += `\nGesamt: ${totalQuantity} Stück, ${totalPrice > 0 ? `ab ${totalPrice} €` : 'Preis nach Absprache'}`;
    return text;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus",
        variant: "destructive",
      });
      return;
    }

    // Build email body with services
    const servicesText = formatServicesForEmail();
    const emailBody = `
Name: ${formData.name}
Stadt & PLZ: ${formData.location}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Wunschtermin: ${formData.appointmentDate}
Nachricht: ${formData.message}
${servicesText}
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent('Neue Reinigungsanfrage – ReinWerk');
    const body = encodeURIComponent(emailBody);
    window.location.href = `mailto:info@reinwerk-service.de?subject=${subject}&body=${body}`;

    toast({
      title: "Anfrage wird vorbereitet!",
      description: "Ihr E-Mail-Programm wird geöffnet.",
    });

    // Track Lead event for Meta Pixel (only fires if consent granted)
    trackLead();

    // Clear form and selections
    setFormData({
      name: '',
      location: '',
      email: '',
      phone: '',
      appointmentDate: '',
      message: '',
    });
    clearSelections();
  };

  return (
    <section id="kontakt" className="py-24 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für saubere Polster?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto">
            Kontaktieren Sie uns noch heute und sichern Sie sich Ihren Wunschtermin. 
            Wir beraten Sie gerne unverbindlich.
          </p>

          {/* Contact Form */}
          <div id="kontaktformular" className="bg-background rounded-2xl p-8 md:p-10 mb-12 text-left">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Kontaktdaten
              </h3>
              <p className="text-muted-foreground">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>

            {/* Summary Table - only shown when services selected */}
            {selectedServices.length > 0 && (
              <div className="mb-8 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead className="text-foreground font-semibold">Möbelstück</TableHead>
                      <TableHead className="text-foreground font-semibold text-center">Anzahl</TableHead>
                      <TableHead className="text-foreground font-semibold text-right">Einzelpreis</TableHead>
                      <TableHead className="text-foreground font-semibold text-right">Gesamtpreis</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedServices.map((service) => {
                      const rowTotal = service.quantity * service.numericPrice;
                      return (
                        <TableRow key={service.id} className="border-border/50">
                          <TableCell className="text-foreground font-medium">{service.title}</TableCell>
                          <TableCell className="text-foreground text-center">{service.quantity}</TableCell>
                          <TableCell className="text-foreground text-right">{service.price}</TableCell>
                          <TableCell className="text-foreground text-right font-medium">
                            {rowTotal > 0 ? `ab ${rowTotal} €` : 'Nach Absprache'}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                  <TableFooter className="bg-accent/30">
                    <TableRow className="border-border/50">
                      <TableCell className="text-foreground font-bold">Gesamt</TableCell>
                      <TableCell className="text-foreground font-bold text-center">{totalQuantity}</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-primary font-bold text-right">
                        {totalPrice > 0 ? `ab ${totalPrice} €` : 'Nach Absprache'}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="01636986317"
                  className="h-12 bg-card border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointmentDate" className="text-foreground font-medium">
                  Wunschtermin (TT.MM.JJJJ HH:MM)
                </Label>
                <Input
                  id="appointmentDate"
                  name="appointmentDate"
                  type="text"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  placeholder="12.03.2025 15:30"
                  className="h-12 bg-card border-border/50 focus:border-primary"
                />
              </div>

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

              <p className="text-xs text-muted-foreground leading-relaxed">
                Mit dem Absenden des Formulars erkläre ich mich damit einverstanden, dass meine angegebenen Daten zum Zweck der Kontaktaufnahme und Bearbeitung meiner Anfrage verarbeitet werden. Ich kann diese Einwilligung jederzeit per E-Mail an{' '}
                <a href="mailto:info@reinwerk-service.de" className="text-primary hover:underline">
                  info@reinwerk-service.de
                </a>{' '}
                widerrufen.
              </p>

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

          {/* WhatsApp & Phone Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="bg-[#25D366] text-white hover:bg-[#25D366]" asChild>
              <a 
                href="https://wa.me/message/5SVXIYHUNM7LN1" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackContact()}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp schreiben
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground" asChild>
              <a href="tel:+4901636986317">
                <Phone className="w-5 h-5" />
                01636986317
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
});

CTASection.displayName = 'CTASection';
