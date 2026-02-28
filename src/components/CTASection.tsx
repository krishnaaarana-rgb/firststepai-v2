import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding bg-primary text-primary-foreground relative overflow-hidden noise-overlay">
    {/* Network pattern */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `linear-gradient(30deg, hsl(var(--sage)) 1px, transparent 1px), linear-gradient(150deg, hsl(var(--sage)) 1px, transparent 1px)`,
      backgroundSize: "200px 200px, 250px 250px",
    }} />

    <div className="orbital-ring w-[400px] h-[400px] -top-[150px] -right-[150px]" style={{ borderColor: "hsl(var(--primary-foreground) / 0.06)" }} />
    <div className="orbital-ring w-[300px] h-[300px] -bottom-[100px] -left-[100px]" style={{ borderColor: "hsl(var(--primary-foreground) / 0.04)" }} />

    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading mb-4 leading-[1.05]">
          Your confident step into AI,{" "}
          <span className="text-sage">done for you.</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Book a free, no-pressure consultation and see how AI can simplify your workday.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@firststepai.com.au"
            className="cta-button"
          >
            Book your free consultation
            <ArrowUpRight size={15} />
          </a>
          <span className="text-primary-foreground/30 text-sm">No commitment required</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
