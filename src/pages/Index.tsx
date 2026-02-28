import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBand from "@/components/TrustBand";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import LocationBanner from "@/components/LocationBanner";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBand />
      <ServicesSection />
      <AboutSection />
      <WhoIsForSection />
      <LocationBanner />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
