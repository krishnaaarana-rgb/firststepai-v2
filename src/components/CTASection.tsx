import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding">
    <div className="container-wide flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-accent text-accent-foreground rounded-[3rem] px-8 py-16 md:px-16 md:py-20 text-center max-w-2xl w-full overflow-hidden"
        style={{ borderRadius: "38% 62% 52% 48% / 45% 50% 50% 55%" }}
      >
        {/* Floating mail icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-10 opacity-30"
        >
          <Mail className="w-10 h-10" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
          Ready to take your first step?
        </h2>
        <p className="text-lg opacity-90 mb-10 max-w-md mx-auto">
          Book a free, no-pressure consultation and see how AI can simplify your workday.
        </p>
        <a
          href="mailto:hello@firststepaai.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold text-base md:text-lg hover:shadow-lift hover:scale-105 transition-all duration-300"
        >
          Book your free consultation
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
