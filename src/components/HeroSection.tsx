import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingShape = ({
  className,
  style,
  mouseOffset,
  sensitivity = 0.02,
}: {
  className: string;
  style: React.CSSProperties;
  mouseOffset: { x: number; y: number };
  sensitivity?: number;
}) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      ...style,
      transform: `translate(${mouseOffset.x * sensitivity}px, ${mouseOffset.y * sensitivity}px)`,
      transition: "transform 0.4s cubic-bezier(0.25,0.1,0.25,1)",
    }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Floating shapes */}
      <FloatingShape
        className="w-72 h-72 md:w-96 md:h-96 bg-lavender/60 animate-float blur-3xl"
        style={{ top: "10%", right: "-5%", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
        mouseOffset={mouse}
        sensitivity={0.03}
      />
      <FloatingShape
        className="w-64 h-64 md:w-80 md:h-80 bg-peach/70 animate-float-slow blur-2xl"
        style={{ bottom: "10%", left: "-3%", borderRadius: "60% 40% 30% 70% / 50% 60% 40% 60%" }}
        mouseOffset={mouse}
        sensitivity={0.02}
      />
      <FloatingShape
        className="w-40 h-40 bg-mint/50 animate-float blur-2xl"
        style={{ top: "30%", left: "20%", borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
        mouseOffset={mouse}
        sensitivity={0.015}
      />
      <FloatingShape
        className="w-32 h-32 bg-coral/20 animate-float-slow blur-xl"
        style={{ top: "15%", right: "25%", borderRadius: "30% 70% 50% 50% / 50% 30% 70% 50%" }}
        mouseOffset={mouse}
        sensitivity={0.025}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-6"
          >
            AI made easy for{" "}
            <span className="gradient-text">your business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Hands-on set up and training for small businesses to make AI work
            for you – no tech overwhelm, just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-base md:text-lg shadow-glow hover:shadow-lift hover:scale-105 transition-all duration-300"
            >
              Book your free consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
