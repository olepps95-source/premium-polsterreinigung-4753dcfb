import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
                href="https://www.instagram.com/reinwerk.clean?igsh=MW90MGVhYm5yZzZhMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/message/5SVXIYHUNM7LN1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@sofareinigung_reinwerk?_r=1&_t=ZN-9274cYU0GmM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4901636986317" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  01636986317
                </a>
              </li>
              <li>
                <a href="mailto:info@reinwerk-service.de" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  info@reinwerk-service.de
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  09113 Chemnitz, Matthesstraße 48
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutzerklärung
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
