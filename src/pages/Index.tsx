import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBand from "@/components/TrustBand";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationBanner from "@/components/LocationBanner";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBand />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <WhoIsForSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocationBanner />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
