import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any technical knowledge?",
    a: "Not at all. We handle everything from setup to training. Our whole approach is designed for people who aren't tech-savvy.",
  },
  {
    q: "What kind of AI tools do you implement?",
    a: "We focus on proven, easy-to-use tools like AI writing assistants, automated scheduling, smart email management, and workflow automation. Nothing experimental.",
  },
  {
    q: "How long does setup typically take?",
    a: "Most implementations are completed within 2-3 business days, including team training. You'll see results immediately.",
  },
  {
    q: "What if my team struggles after you leave?",
    a: "We provide ongoing support after setup. Your team can reach out anytime with questions. We also create simple reference guides tailored to your setup.",
  },
  {
    q: "How much does it cost?",
    a: "We offer flexible packages based on your business size and needs. Book a free consultation and we'll give you a transparent quote with no hidden fees.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-border">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left group"
    >
      <span className="font-heading font-semibold text-[15px] md:text-base pr-8 group-hover:text-forest transition-colors">
        {q}
      </span>
      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-forest group-hover:bg-forest-light transition-all">
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-muted-foreground text-[15px] leading-relaxed max-w-2xl">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="badge mb-4 block w-fit">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Common questions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Can't find what you're looking for?{" "}
              <a href="#cta" className="text-forest font-medium underline underline-offset-2">
                Get in touch
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
