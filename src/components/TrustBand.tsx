import { motion } from "framer-motion";

const items = [
  "Sydney-based",
  "Hands-on support",
  "No jargon",
  "Real results",
  "Sydney-based",
  "Hands-on support",
  "No jargon",
  "Real results",
];

const TrustBand = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="py-8 md:py-10"
  >
    <div className="container-wide">
      <div className="bg-peach rounded-2xl shadow-soft overflow-hidden py-5">
        <div className="flex animate-scroll-x whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-sm md:text-base font-medium text-foreground/80"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default TrustBand;
