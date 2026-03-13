import { motion } from "framer-motion";
import { Heart, Sparkles, Check } from "lucide-react";

const beliefs = [
  { icon: Heart, text: "AI should feel simple, not stressful." },
  { icon: Sparkles, text: "Small businesses deserve the same time-saving wins as big corporates." },
  { icon: Check, text: "Hands-on support beats DIY tutorials every time." },
];

const WeBelieveSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading italic text-foreground">
          We believe
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {beliefs.map((belief, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="editorial-card"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
              style={{ background: 'rgba(0, 166, 166, 0.1)' }}
            >
              <belief.icon className="w-5 h-5 text-teal" />
            </div>
            <p className="text-lg md:text-xl font-heading font-semibold leading-snug text-foreground">
              {belief.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 md:mt-20 text-center"
      >
        <p className="text-foreground font-heading font-semibold mb-2">Ready to take your first step?</p>
        <p className="text-muted-foreground text-sm mb-8">Book a free 30-minute call and let's make AI simple for your business.</p>
        <a href="/contact" className="cta-button">Book your call</a>
      </motion.div>
    </div>
  </section>
);

export default WeBelieveSection;
