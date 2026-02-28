import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding overflow-hidden">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Left - editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <span className="badge mb-6 block w-fit">About us</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading leading-[1.05] mb-6">
            We help everyday teams{" "}
            <span className="text-forest">start with AI</span>
          </h2>
          <div className="w-16 h-0.5 bg-forest rounded-full origin-left animate-line-grow" />
        </motion.div>

        {/* Right - body copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-[1.75]"
        >
          <p className="text-foreground text-lg font-medium leading-relaxed">
            Most AI companies focus on complex strategies and custom builds. We focus on something different.
          </p>
          <p>
            We help small business owners take their first step into AI in a simple, supportive way.
             We work with people who feel like they are falling behind. Business owners who keep hearing
             about AI tools but don't have time or confidence to figure it out alone.
          </p>
          <p>
            We're not here for advanced implementations or large-scale transformation. We help everyday
            teams install and use easy AI tools that save time, reduce admin, and make work easier.
          </p>
          <p className="font-medium text-foreground border-l-2 border-forest pl-5">
            No jargon. No pressure. No complicated tech. Just practical support so you can start using AI confidently.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
