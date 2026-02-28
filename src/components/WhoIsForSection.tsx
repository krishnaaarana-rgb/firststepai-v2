import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  { text: "You've been meaning to start with AI but keep putting it off", detail: "We meet you where you are. No judgment, just action." },
  { text: "You feel like everyone else has already figured it out", detail: "They haven't. You're earlier than you think." },
  { text: "You don't have time to learn complex tools alone", detail: "That's exactly why we do it with you, not for you to figure out." },
  { text: "You want hands-on help, not a DIY course", detail: "Real people, real setup, real training. Not another login to forget." },
];

const WhoIsForSection = () => (
  <section className="section-padding dark-section network-bg">
    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="badge-on-dark mb-6 block w-fit">Is this you?</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading leading-[1.05] mb-6 text-primary-foreground">
            Know that AI could significantly help your team, but don't know where to start?
          </h2>
          <p className="text-primary-foreground/50 leading-relaxed">
            If you're overwhelmed by tech jargon or don't know where to start, you're not alone. First Step AI removes the complexity with in-person setup and team training, giving you practical results from day one.
          </p>
        </motion.div>

        <div className="lg:col-span-6 lg:col-start-7">
          {/* Feature cards */}
          <div className="space-y-4">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="dark-card group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500"
                    style={{ background: "hsl(var(--sage) / 0.15)" }}
                  >
                    <Check size={13} className="text-sage" />
                  </div>
                  <div>
                    <p className="text-[15px] md:text-base font-heading font-medium leading-relaxed text-primary-foreground/90 mb-1">
                      {point.text}
                    </p>
                    <p className="text-sm text-primary-foreground/40 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsForSection;
