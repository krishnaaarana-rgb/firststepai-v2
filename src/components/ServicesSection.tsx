import { motion } from "framer-motion";
import { Wrench, Sparkles, Users, CheckCircle, Target, HandMetal } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: CheckCircle, title: "Plain-English guidance", desc: "No jargon, just what to use and how." },
  { icon: Target, title: "On-site setup", desc: "We come to you and configure everything." },
  { icon: HandMetal, title: "Hands-on training", desc: "Your team learns by doing." },
];

const cards = [
  { icon: Wrench, num: "01", title: "Done-for-you implementation", description: "Plain advice, in-person implementation plus zero jargon. Know what to use, why, and how." },
  { icon: Sparkles, num: "02", title: "Proven AI tools", description: "Trusted, easy tools with immediate impact. No experimental tech. Only what works." },
  { icon: Users, num: "03", title: "Simple training", description: "Your team learns to use AI confidently, without overwhelm or complex documentation." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-wide">
      <div className="mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4 block w-fit">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading whitespace-nowrap" style={{ wordBreak: "keep-all" }}>
            How we help your business
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground leading-relaxed mt-4 whitespace-nowrap"
        >
          We focus on practical, immediate impact. Not complex strategies that take months to see results.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-20">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="editorial-card group cursor-default"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500"
                style={{ background: 'rgba(0, 166, 166, 0.1)' }}
              >
                <card.icon className="w-5 h-5 text-teal" />
              </div>
              <span className="text-sm font-heading text-muted-foreground/50 font-medium">{card.num}</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div className="glow-card p-8 md:p-10">
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0, 166, 166, 0.1)' }}
                >
                  <feature.icon className="w-4 h-4 text-teal" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm mb-0.5">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-heading leading-[1.1] mb-5">
            Know that AI could significantly help your team, but don't know where to start?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you're overwhelmed by tech jargon or don't know where to start, you're not alone. First Step AI removes the complexity with in-person setup and team training, giving you practical results from day one.
          </p>
          <Link to="/contact" className="cta-button inline-flex">
            Book your free call
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
