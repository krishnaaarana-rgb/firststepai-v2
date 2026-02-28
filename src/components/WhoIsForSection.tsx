import { motion } from "framer-motion";

const points = [
  {
    text: "You've been meaning to start with AI but keep putting it off",
    bg: "bg-lavender/40",
  },
  {
    text: "You feel like everyone else has already figured it out",
    bg: "bg-peach/50",
  },
  {
    text: "You don't have time to learn complex tools alone",
    bg: "bg-mint/50",
  },
  {
    text: "You want hands-on help, not a DIY course",
    bg: "bg-lavender/30",
  },
];

const WhoIsForSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading mb-16 max-w-lg"
      >
        Who this is for
      </motion.h2>

      <div className="space-y-4 md:space-y-6 max-w-3xl">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${point.bg} rounded-2xl px-8 py-6 md:px-10 md:py-8 ${
              i % 2 !== 0 ? "md:ml-auto md:mr-0" : ""
            }`}
            style={{ maxWidth: "85%" }}
          >
            <p className="text-lg md:text-xl font-medium text-foreground">
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoIsForSection;
