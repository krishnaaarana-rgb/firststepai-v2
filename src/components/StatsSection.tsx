import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Small businesses transformed", icon: Users },
  { value: 12, suffix: "hrs", label: "Average time saved per week", icon: Clock },
  { value: 98, suffix: "%", label: "Client satisfaction rate", icon: TrendingUp },
  { value: 3, suffix: " days", label: "Average setup time", icon: Zap },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="outline-text text-[12rem] md:text-[18rem] font-heading font-bold opacity-40 whitespace-nowrap">
        RESULTS
      </span>
    </div>

    <div className="container-wide relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glow-card p-6 md:p-8 text-center group"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-500"
              style={{ background: 'rgba(0, 166, 166, 0.1)' }}
            >
              <stat.icon className="w-4 h-4 text-teal" />
            </div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
