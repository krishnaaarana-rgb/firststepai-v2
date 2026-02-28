import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const line1 = "AI made simple";
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
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-1/3 left-0 right-0 h-px origin-left"
        style={{ background: "hsl(var(--forest) / 0.08)" }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8"
          >
            <span className="badge">AI Consulting · Sydney</span>
          </motion.div>

          {/* Headline with letter animation */}
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-heading font-bold leading-[0.95] mb-8 perspective-[600px]">
            <span className="block overflow-hidden">
              {line1.split("").map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
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
                    color: char !== " " && i > 3 ? "hsl(var(--forest))" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed"
          >
            Hands-on setup and training for small businesses. No tech overwhelm, just results that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#cta" className="cta-button">
              Book your free consultation
              <ArrowUpRight size={16} />
            </a>
            <a href="#services" className="cta-button-outline">
              See how we help
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-0 right-8 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium" style={{ writingMode: "vertical-lr" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
