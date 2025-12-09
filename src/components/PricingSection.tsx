import { Sofa, BedDouble, Armchair, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 'sofas',
    title: 'Sofas',
    icon: Sofa,
    items: [
      { item: 'Weicher Sessel', price: 'ab 40€' },
      { item: '2-Sitzer Sofa', price: 'ab 90€' },
      { item: '3-Sitzer Sofa', price: 'ab 110€' },
      { item: 'Ecksofa', price: 'ab 130€' },
      { item: 'Großes Ecksofa', price: 'ab 160€' },
    ],
  },
  {
    id: 'matratzen',
    title: 'Matratzen',
    icon: BedDouble,
    items: [
      { item: 'Matratze 90 cm', price: 'ab 60€' },
      { item: 'Matratze 140 cm', price: 'ab 80€' },
      { item: 'Matratze 180 cm', price: 'ab 100€' },
    ],
  },
  {
    id: 'stuehle',
    title: 'Stühle',
    icon: Armchair,
    items: [
      { item: 'Autositz', price: 'ab 20€' },
      { item: 'Küchenstuhl', price: 'ab 10€' },
      { item: 'Bürostuhl', price: 'ab 15€' },
    ],
  },
  {
    id: 'teppiche',
    title: 'Teppiche & Teppichboden',
    icon: Sparkles,
    items: [
      { item: 'Teppich', price: '10€/m²' },
      { item: 'Teppichreinigung ab 10 m²', price: 'Preis nach Vereinbarung' },
    ],
  },
];

const quickLinks = [
  { label: 'Sofas', target: '#sofas' },
  { label: 'Matratzen', target: '#matratzen' },
  { label: 'Stühle', target: '#stuehle' },
  { label: 'Teppiche', target: '#teppiche' },
];

export function PricingSection() {
  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="preise" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Preisliste</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground">
            Faire und transparente Preisgestaltung ohne versteckte Kosten.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Price Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="bg-card rounded-3xl shadow-medium overflow-hidden scroll-mt-32"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((row, index) => (
                    <div
                      key={row.item}
                      className={`flex items-center justify-between py-4 ${
                        index !== category.items.length - 1 ? 'border-b border-border/50' : ''
                      }`}
                    >
                      <span className="text-foreground font-medium">{row.item}</span>
                      <span className="text-lg font-bold text-primary whitespace-nowrap ml-4">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="px-8 md:px-10 py-6 bg-accent/50 rounded-2xl border border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Hinweis:</strong> Endpreise können je nach Verschmutzungsgrad und Material variieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
