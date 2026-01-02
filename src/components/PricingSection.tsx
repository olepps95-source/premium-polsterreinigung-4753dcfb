import { useState } from 'react';
import { Armchair, Sofa, BedDouble, Square, LayoutGrid, Minus, Plus } from 'lucide-react';
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

// Küchenstuhl icon - using imported SVG
const KuechenstuhlIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={kuechenstuhlIcon} alt="Küchenstuhl" className={className} />
);

// Bürostuhl icon - using imported SVG
const BuerostuhlIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <img src={buerostuhlIcon} alt="Bürostuhl" className={className} />
);

// All items merged into one unified list (order: Sofas, Matratzen, Stühle, Teppiche)
const allPriceItems = [
  // Sofas
  { id: 'sessel', title: 'Sessel', price: 'ab 40 €', icon: Armchair },
  { id: 'sofa-2', title: 'Sofa 2-Sitzer', price: 'ab 90 €', icon: Sofa },
  { id: 'sofa-3', title: 'Sofa 3-Sitzer', price: 'ab 110 €', icon: Sofa3SitzerIcon },
  { id: 'ecksofa', title: 'ECKCOUCH', price: 'ab 130 €', icon: EcksofaIcon },
  { id: 'ecksofa-gross', title: 'ECKCOUCH, groß', price: 'ab 160 €', icon: EcksofaGrossIcon },
  // Matratzen
  { id: 'matratze-90', title: 'Matratze 90 cm', price: 'ab 60 €', icon: BedDouble },
  { id: 'matratze-140', title: 'Matratze 140 cm', price: 'ab 80 €', icon: BedDouble },
  { id: 'matratze-180', title: 'Matratze 180 cm', price: 'ab 100 €', icon: BedDouble },
  // Stühle
  { id: 'autositz', title: 'Autositz', price: 'ab 20 €', icon: AutositzIcon },
  { id: 'kuechenstuhl', title: 'Küchenstuhl', price: 'ab 10 €', icon: KuechenstuhlIcon },
  { id: 'buerostuhl', title: 'Bürostuhl', price: 'ab 15 €', icon: BuerostuhlIcon },
  // Teppiche
  { id: 'teppich-klein', title: 'Teppich (bis 10 m²)', price: '10 € pro m²', icon: Square },
  { id: 'teppich-gross', title: 'Teppich (über 10 m²)', price: 'Preis nach Absprache', icon: LayoutGrid },
];

interface PricingSectionProps {
  onProductSelect?: (product: string) => void;
}

export function PricingSection({ onProductSelect }: PricingSectionProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (itemId: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[itemId] || 0;
      const newValue = Math.max(0, current + delta);
      return { ...prev, [itemId]: newValue };
    });
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

        {/* Unified Price Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {allPriceItems.map((item) => {
              const quantity = quantities[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 md:p-6 shadow-soft border border-border/50 flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-accent/50 flex items-center justify-center mb-4">
                    <item.icon 
                      className={`text-primary ${item.id === 'ecksofa-gross' ? 'w-[4.5rem] h-[4.5rem] md:w-[5.25rem] md:h-[5.25rem]' : 'w-12 h-12 md:w-14 md:h-14'}`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-sm md:text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  
                  {/* Price */}
                  <p className="text-base md:text-xl font-bold text-primary mb-4">
                    {item.price}
                  </p>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/70 hover:bg-accent flex items-center justify-center transition-colors duration-200"
                      aria-label="Menge verringern"
                    >
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-foreground" strokeWidth={2} />
                    </button>
                    <span className="w-8 text-center text-lg md:text-xl font-semibold text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors duration-200"
                      aria-label="Menge erhöhen"
                    >
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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
