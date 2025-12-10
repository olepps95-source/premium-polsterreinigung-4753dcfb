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

const Index = () => {
  const ctaFormRef = useRef<CTAFormHandle>(null);

  const handleProductSelect = (product: string) => {
    if (ctaFormRef.current) {
      ctaFormRef.current.setSelectedProduct(product);
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
        <CTASection ref={ctaFormRef} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
