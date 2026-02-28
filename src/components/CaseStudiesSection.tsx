import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, DollarSign, Users, Star } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    badge: "Hospitality",
    client: "Darling Harbour Café Group",
    location: "Sydney, NSW",
    challenge: "Managing 3 café locations with paper-based inventory, manual staff scheduling, and zero digital marketing. Losing 15+ hours/week on admin tasks the owner could automate.",
    solution: "Implemented AI-powered inventory forecasting, automated roster scheduling with demand prediction, and set up an AI content assistant for social media across all 3 locations.",
    tools: ["AI Inventory Forecaster", "Smart Scheduling", "Content AI"],
    results: [
      { icon: Clock, metric: "18 hrs/week", label: "Time saved on admin" },
      { icon: DollarSign, metric: "$2,400/mo", label: "Reduced food waste" },
      { icon: TrendingUp, metric: "3x", label: "Social media output" },
    ],
    quote: "I went from drowning in spreadsheets to actually having time to be in the café with my team. It felt like hiring 2 extra staff.",
    quoteName: "Maria S., Owner",
    timeline: "3 days setup · 1 day training",
    color: "forest" as const,
  },
  {
    id: 2,
    badge: "Professional Services",
    client: "Northshore Accounting",
    location: "Chatswood, NSW",
    challenge: "A 6-person accounting firm spending 20+ hours weekly on email replies, document sorting, and client onboarding. Staff frustrated with repetitive tasks during tax season.",
    solution: "Deployed AI email triage and auto-drafting, intelligent document categorization, and an AI-powered client onboarding flow that pre-fills forms from uploaded documents.",
    tools: ["Email AI Assistant", "Document Classifier", "Smart Onboarding"],
    results: [
      { icon: Clock, metric: "22 hrs/week", label: "Team time reclaimed" },
      { icon: Users, metric: "40%", label: "Faster client onboarding" },
      { icon: Star, metric: "98%", label: "Staff satisfaction" },
    ],
    quote: "Tax season used to destroy us. This year, my team actually left on time. That's never happened before.",
    quoteName: "David L., Director",
    timeline: "2 days setup · half day training",
    color: "terracotta" as const,
  },
  {
    id: 3,
    badge: "Trades & Services",
    client: "BrightSpark Electrical",
    location: "Parramatta, NSW",
    challenge: "Solo electrician with 2 apprentices, juggling quote requests via text, handwritten invoices, and no system for follow-ups. Losing jobs because quotes took too long.",
    solution: "Set up AI-assisted quote generation from photos, automated invoice creation, and a smart follow-up system that chases unpaid invoices and re-engages past clients.",
    tools: ["Quote AI", "Auto-Invoicing", "Client Follow-up Bot"],
    results: [
      { icon: DollarSign, metric: "35%", label: "More quotes won" },
      { icon: Clock, metric: "10 hrs/week", label: "Admin time eliminated" },
      { icon: TrendingUp, metric: "28%", label: "Revenue increase" },
    ],
    quote: "I'm an electrician, not an office worker. Now my phone does the admin and I do what I'm good at.",
    quoteName: "Jake R., Owner",
    timeline: "1 day setup · 2 hour training",
    color: "forest" as const,
  },
];

const CaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  const study = caseStudies[activeStudy];

  return (
    <section id="cases" className="section-padding relative aurora-bg noise-overlay">
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="badge mb-4 block w-fit">Case Studies</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-heading max-w-xl">
              Real businesses,{" "}
              <span className="text-forest">real transformations</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              See how we've helped businesses just like yours take their first step into AI — and the results that followed.
            </p>
          </div>
        </motion.div>

        {/* Case study selector tabs */}
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
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cs.client}
            </button>
          ))}
        </motion.div>

        {/* Active case study */}
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glow-card"
        >
          <div className="p-6 md:p-10 lg:p-12">
            {/* Top bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="badge">{study.badge}</span>
              <span className="text-xs text-muted-foreground">📍 {study.location}</span>
              <span className="text-xs text-muted-foreground ml-auto">⏱ {study.timeline}</span>
            </div>

            {/* Client name */}
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">{study.client}</h3>

            {/* Challenge / Solution grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground">The Challenge</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{study.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-forest" />
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground">Our Solution</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{study.solution}</p>
              </div>
            </div>

            {/* Tools used */}
            <div className="flex flex-wrap gap-2 mb-10">
              {study.tools.map((tool) => (
                <span key={tool} className="metric-pill text-xs">{tool}</span>
              ))}
            </div>

            {/* Results metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {study.results.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="relative rounded-xl p-5 text-center overflow-hidden"
                  style={{ background: "hsl(var(--forest-light))" }}
                >
                  <result.icon className="w-5 h-5 text-forest mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                    {result.metric}
                  </div>
                  <p className="text-xs text-muted-foreground">{result.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-forest pl-6 py-2">
              <blockquote className="text-foreground text-lg md:text-xl font-medium leading-relaxed italic mb-3">
                "{study.quote}"
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">{study.quoteName}</cite>
            </div>
          </div>
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a href="#cta" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-forest hover:gap-3 transition-all duration-300">
            Want results like these? Let's talk
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
