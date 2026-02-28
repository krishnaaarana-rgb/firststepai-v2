import { motion } from "framer-motion";
import aboutIllustration from "@/assets/about-illustration.png";

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

        {/* Right - illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden p-8 flex items-center justify-center">
              <img
                src={aboutIllustration}
                alt="Business person working at their desk"
                className="w-[280px] h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
