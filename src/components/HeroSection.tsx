import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const line1 = "AI made simple,";
const line2 = "for your business.";

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.025,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-12 overflow-hidden dark-section network-bg">
      {/* Soft radial glows */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 30% 40%, hsl(var(--glow-forest) / 0.12), transparent),
            radial-gradient(ellipse 40% 40% at 70% 60%, hsl(var(--glow-terracotta) / 0.06), transparent)
          `,
        }}
      />

      {/* Glowing dots */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-3 h-3 rounded-full top-[30%] right-[20%]"
        style={{ background: "hsl(var(--sage))", boxShadow: "0 0 30px 10px hsl(var(--sage) / 0.2)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-2 h-2 rounded-full bottom-[25%] right-[35%]"
        style={{ background: "hsl(var(--glow-terracotta))", boxShadow: "0 0 20px 8px hsl(var(--glow-terracotta) / 0.15)" }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8"
          >
            <span className="badge-on-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse-glow inline-block" />
              AI Consulting · Australia & New Zealand
            </span>
          </motion.div>

          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-heading font-bold leading-[0.95] mb-8">
            <span className="block overflow-hidden">
              {line1.split("").map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-primary-foreground"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden mt-1">
              {line2.split("").map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={i + line1.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{
                    transformOrigin: "bottom",
                    color: "hsl(var(--sage))",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-lg mb-12"
          >
            <p className="text-primary-foreground/60 text-lg mb-1">
              From confusion to clarity, in hours.
            </p>
            <p className="text-primary-foreground/90 text-lg font-heading font-semibold">
              Fast setup. Easy training. Immediate impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="/contact" className="cta-button">
              Book your free call
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-sm tracking-tight transition-all duration-500 text-primary-foreground/80 hover:text-primary-foreground"
              style={{ border: "1.5px solid hsl(var(--sage) / 0.2)" }}
            >
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-0 right-8 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-widest text-primary-foreground/40 font-medium" style={{ writingMode: "vertical-lr" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
