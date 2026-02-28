import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

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
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-background aurora-bg noise-overlay">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-8"
            >
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse-glow inline-block" />
                AI Consulting · Australia & New Zealand
              </span>
            </motion.div>

            <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] font-heading font-bold leading-[0.95] mb-8" style={{ wordBreak: "keep-all", overflowWrap: "normal" }}>
              <span className="block overflow-hidden">
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-foreground"
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
                    className="inline-block text-forest"
                    style={{ transformOrigin: "bottom" }}
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
              <p className="text-muted-foreground text-lg mb-1">
                From confusion to clarity, in hours.
              </p>
              <p className="text-foreground text-lg font-heading font-semibold">
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
              <a href="/services" className="cta-button-outline">
                See how it works
              </a>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={heroIllustration}
              alt="Person celebrating AI success"
              className="w-[420px] h-auto rounded-2xl"
              style={{ mixBlendMode: "multiply" }}
            />
          </motion.div>
        </div>

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
