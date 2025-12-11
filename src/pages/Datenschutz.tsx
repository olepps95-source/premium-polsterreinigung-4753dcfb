import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-12">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Verantwortlicher</h2>
              <p>
                ReinWerk<br />
                Inhaber: Pshenychnyi Oleh<br />
                Matthesstraße 48<br />
                09113 Chemnitz<br />
                Telefon: 01636986317<br />
                E-Mail: info@reinwerk-service.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="mb-4">
                Wir verarbeiten personenbezogene Daten, die Sie uns über das Kontaktformular, per E-Mail oder über WhatsApp übermitteln. Dazu gehören:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Name</li>
                <li>Adresse / Postleitzahl</li>
                <li>Telefonnummer</li>
                <li>E-Mail-Adresse</li>
                <li>Angaben zu Ihrem Anliegen (Textnachricht)</li>
                <li>Ausgewähltes Produkt / gewünschter Reinigungstermin</li>
              </ul>
              <p className="mt-4">
                Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Server-Logfiles</h2>
              <p>
                Beim Besuch unserer Website werden automatisch Daten durch den Provider verarbeitet (u.a. IP-Adresse, Browsertyp, Datum und Uhrzeit), um die technische Funktion der Seite sicherzustellen. Eine Zusammenführung mit anderen Daten findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies, um grundlegende Funktionen zu ermöglichen. Sie können der Verwendung zustimmen oder widersprechen. Details dazu finden Sie im Cookie-Banner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Einbindung von Drittinhalten</h2>
              <p className="mb-4">
                Unsere Website kann externe Dienste verwenden, z. B.:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>eingebettete Inhalte von Instagram oder TikTok</li>
                <li>WhatsApp-Verlinkungen</li>
                <li>Schriftarten (z. B. Webfonts)</li>
              </ul>
              <p className="mt-4">
                Bei der Nutzung dieser Dienste können personenbezogene Daten an die jeweiligen Anbieter übertragen werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. WhatsApp Kontakt</h2>
              <p>
                Durch das Klicken auf einen WhatsApp-Link werden Sie zu WhatsApp weitergeleitet. Dabei gelten die Datenschutzrichtlinien von WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Dauer der Speicherung</h2>
              <p>
                Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Widerruf</h2>
              <p>
                Sie können Ihre Einwilligung zur Datenverarbeitung jederzeit per E-Mail an:<br />
                <a href="mailto:info@reinwerk-service.de" className="text-primary hover:underline">info@reinwerk-service.de</a><br />
                widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Ihre Rechte</h2>
              <p className="mb-4">Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Auskunft</li>
                <li>Berichtigung</li>
                <li>Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Beschwerde bei der zuständigen Aufsichtsbehörde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Kontakt</h2>
              <p>
                Für Datenschutzanfragen wenden Sie sich an den oben genannten Verantwortlichen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
