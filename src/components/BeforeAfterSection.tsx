import beforeAfter1 from '@/assets/before-after-1.jpg';
import beforeAfter2 from '@/assets/before-after-2.jpg';
import beforeAfter3 from '@/assets/before-after-3.jpg';

const gallery = [
  {
    image: beforeAfter1,
    caption: 'Sofa Tiefenreinigung',
    description: 'Hartnäckige Flecken vollständig entfernt',
  },
  {
    image: beforeAfter2,
    caption: 'Matratzenreinigung',
    description: 'Hygienisch rein für besseren Schlaf',
  },
  {
    image: beforeAfter3,
    caption: 'Sessel Auffrischung',
    description: 'Tierhaare und Verschmutzungen beseitigt',
  },
];

export function BeforeAfterSection() {
  return (
    <section id="vorher-nachher" className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Vorher – Nachher</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-lg text-muted-foreground">
            Sehen Sie den Unterschied, den professionelle Polsterreinigung macht. 
            Diese Ergebnisse sprechen für sich.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.caption}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">{item.caption}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-foreground">{item.caption}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
