import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "First Step AI made something that felt impossible feel completely doable. Within a week, our team was using AI tools daily.",
    name: "Sarah M.",
    role: "Café Owner, Sydney",
  },
  {
    quote: "I'd been putting off AI for months. They came in, set everything up, and trained my staff in an afternoon. Game changer.",
    name: "James T.",
    role: "Property Manager",
  },
  {
    quote: "No jargon, no pressure, just real help. They understood that we needed simple, not complicated.",
    name: "Priya K.",
    role: "Accounting Firm Director",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 text-center"
      >
        <span className="badge mb-4 inline-flex">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading mx-auto max-w-lg">
          What our clients say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="editorial-card flex flex-col"
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-terracotta text-terracotta" />
              ))}
            </div>
            <blockquote className="text-foreground leading-relaxed text-[15px] mb-8 flex-1">
              "{t.quote}"
            </blockquote>
            <div className="border-t border-border pt-5 mt-auto">
              <p className="font-heading font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
