import { useRef } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PricingSection } from '@/components/PricingSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ServiceAreaSection } from '@/components/ServiceAreaSection';
import { ContactFormSection, ContactFormHandle } from '@/components/ContactFormSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const contactFormRef = useRef<ContactFormHandle>(null);

  const handleProductSelect = (product: string) => {
    if (contactFormRef.current) {
      contactFormRef.current.setSelectedProduct(product);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection onProductSelect={handleProductSelect} />
        <BeforeAfterSection />
        <ReviewsSection />
        <ServiceAreaSection />
        <ContactFormSection ref={contactFormRef} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
