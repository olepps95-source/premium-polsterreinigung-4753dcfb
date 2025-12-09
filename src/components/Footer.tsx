import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/80 border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-foreground">
              Rein<span className="text-primary">Werk</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Professionelle Polsterreinigung in Sachsen. Wir bringen Ihre Möbel zum Strahlen – 
              schonend, gründlich und umweltfreundlich.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/4917612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4917612345678" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  0176 123 456 78
                </a>
              </li>
              <li>
                <a href="mailto:info@reinwerk.de" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  info@reinwerk.de
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Chemnitz & Umgebung
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="#impressum" className="text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#agb" className="text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} ReinWerk. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
