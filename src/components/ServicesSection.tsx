import { motion } from "framer-motion";
import { Wrench, Sparkles, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Wrench,
    title: "Done-for-you implementation",
    description:
      "Plain advice, in-person implementation plus zero jargon. Know what to use, why, and how.",
  },
  {
    icon: Sparkles,
    title: "Proven AI tools",
    description:
      "Trusted, easy tools with immediate impact. No experimental tech.",
  },
  {
    icon: Lightbulb,
    title: "Simple training",
    description:
      "Your team learns to use AI confidently, without overwhelm.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container-wide">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading text-center mb-16"
      >
        How We Help
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group glass-card rounded-2xl p-8 md:p-10 hover:shadow-lift hover:-translate-y-1 transition-all duration-300 hover:border-coral/30"
          >
            <div className="w-14 h-14 rounded-xl bg-lavender/60 flex items-center justify-center mb-6 group-hover:bg-lavender transition-colors">
              <card.icon className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
