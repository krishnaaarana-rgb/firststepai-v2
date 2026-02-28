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
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-primary noise-overlay">
      {/* Network pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(30deg, hsl(var(--sage)) 1px, transparent 1px), linear-gradient(150deg, hsl(var(--sage)) 1px, transparent 1px)`,
        backgroundSize: "200px 200px, 250px 250px",
      }} />

      {/* Constellation dots */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(1.5px 1.5px at 10% 20%, hsl(var(--sage) / 0.3), transparent),
          radial-gradient(1px 1px at 25% 60%, hsl(var(--sage) / 0.2), transparent),
          radial-gradient(1.5px 1.5px at 40% 15%, hsl(var(--sage) / 0.25), transparent),
          radial-gradient(1px 1px at 55% 75%, hsl(var(--sage) / 0.15), transparent),
          radial-gradient(1.5px 1.5px at 70% 35%, hsl(var(--sage) / 0.2), transparent),
          radial-gradient(1px 1px at 85% 55%, hsl(var(--sage) / 0.25), transparent),
          radial-gradient(1px 1px at 60% 45%, hsl(var(--sage) / 0.15), transparent),
          radial-gradient(1.5px 1.5px at 80% 80%, hsl(var(--sage) / 0.2), transparent)
        `,
      }} />

      {/* Soft radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 50% 50% at 30% 40%, hsl(var(--glow-forest) / 0.12), transparent),
          radial-gradient(ellipse 40% 40% at 70% 60%, hsl(var(--glow-terracotta) / 0.06), transparent)
        `,
      }} />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ background: "hsl(var(--primary-foreground) / 0.08)", color: "hsl(var(--primary-foreground) / 0.75)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse-glow inline-block" />
                AI Consulting · Australia & New Zealand
              </span>
            </motion.div>

            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-heading font-bold leading-[0.95] mb-8">
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
                    className="inline-block text-sage"
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
                style={{ border: "1.5px solid hsl(var(--primary-foreground) / 0.2)" }}
              >
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
              className="w-[380px] h-auto drop-shadow-2xl"
            />
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
