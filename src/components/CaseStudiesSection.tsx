import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, DollarSign, Users, Star, ShoppingBag } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1, badge: "Mortgage Broking", client: "BVHL", location: "Sydney, NSW",
    challenge: "Processing discovery calls manually, re-keying client data into Mercury CRM, chasing documents via email, and categorising bank statement expenses by hand. Brokers spending 3+ hours per client on admin before even starting the loan application.",
    solution: "Built a full client management portal with AI-powered transcript extraction, automated document processing (ID, payslips, bank statements), intelligent expense categorisation, and one-click push to Mercury CRM with complete contact, employment, and identification data.",
    tools: ["AI Transcript Extraction", "Smart Doc Processing", "Mercury CRM Sync"],
    results: [
      { icon: Clock, metric: "3+ hrs/client", label: "Time saved on data entry" },
      { icon: TrendingUp, metric: "85%", label: "Fields auto-filled from one call" },
      { icon: DollarSign, metric: "$3K–$5K", label: "Total project cost (AUD)" },
    ],
    quote: "What used to take me half a day per client now happens in minutes. The AI pulls everything from the call, the docs get processed automatically, and I just review and push to Mercury. It's completely changed how I onboard clients.",
    quoteName: "James S., BVHL", timeline: "4 weeks build · Ongoing support",
  },
  {
    id: 2, badge: "Professional Services", client: "NSA", location: "Chatswood, NSW",
    challenge: "A 6-person accounting firm spending 20+ hours weekly on email replies, document sorting, and client onboarding. Staff frustrated with repetitive tasks during tax season.",
    solution: "Deployed AI email triage and auto-drafting, intelligent document categorization, and an AI-powered client onboarding flow that pre-fills forms from uploaded documents.",
    tools: ["Email AI Assistant", "Document Classifier", "Smart Onboarding"],
    results: [
      { icon: Clock, metric: "22 hrs/week", label: "Team time reclaimed" },
      { icon: Users, metric: "40%", label: "Faster client onboarding" },
      { icon: Star, metric: "98%", label: "Staff satisfaction" },
    ],
    quote: "Tax season used to destroy us. This year, my team actually left on time. That's never happened before.",
    quoteName: "David L., Director", timeline: "2 days setup · half day training",
  },
  {
    id: 3, badge: "Trades & Services", client: "BSE", location: "Parramatta, NSW",
    challenge: "Solo electrician with 2 apprentices, juggling quote requests via text, handwritten invoices, and no system for follow-ups. Losing jobs because quotes took too long.",
    solution: "Set up AI-assisted quote generation from photos, automated invoice creation, and a smart follow-up system that chases unpaid invoices and re-engages past clients.",
    tools: ["Quote AI", "Auto-Invoicing", "Client Follow-up Bot"],
    results: [
      { icon: DollarSign, metric: "35%", label: "More quotes won" },
      { icon: Clock, metric: "10 hrs/week", label: "Admin time eliminated" },
      { icon: TrendingUp, metric: "28%", label: "Revenue increase" },
    ],
    quote: "I'm an electrician, not an office worker. Now my phone does the admin and I do what I'm good at.",
    quoteName: "Jake R., Owner", timeline: "1 day setup · 2 hour training",
  },
  {
    id: 4, badge: "Retail", client: "BSC", location: "Bondi, NSW",
    challenge: "A surf shop with an online store struggling to manage customer enquiries, product descriptions, and social media content. The owner was spending evenings writing product copy and replying to DMs.",
    solution: "Implemented an AI chatbot for customer FAQs, AI-generated product descriptions from photos, and automated social media scheduling with AI-written captions tailored to their brand voice.",
    tools: ["AI Chatbot", "Product Copy AI", "Social Scheduler"],
    results: [
      { icon: ShoppingBag, metric: "45%", label: "Faster product listings" },
      { icon: Clock, metric: "12 hrs/week", label: "Time saved on content" },
      { icon: TrendingUp, metric: "22%", label: "Online sales increase" },
    ],
    quote: "I used to dread writing product descriptions. Now I snap a photo and the AI nails it every time. My evenings are mine again.",
    quoteName: "Tom W., Owner", timeline: "2 days setup · 1 day training",
  },
  {
    id: 5, badge: "Health & Wellness", client: "ZPC", location: "Auckland, NZ",
    challenge: "A physiotherapy clinic with 4 practitioners drowning in appointment admin, patient follow-up emails, and treatment note documentation. Practitioners were staying late every day to finish notes.",
    solution: "Set up AI-powered voice-to-text treatment notes, automated appointment reminders and follow-ups, and an AI assistant that drafts patient exercise plans from consultation summaries.",
    tools: ["Voice-to-Notes AI", "Smart Reminders", "Exercise Plan Generator"],
    results: [
      { icon: Clock, metric: "15 hrs/week", label: "Admin time saved" },
      { icon: Users, metric: "30%", label: "Fewer no-shows" },
      { icon: Star, metric: "4.9★", label: "Google review average" },
    ],
    quote: "My practitioners actually finish on time now. The voice-to-notes tool alone was worth it. It captures everything we need in seconds.",
    quoteName: "Dr. Lena M., Director", timeline: "2 days setup · half day training",
  },
];

const CaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  const study = caseStudies[activeStudy];

  return (
    <section id="cases" className="section-padding relative aurora-bg noise-overlay">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="badge mb-4 block w-fit">Case Studies</span>
          <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading" style={{ wordBreak: "keep-all" }}>
            Real businesses,{" "}
            <span className="text-teal">real transformations</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4 whitespace-nowrap">
            See how we've helped businesses across Australia & New Zealand take their first step into AI, and the results that followed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none"
        >
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveStudy(i)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
                activeStudy === i
                  ? "bg-teal text-navy"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={activeStudy !== i ? { background: 'rgba(27, 73, 101, 0.2)' } : undefined}
            >
              {cs.badge}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glow-card"
        >
          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="badge">{study.badge}</span>
              <span className="text-xs text-muted-foreground">📍 {study.location}</span>
              <span className="text-xs text-muted-foreground ml-auto">⏱ {study.timeline}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">{study.client}</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground">The Challenge</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{study.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground">Our Solution</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{study.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {study.tools.map((tool) => (
                <span key={tool} className="metric-pill text-xs">{tool}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {study.results.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="relative rounded-xl p-5 text-center overflow-hidden"
                  style={{ background: 'rgba(0, 166, 166, 0.08)' }}
                >
                  <result.icon className="w-5 h-5 text-teal mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                    {result.metric}
                  </div>
                  <p className="text-xs text-muted-foreground">{result.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-l-2 border-teal pl-6 py-2">
              <blockquote className="text-foreground text-lg md:text-xl font-medium leading-relaxed italic mb-3">
                "{study.quote}"
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">{study.quoteName}</cite>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-300">
            Want results like these? Let's talk
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
