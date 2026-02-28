import { motion } from "framer-motion";
import { Heart, Sparkles, Check } from "lucide-react";

const beliefs = [
  {
    icon: Heart,
    text: "AI should feel simple, not stressful.",
  },
  {
    icon: Sparkles,
    text: "Small businesses deserve the same time-saving wins as big corporates.",
  },
  {
    icon: Check,
    text: "Hands-on support beats DIY tutorials every time.",
  },
];

const WeBelieveSection = () => (
  <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden noise-overlay">
    {/* Network pattern */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `linear-gradient(30deg, hsl(var(--sage)) 1px, transparent 1px), linear-gradient(150deg, hsl(var(--sage)) 1px, transparent 1px)`,
      backgroundSize: "200px 200px, 250px 250px",
    }} />

    {/* Constellation dots */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: `
        radial-gradient(1.5px 1.5px at 10% 20%, hsl(var(--sage) / 0.3), transparent),
        radial-gradient(1px 1px at 25% 60%, hsl(var(--sage) / 0.2), transparent),
        radial-gradient(1.5px 1.5px at 70% 35%, hsl(var(--sage) / 0.2), transparent),
        radial-gradient(1px 1px at 85% 55%, hsl(var(--sage) / 0.25), transparent),
        radial-gradient(1.5px 1.5px at 80% 80%, hsl(var(--sage) / 0.2), transparent)
      `,
    }} />

    <div className="container-wide relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading italic">
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
            className="relative rounded-2xl p-8 md:p-10 transition-all duration-700"
            style={{
              background: "hsl(var(--primary-foreground) / 0.06)",
              border: "1px solid hsl(var(--primary-foreground) / 0.08)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "hsl(var(--primary-foreground) / 0.08)" }}
            >
              <belief.icon className="w-5 h-5 text-primary-foreground/70" />
            </div>
            <p className="text-lg md:text-xl font-heading font-semibold leading-snug text-primary-foreground/90">
              {belief.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 md:mt-20 text-center"
      >
        <p className="text-primary-foreground/70 font-heading font-semibold mb-2">
          Ready to take your first step?
        </p>
        <p className="text-primary-foreground/50 text-sm mb-8">
          Book a free 30-minute call and let's make AI simple for your business.
        </p>
        <a href="/contact" className="cta-button">
          Book your call
        </a>
      </motion.div>
    </div>
  </section>
);

export default WeBelieveSection;
