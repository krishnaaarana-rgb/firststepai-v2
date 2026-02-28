import { motion } from "framer-motion";
import { Heart, Zap, Shield, Users } from "lucide-react";

const values = [
  { icon: Heart, label: "Human-first", desc: "Tech should serve people, not the other way around" },
  { icon: Zap, label: "Immediate impact", desc: "Results from day one, not months down the line" },
  { icon: Shield, label: "No jargon", desc: "Plain English, always" },
  { icon: Users, label: "Your team grows", desc: "We teach, not just implement" },
];

const AboutSection = () => (
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

        {/* Right - interactive values grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="grid grid-cols-2 gap-3">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-5 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-forest-light flex items-center justify-center mb-3 group-hover:bg-forest group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-foreground text-sm mb-1">{value.label}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
