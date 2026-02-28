import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding dark-section network-bg">
    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading mb-4 leading-[1.05] text-primary-foreground">
          Your confident step into AI,<br />
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
