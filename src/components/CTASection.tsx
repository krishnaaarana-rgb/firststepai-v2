import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-primary text-primary-foreground rounded-3xl px-8 py-16 md:px-16 md:py-24 overflow-hidden noise-overlay"
      >
        {/* Decorative rings */}
        <div className="orbital-ring w-[400px] h-[400px] -top-[150px] -right-[150px]" style={{ borderColor: "hsl(var(--primary-foreground) / 0.06)" }} />
        <div className="orbital-ring w-[300px] h-[300px] -bottom-[100px] -left-[100px]" style={{ borderColor: "hsl(var(--primary-foreground) / 0.04)" }} />

        {/* Glow spots */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full animate-pulse-glow" style={{ background: "hsl(var(--glow-forest) / 0.1)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading mb-5 leading-[1.05]">
              Ready to take your<br />first step?
            </h2>
          </motion.div>
          <p className="text-primary-foreground/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Book a free, no-pressure consultation and see how AI can simplify your workday.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@firststepaai.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-primary font-heading font-semibold text-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              Book your free consultation
              <ArrowUpRight size={15} />
            </a>
            <span className="text-primary-foreground/30 text-sm">No commitment required</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
