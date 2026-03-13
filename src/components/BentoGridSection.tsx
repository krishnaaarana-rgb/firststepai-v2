import { motion } from "framer-motion";
import { Cpu, Shield, Zap, HeartHandshake, BarChart3, Headphones } from "lucide-react";

const features = [
  { icon: Cpu, title: "AI-first approach", desc: "Every recommendation is grounded in practical AI that works today. Not theoretical promises.", span: "md:col-span-2 md:row-span-1", highlight: true },
  { icon: Shield, title: "Zero risk", desc: "Free consultation. No lock-in contracts. Cancel anytime.", span: "md:col-span-1" },
  { icon: Zap, title: "Fast results", desc: "Most clients see measurable impact within the first week of implementation.", span: "md:col-span-1" },
  { icon: HeartHandshake, title: "Human-first", desc: "We never forget there are real people behind every business. Empathy drives every interaction.", span: "md:col-span-1" },
  { icon: BarChart3, title: "Measurable ROI", desc: "We track time saved, costs reduced, and revenue gained so you always know the value.", span: "md:col-span-1", highlight: true },
  { icon: Headphones, title: "Ongoing support", desc: "We don't disappear after setup. Your team gets continued access to help whenever needed.", span: "md:col-span-1" },
];

const BentoGridSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 text-center"
      >
        <span className="badge mb-4 inline-flex">Why First Step AI</span>
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading mx-auto max-w-xl">
          Built different,{" "}
          <span className="text-teal">on purpose</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
        {features.slice(0, 2).map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={`glow-card p-7 md:p-8 group ${feature.span}`}
            style={feature.highlight ? { background: 'linear-gradient(135deg, #1B4965, #00A6A6)' } : undefined}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
              feature.highlight ? "bg-white/15" : ""
            }`}
              style={!feature.highlight ? { background: 'rgba(0, 166, 166, 0.1)' } : undefined}
            >
              <feature.icon className={`w-5 h-5 ${feature.highlight ? 'text-white' : 'text-teal'}`} />
            </div>
            <h3 className={`text-lg font-heading font-bold mb-2 ${feature.highlight ? "text-navy" : "text-foreground"}`}>
              {feature.title}
            </h3>
            <p className={`text-sm leading-relaxed ${feature.highlight ? "text-navy/70" : "text-muted-foreground"}`}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
        {features.slice(2, 5).map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 2) * 0.07 }}
            className="glow-card p-7 md:p-8 group"
            style={feature.highlight ? { background: 'linear-gradient(135deg, #1B4965, #00A6A6)' } : undefined}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
              feature.highlight ? "bg-white/15" : ""
            }`}
              style={!feature.highlight ? { background: 'rgba(0, 166, 166, 0.1)' } : undefined}
            >
              <feature.icon className={`w-5 h-5 ${feature.highlight ? 'text-white' : 'text-teal'}`} />
            </div>
            <h3 className={`text-lg font-heading font-bold mb-2 ${feature.highlight ? "text-navy" : "text-foreground"}`}>
              {feature.title}
            </h3>
            <p className={`text-sm leading-relaxed ${feature.highlight ? "text-navy/70" : "text-muted-foreground"}`}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {features.slice(5).map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 5) * 0.07 }}
            className="glow-card p-7 md:p-8 group md:col-span-3"
            style={{ background: 'linear-gradient(135deg, rgba(27, 73, 101, 0.15), rgba(0, 166, 166, 0.08))' }}
          >
            <div className="md:flex md:items-center md:gap-8">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 md:mb-0 transition-all duration-500"
                style={{ background: 'rgba(0, 166, 166, 0.1)' }}
              >
                <feature.icon className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">{feature.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BentoGridSection;
