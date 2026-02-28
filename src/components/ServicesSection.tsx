import { motion } from "framer-motion";
import { Wrench, Sparkles, Users, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Wrench,
    num: "01",
    title: "Done-for-you implementation",
    description: "Plain advice, in-person implementation plus zero jargon. Know what to use, why, and how.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Proven AI tools",
    description: "Trusted, easy tools with immediate impact. No experimental tech — only what works.",
  },
  {
    icon: Users,
    num: "03",
    title: "Simple training",
    description: "Your team learns to use AI confidently, without overwhelm or complex documentation.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-wide">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4 block w-fit">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading max-w-lg">
            How we help your business
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground max-w-sm leading-relaxed"
        >
          We focus on practical, immediate impact — not complex strategies that take months to see results.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="editorial-card group cursor-default"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-forest-light flex items-center justify-center group-hover:bg-forest group-hover:text-primary-foreground transition-all duration-500">
                <card.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-heading text-muted-foreground/50 font-medium">{card.num}</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
              {card.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-forest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Learn more <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
