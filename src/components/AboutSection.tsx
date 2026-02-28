import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding overflow-hidden">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left - gradient headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="gradient-lavender-peach rounded-3xl p-10 md:p-14 lg:sticky lg:top-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-[1.15]">
              We help everyday teams start with AI
            </h2>
          </div>
        </motion.div>

        {/* Right - body copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Most AI companies focus on complex strategies and custom builds.
            First Step AI focuses on something different. We help small
            business owners take their first step into AI in a simple,
            supportive way.
          </p>
          <p>
            We work with people who feel like they are falling behind. Business
            owners who keep hearing about AI tools but don't have time or
            confidence to figure it out alone.
          </p>
          <p>
            We're not here for advanced implementations or large-scale
            transformation. We help everyday teams install and use easy AI
            tools that save time, reduce admin, and make work easier.
          </p>
          <p className="font-medium text-foreground">
            No jargon. No pressure. No complicated tech. Just practical
            support so you can start using AI confidently.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
