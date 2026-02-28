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
        className="relative bg-primary text-primary-foreground rounded-3xl px-8 py-16 md:px-16 md:py-24 overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-primary-foreground/10" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-primary-foreground/5" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-5">
            Ready to take your first step?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto leading-relaxed">
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
            <span className="text-primary-foreground/40 text-sm">No commitment required</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
