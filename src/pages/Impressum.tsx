import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-12">Impressum</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <p className="text-lg">
                <strong className="text-foreground">ReinWerk</strong><br />
                Inhaber: Pshenychnyi Oleh<br />
                Matthesstraße 48<br />
                09113 Chemnitz<br />
                Deutschland
              </p>
            </section>

            <section>
              <p>
                <strong className="text-foreground">Telefon:</strong> 01636986317<br />
                <strong className="text-foreground">E-Mail:</strong>{' '}
                <a href="mailto:info@reinwerk-service.de" className="text-primary hover:underline">
                  info@reinwerk-service.de
                </a>
              </p>
            </section>

            <section>
              <p>
                <strong className="text-foreground">Umsatzsteuer-ID:</strong> nicht vorhanden
              </p>
            </section>

            <section>
              <p>
                <strong className="text-foreground">Verantwortlich gemäß § 55 RStV:</strong><br />
                Pshenychnyi Oleh
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
