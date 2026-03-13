import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const line1 = "AI made simple,";
const line2 = "for your business.";

const useCases = [
  { label: "Automate customer support", icon: "💬" },
  { label: "Generate reports in seconds", icon: "📊" },
  { label: "Streamline onboarding", icon: "🚀" },
  { label: "Summarise long documents", icon: "📄" },
  { label: "Build internal tools faster", icon: "⚡" },
  { label: "Predict trends & insights", icon: "🔮" },
];

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-gradient-hero aurora-bg noise-overlay">
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
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-glow inline-block" />
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
                    className="inline-block gradient-text"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="glow-card p-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">What AI can do for you</p>
                <div className="relative h-16 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center gap-4"
                    >
                      <span className="text-3xl">{useCases[currentIndex].icon}</span>
                      <span className="text-xl font-heading font-semibold text-foreground">{useCases[currentIndex].label}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex gap-1.5 mt-6">
                  {useCases.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-teal" : "w-1.5 bg-steel/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
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
