import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  { text: "You've been meaning to start with AI but keep putting it off", detail: "We meet you where you are. No judgment, just action." },
  { text: "You feel like everyone else has already figured it out", detail: "They haven't. You're earlier than you think." },
  { text: "You don't have time to learn complex tools alone", detail: "That's exactly why we do it with you, not for you to figure out." },
  { text: "You want hands-on help, not a DIY course", detail: "Real people, real setup, real training. Not another login to forget." },
];

const WhoIsForSection = () => (
  <section className="section-padding relative overflow-hidden aurora-bg">
    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="badge mb-6 block w-fit">Is this you?</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading leading-[1.05] mb-6">
            This is for you if…
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We built First Step AI for the businesses that keep hearing about AI but haven't found the right way in yet.
          </p>
        </motion.div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group editorial-card px-6 py-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal group-hover:text-navy transition-all duration-500"
                  style={{ background: 'rgba(0, 166, 166, 0.1)' }}
                >
                  <Check size={13} className="text-teal group-hover:text-navy" />
                </div>
                <div>
                  <p className="text-[15px] md:text-base font-medium leading-relaxed text-foreground mb-1">{point.text}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                    {point.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsForSection;
