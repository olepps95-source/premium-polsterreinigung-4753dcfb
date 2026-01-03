import { useRef } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PricingSection } from '@/components/PricingSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ServiceAreaSection } from '@/components/ServiceAreaSection';
import { CTASection, CTAFormHandle } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { SelectedServicesProvider } from '@/contexts/SelectedServicesContext';

const Index = () => {
  const ctaFormRef = useRef<CTAFormHandle>(null);

  return (
    <SelectedServicesProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PricingSection />
          <BeforeAfterSection />
          <ReviewsSection />
          <ServiceAreaSection />
          <CTASection ref={ctaFormRef} />
        </main>
        <Footer />
      </div>
    </SelectedServicesProvider>
  );
};

export default Index;
