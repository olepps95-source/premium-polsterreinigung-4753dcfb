import { useState } from 'react';
import { Armchair, Sofa, BedDouble, Square, LayoutGrid, Check } from 'lucide-react';
import ecksofaGrossIcon from '@/assets/ecksofa-gross-icon.svg';
import sofa3SitzerIcon from '@/assets/sofa-3-sitzer-icon.svg';
import autositzIcon from '@/assets/autositz-icon.svg';
import kuechenstuhlIcon from '@/assets/kuechenstuhl-icon.svg';
import buerostuhlIcon from '@/assets/buerostuhl-icon.svg';

// Sofa 3-Sitzer icon - using imported SVG
const Sofa3SitzerIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={sofa3SitzerIcon} alt="Sofa 3-Sitzer" className={className} />
);

// Autositz icon - using imported SVG
const AutositzIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={autositzIcon} alt="Autositz" className={className} />
);

// Ecksofa icon - exact copy of reference image
const EcksofaIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg 
    viewBox="0 0 100 50" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={4}
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    {/* Left armrest */}
    <path d="M8 16 C4 16 2 18 2 22 L2 34 C2 37 4 39 7 39 L7 42" />
    {/* Main sofa backrest */}
    <path d="M8 16 L8 10 C8 7 10 5 13 5 L62 5 C65 5 67 7 67 10 L67 16" />
    {/* Main sofa front/seat */}
    <path d="M8 39 L55 39 L55 32" />
    {/* Backrest cushion dividers */}
    <path d="M26 5 L26 16" />
    <path d="M44 5 L44 16" />
    {/* Seat line */}
    <path d="M8 22 L67 22" />
    {/* L-section */}
    <path d="M67 16 L67 22 L98 22 L98 39 C98 42 96 44 93 44 L60 44 C57 44 55 42 55 39" />
    {/* L-section inner seat line */}
    <path d="M67 32 L93 32" />
    {/* Legs */}
    <circle cx="7" cy="44" r="2" fill="currentColor" />
    <circle cx="60" cy="46" r="2" fill="currentColor" />
    <circle cx="93" cy="46" r="2" fill="currentColor" />
  </svg>
);

// Ecksofa groß icon - using imported SVG
const EcksofaGrossIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={ecksofaGrossIcon} alt="Ecksofa groß" className={className} />
);
// Custom Car Seat icon for Autositz
const CarSeatIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth || 1.5} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6 20V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12" />
    <path d="M6 12h12" />
    <path d="M8 16h8" />
    <path d="M5 20h14" />
    <path d="M8 20v2" />
    <path d="M16 20v2" />
  </svg>
);

// Küchenstuhl icon - using imported SVG
const KuechenstuhlIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={kuechenstuhlIcon} alt="Küchenstuhl" className={className} />
);

// Bürostuhl icon - using imported SVG
const BuerostuhlIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={buerostuhlIcon} alt="Bürostuhl" className={className} />
);

const priceItems = {
  sofas: [
    { id: 'sessel', title: 'Sessel', price: 'ab 40 €', icon: Armchair },
    { id: 'sofa-2', title: 'Sofa 2-Sitzer', price: 'ab 90 €', icon: Sofa },
    { id: 'sofa-3', title: 'Sofa 3-Sitzer', price: 'ab 110 €', icon: Sofa3SitzerIcon },
    { id: 'ecksofa', title: 'ECKCOUCH', price: 'ab 130 €', icon: EcksofaIcon },
    { id: 'ecksofa-gross', title: 'ECKCOUCH, groß', price: 'ab 160 €', icon: EcksofaGrossIcon },
  ],
  matratzen: [
    { id: 'matratze-90', title: 'Matratze 90 cm', price: 'ab 60 €', icon: BedDouble },
    { id: 'matratze-140', title: 'Matratze 140 cm', price: 'ab 80 €', icon: BedDouble },
    { id: 'matratze-180', title: 'Matratze 180 cm', price: 'ab 100 €', icon: BedDouble },
  ],
  stuehle: [
    { id: 'autositz', title: 'Autositz', price: 'ab 20 €', icon: AutositzIcon },
    { id: 'kuechenstuhl', title: 'Küchenstuhl', price: 'ab 10 €', icon: KuechenstuhlIcon },
    { id: 'buerostuhl', title: 'Bürostuhl', price: 'ab 15 €', icon: BuerostuhlIcon },
  ],
  teppiche: [
    { id: 'teppich-klein', title: 'Teppich (bis 10 m²)', price: '10 € pro m²', icon: Square },
    { id: 'teppich-gross', title: 'Teppich (über 10 m²)', price: 'Preis nach Absprache', icon: LayoutGrid },
  ],
};

const categories = [
  { id: 'sofas', title: 'Sofas', items: priceItems.sofas },
  { id: 'matratzen', title: 'Matratzen', items: priceItems.matratzen },
  { id: 'stuehle', title: 'Stühle', items: priceItems.stuehle },
  { id: 'teppiche', title: 'Teppiche', items: priceItems.teppiche },
];

const quickLinks = [
  { label: 'Sofas', target: '#sofas' },
  { label: 'Matratzen', target: '#matratzen' },
  { label: 'Stühle', target: '#stuehle' },
  { label: 'Teppiche', target: '#teppiche' },
];

interface PricingSectionProps {
  onProductSelect?: (product: string) => void;
}

export function PricingSection({ onProductSelect }: PricingSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProductClick = (title: string) => {
    setSelectedProduct(title);
    
    // Call the callback to update the form with product name only
    if (onProductSelect) {
      onProductSelect(title);
    }
    
    // Scroll to contact form
    const formElement = document.querySelector('#kontaktformular');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="preise" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Preisliste</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground">
            Faire und transparente Preisgestaltung ohne versteckte Kosten. Klicken Sie auf ein Produkt, um eine Anfrage zu stellen.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Price Categories */}
        <div className="max-w-5xl mx-auto space-y-20">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-foreground text-center mb-10">
                {category.title}
              </h3>
              
              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => {
                  const isSelected = selectedProduct === item.title;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleProductClick(item.title)}
                      className={`relative bg-card rounded-2xl p-8 shadow-soft border-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${
                        isSelected 
                          ? 'border-primary shadow-medium scale-[1.02]' 
                          : 'border-border/50 hover:shadow-medium hover:border-primary/40 hover:scale-[1.02]'
                      }`}
                    >
                      {/* Selected Checkmark */}
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                        isSelected ? 'bg-primary/10' : 'bg-accent/50 group-hover:bg-primary/10'
                      }`}>
                        <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {item.title}
                      </h4>
                      
                      {/* Price */}
                      <p className="text-xl font-bold text-primary">
                        {item.price}
                      </p>

                      {/* Hover hint */}
                      <p className={`text-xs text-muted-foreground mt-4 transition-opacity duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        {isSelected ? 'Ausgewählt' : 'Klicken zum Anfragen'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="px-8 py-6 bg-accent/30 rounded-2xl border border-border/30 text-center">
            <p className="text-muted-foreground">
              Der finale Preis richtet sich nach Größe, Material und Verschmutzungsgrad der Möbel.
            </p>
            <p className="text-muted-foreground mt-2">
              Transparenz steht bei uns an erster Stelle: Alle Details und mögliche Anpassungen besprechen wir selbstverständlich vorab mit Ihnen.
            </p>
            <p className="text-muted-foreground mt-2">
              Unsere persönliche Beratung ist für Sie kostenfrei.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
