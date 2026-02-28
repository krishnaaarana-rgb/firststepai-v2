import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding overflow-hidden aurora-bg noise-overlay">
    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <span className="badge mb-6 block w-fit">About us</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading leading-[1.05] mb-6">
            We've been in{" "}
            <span className="text-forest">your shoes</span>
          </h2>
          <div className="w-16 h-0.5 bg-forest rounded-full origin-left animate-line-grow" />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-[1.75]"
        >
          <p className="text-foreground text-lg md:text-xl font-heading font-medium leading-relaxed italic">
            At First Step AI, we exist because learning AI shouldn't be a solo journey.
          </p>
          <p>
            As the former GM of a small to medium sized agency, I know how tough it is to
            evaluate tools, set them up, and train a team to actually use them. I had to
            make the time to learn AI on my own and realised most small business
            owners simply don't have that luxury.
          </p>
          <p>
            That's why I started First Step AI: to give everyday businesses the ability to
            take their first step into AI, without needing to learn everything themselves.
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
