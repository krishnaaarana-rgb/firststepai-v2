import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Discovery call", desc: "We learn about your business, pain points, and goals in a relaxed 30-minute chat. No jargon." },
  { num: "02", title: "Custom plan", desc: "We identify the 2-3 AI tools that will have the biggest immediate impact on your workflow." },
  { num: "03", title: "Implementation", desc: "We set everything up for you. Installed, configured, and integrated into your existing systems." },
  { num: "04", title: "Training & support", desc: "Your team gets hands-on training, plus ongoing support so no one feels left behind." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <span className="badge mb-4 block w-fit">Process</span>
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading max-w-md">
          How it works
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px -translate-x-3 z-0"
                style={{ background: 'rgba(27, 73, 101, 0.3)' }}
              />
            )}

            <div className="relative z-10 editorial-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-heading font-bold text-teal/20">{step.num}</span>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-steel/30 hidden md:block" />
                )}
              </div>
              <h3 className="text-lg font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
