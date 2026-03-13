import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import ashleighImg from "@/assets/ashleigh.png";

const FounderSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <span className="badge mb-4 block w-fit">Our Founder</span>
        <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-heading max-w-lg">
          The person behind{" "}
          <span className="text-teal">First Step AI</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src={ashleighImg}
                alt="Ashleigh du Plessis, Founder and Director of First Step AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
              style={{ border: "2px solid rgba(0, 166, 166, 0.15)" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 lg:col-start-6"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-1">
            Ashleigh du Plessis
          </h3>
          <p className="text-sm text-teal font-heading font-semibold mb-6">
            Founder & Director
          </p>

          <div className="space-y-4 text-muted-foreground leading-[1.75] mb-8">
            <p className="text-foreground text-lg font-medium leading-relaxed">
              Momentum maker. Team builder. Idea pusher.
            </p>
            <p>
              With nearly 14 years of professional experience spanning sales, digital transformation,
              and marketing leadership, Ashleigh brings a rare blend of strategic thinking and
              hands-on execution to everything she does.
            </p>
            <p>
              As the General Manager of Two Palms Media, one of Australia's fastest growing marketing
              agencies, she's led teams of 30+ across Brand Strategy, Social Media, Influencer Marketing,
              PR, and Content Production, supporting some of the largest global B2C brands including
              Netflix ANZ.
            </p>
            <p>
              Prior to that, Ashleigh held global marketing leadership roles at BRP (Sea-Doo, Ski-Doo)
              across APAC, EMEA, and North America, and spent 7 years at Olympus Australia & New Zealand
              in key account management and sales leadership.
            </p>
            <p className="font-medium text-foreground border-l-2 border-teal pl-5">
              Ashleigh founded First Step AI to bridge the gap between powerful AI tools and the small
              businesses that need them most, delivering practical, jargon-free support that gets real results.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/company/firststepai-anz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-300"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FounderSection;
