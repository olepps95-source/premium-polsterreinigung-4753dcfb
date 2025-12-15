import { useState } from 'react';
import { Armchair, Sofa, BedDouble, Square, LayoutGrid, Check } from 'lucide-react';

// Ecksofa icon - minimal adaptation of Lucide Sofa for L-shape
const EcksofaIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth}
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
    <path d="M2 16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
    <path d="M15 16a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-4 0v1" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
    <path d="M10 4v7" />
  </svg>
);

// Ecksofa groß icon - same style, slightly wider L-extension
const EcksofaGrossIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth}
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
    <path d="M2 16a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
    <path d="M13 16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5H13" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
    <path d="M9 4v7" />
  </svg>
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

// Custom Dining Chair icon for Küchenstuhl
const DiningChairIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth || 1.5} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7 4v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4" />
    <path d="M7 10v10" />
    <path d="M17 10v10" />
    <path d="M5 20h14" />
    <path d="M9 14h6" />
  </svg>
);

// Custom Office Chair icon for Bürostuhl
const OfficeChairIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth || 1.5} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
    <path d="M5 11h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3z" />
    <path d="M12 16v3" />
    <path d="M8 22h8" />
    <path d="M6 22l2-3" />
    <path d="M18 22l-2-3" />
    <path d="M4 11h2" />
    <path d="M18 11h2" />
  </svg>
);

const priceItems = {
  sofas: [
    { id: 'sessel', title: 'Sessel', price: 'ab 40 €', icon: Armchair },
    { id: 'sofa-2', title: 'Sofa 2-Sitzer', price: 'ab 90 €', icon: Sofa },
    { id: 'sofa-3', title: 'Sofa 3-Sitzer', price: 'ab 110 €', icon: Sofa },
    { id: 'ecksofa', title: 'Ecksofa', price: 'ab 130 €', icon: EcksofaIcon },
    { id: 'ecksofa-gross', title: 'Ecksofa groß', price: 'ab 160 €', icon: EcksofaGrossIcon },
  ],
  matratzen: [
    { id: 'matratze-90', title: 'Matratze 90 cm', price: 'ab 60 €', icon: BedDouble },
    { id: 'matratze-140', title: 'Matratze 140 cm', price: 'ab 80 €', icon: BedDouble },
    { id: 'matratze-180', title: 'Matratze 180 cm', price: 'ab 100 €', icon: BedDouble },
  ],
  stuehle: [
    { id: 'autositz', title: 'Autositz', price: 'ab 20 €', icon: CarSeatIcon },
    { id: 'kuechenstuhl', title: 'Küchenstuhl', price: 'ab 10 €', icon: DiningChairIcon },
    { id: 'buerostuhl', title: 'Bürostuhl', price: 'ab 15 €', icon: OfficeChairIcon },
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
              Endpreise hängen vom Verschmutzungsgrad ab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
