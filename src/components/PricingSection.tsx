import { Armchair, Sofa, BedDouble, Car, UtensilsCrossed, Monitor, Square, LayoutGrid } from 'lucide-react';

const priceItems = {
  sofas: [
    { id: 'sessel', title: 'Sessel', price: 'ab 40 €', icon: Armchair },
    { id: 'sofa-2', title: 'Sofa 2-Sitzer', price: 'ab 90 €', icon: Sofa },
    { id: 'sofa-3', title: 'Sofa 3-Sitzer', price: 'ab 110 €', icon: Sofa },
    { id: 'ecksofa', title: 'Ecksofa', price: 'ab 130 €', icon: Sofa },
    { id: 'ecksofa-gross', title: 'Ecksofa groß', price: 'ab 160 €', icon: Sofa },
  ],
  matratzen: [
    { id: 'matratze-90', title: 'Matratze 90 cm', price: 'ab 60 €', icon: BedDouble },
    { id: 'matratze-140', title: 'Matratze 140 cm', price: 'ab 80 €', icon: BedDouble },
    { id: 'matratze-180', title: 'Matratze 180 cm', price: 'ab 100 €', icon: BedDouble },
  ],
  stuehle: [
    { id: 'autositz', title: 'Autositz', price: 'ab 20 €', icon: Car },
    { id: 'kuechenstuhl', title: 'Küchenstuhl', price: 'ab 10 €', icon: UtensilsCrossed },
    { id: 'buerostuhl', title: 'Bürostuhl', price: 'ab 15 €', icon: Monitor },
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
  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProductClick = (title: string) => {
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
                {category.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleProductClick(item.title)}
                    className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-accent/50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
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
                    <p className="text-xs text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Klicken zum Anfragen
                    </p>
                  </button>
                ))}
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
