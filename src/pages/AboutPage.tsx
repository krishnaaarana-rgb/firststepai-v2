import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20" />
    <AboutSection />
    <FounderSection />
    <StatsSection />
    <TestimonialsSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default AboutPage;
