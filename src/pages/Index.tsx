import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import BentoGridSection from "@/components/BentoGridSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import WeBelieveSection from "@/components/WeBelieveSection";
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
      
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <AboutSection />
      <FounderSection />
      <BentoGridSection />
      <WhoIsForSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocationBanner />
      <FAQSection />
      <WeBelieveSection />
      <FooterSection />
    </div>
  );
};

export default Index;
