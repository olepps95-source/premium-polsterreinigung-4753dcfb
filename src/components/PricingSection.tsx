import { Check } from 'lucide-react';

const prices = [
  { item: 'Sofa 2-Sitzer', price: 'ab 69€' },
  { item: 'Sofa 3-Sitzer', price: 'ab 89€' },
  { item: 'Ecksofa', price: 'ab 109€' },
  { item: 'Matratze pro Seite', price: 'ab 35€' },
  { item: 'Sessel', price: 'ab 25€' },
];

export function PricingSection() {
  return (
    <section id="preise" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Preisliste</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground">
            Faire und transparente Preisgestaltung ohne versteckte Kosten. 
            Der Endpreis hängt vom Verschmutzungsgrad ab.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-medium overflow-hidden">
            <div className="p-8 md:p-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Leistung</th>
                    <th className="text-right pb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((row, index) => (
                    <tr key={row.item} className={index !== prices.length - 1 ? 'border-b border-border/50' : ''}>
                      <td className="py-5 text-foreground font-medium flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        {row.item}
                      </td>
                      <td className="py-5 text-right">
                        <span className="text-xl font-bold text-primary">{row.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-8 md:px-10 py-6 bg-accent/50 border-t border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Hinweis:</strong> Endpreise hängen vom Verschmutzungsgrad ab. 
                Wir erstellen Ihnen gerne ein individuelles Angebot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
