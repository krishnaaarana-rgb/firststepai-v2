import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import BentoGridSection from "@/components/BentoGridSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20" />
    <ServicesSection />
    <BentoGridSection />
    <ProcessSection />
    <FAQSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default ServicesPage;
