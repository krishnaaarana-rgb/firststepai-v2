import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const beliefs = [
  { label: "AI should be accessible to everyone", icon: "🤝" },
  { label: "No jargon, ever", icon: "💬" },
  { label: "Results from day one", icon: "⚡" },
  { label: "Your team learns, not just watches", icon: "🎓" },
  { label: "Tech should serve people", icon: "❤️" },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beliefs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-padding overflow-hidden aurora-bg noise-overlay">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="badge mb-2 block w-fit">About us</span>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading leading-[1.05]">
              We've been in{" "}
              <span className="text-forest">your shoes.</span>
            </h2>
            <p className="text-foreground text-lg md:text-xl font-heading font-medium leading-relaxed italic">
              At First Step AI, we exist because learning AI shouldn't be a solo journey.
            </p>
            <p className="text-muted-foreground leading-[1.75]">
              As the former GM of a small to medium sized agency, I know how tough it is to
              evaluate tools, set them up, and train a team to actually use them. I had to
              make the time to learn AI on my own and realised most small business
              owners simply don't have that luxury.
            </p>
            <p className="text-muted-foreground leading-[1.75]">
              That's why I started First Step AI: to give everyday businesses the ability to
              take their first step into AI, without needing to learn everything themselves.
            </p>
          </motion.div>

          {/* Right - interactive rotating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm">
              <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 shadow-lg">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">What we believe</p>
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
                      <span className="text-3xl">{beliefs[currentIndex].icon}</span>
                      <span className="text-xl font-heading font-semibold text-foreground">{beliefs[currentIndex].label}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex gap-1.5 mt-6">
                  {beliefs.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-forest" : "w-1.5 bg-border"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
