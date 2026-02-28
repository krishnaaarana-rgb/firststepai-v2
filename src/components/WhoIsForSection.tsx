import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "You've been meaning to start with AI but keep putting it off",
  "You feel like everyone else has already figured it out",
  "You don't have time to learn complex tools alone",
  "You want hands-on help, not a DIY course",
];

const WhoIsForSection = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-primary-foreground/10 text-primary-foreground/80 mb-6">
            Is this you?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading leading-[1.05]">
            This is for you if…
          </h2>
        </motion.div>

        <div className="space-y-5">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-start gap-4 bg-primary-foreground/[0.06] rounded-xl px-6 py-5 backdrop-blur-sm"
            >
              <div className="w-6 h-6 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={13} className="text-primary-foreground" />
              </div>
              <p className="text-[15px] md:text-base leading-relaxed text-primary-foreground/90">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsForSection;
