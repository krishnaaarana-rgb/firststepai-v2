import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, DollarSign, Users, Star, Mic, BriefcaseBusiness, BarChart3, Settings } from "lucide-react";
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
      { icon: DollarSign, metric: "~$3K–$5K", label: "Approx. build cost (AUD)" },
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
      { icon: DollarSign, metric: "~$2K–$4K", label: "Approx. build cost (AUD)" },
    ],
    quote: "Tax season used to destroy us. This year, my team actually left on time. That's never happened before.",
    quoteName: "David L., Director", timeline: "2 weeks build · half day training",
  },
  {
    id: 3, badge: "Sales & Outreach", client: "VQS", location: "Melbourne, VIC",
    challenge: "A B2B sales team manually qualifying inbound leads via phone, spending 45+ minutes per prospect on research, and losing deals because follow-ups fell through the cracks. No structured pipeline beyond a shared spreadsheet.",
    solution: "Deployed an AI voice agent that qualifies leads in under 3 minutes, auto-enriches prospect data from Apollo and LinkedIn, books meetings directly into calendars, and sends personalised follow-up sequences — all without human intervention.",
    tools: ["Voice AI Agent", "Lead Enrichment", "Auto Follow-up"],
    results: [
      { icon: Mic, metric: "3 min", label: "Lead-to-booking pipeline" },
      { icon: TrendingUp, metric: "3x", label: "Conversion rate increase" },
      { icon: DollarSign, metric: "~$4K–$7K", label: "Approx. build cost (AUD)" },
    ],
    quote: "The voice agent qualifies leads faster than my best rep. We went from chasing prospects to having a full calendar within the first week.",
    quoteName: "Mark T., Sales Director", timeline: "3 weeks build · Ongoing support",
  },
  {
    id: 4, badge: "Recruitment & HR", client: "THP", location: "Brisbane, QLD",
    challenge: "An agency receiving 200+ applications per role, with recruiters spending 6+ hours per listing manually screening resumes, watching intro videos, and coordinating interview schedules. Top candidates were slipping through due to slow response times.",
    solution: "Built an AI hiring pipeline that auto-screens resumes against job criteria, evaluates candidate video introductions using AI analysis, scores and ranks applicants, and assigns interviewers via intelligent round-robin — all triggered automatically on application.",
    tools: ["AI Resume Screening", "Video Analysis", "Smart Scheduling"],
    results: [
      { icon: Clock, metric: "90%", label: "Reduction in screening time" },
      { icon: BriefcaseBusiness, metric: "24 hrs", label: "Time to first interview" },
      { icon: DollarSign, metric: "~$3K–$6K", label: "Approx. build cost (AUD)" },
    ],
    quote: "We used to take a week to shortlist. Now the AI does it overnight, and the quality of candidates reaching interview stage has actually improved.",
    quoteName: "Sarah K., Head of Talent", timeline: "3 weeks build · 1 day training",
  },
  {
    id: 5, badge: "Marketing & Content", client: "AMS", location: "Perth, WA",
    challenge: "A growing agency producing ad copy, blog posts, product photography, and social content for 12+ clients. The creative team was stretched thin, missing deadlines, and outsourcing was eating into margins.",
    solution: "Implemented a multi-agent AI marketing system that generates ad copy, creates product visuals, writes long-form blog content, and produces short-form video — all calibrated to each client's brand voice and style guidelines.",
    tools: ["AI Copywriter", "Visual Generator", "Video Automation"],
    results: [
      { icon: BarChart3, metric: "10x", label: "Content output increase" },
      { icon: Clock, metric: "15 hrs/week", label: "Creative time saved" },
      { icon: DollarSign, metric: "~$5K–$8K", label: "Approx. build cost (AUD)" },
    ],
    quote: "We went from producing 20 pieces of content a week to over 200. The AI handles the volume, and my team focuses on strategy and client relationships.",
    quoteName: "Nina P., Agency Director", timeline: "4 weeks build · Ongoing support",
  },
  {
    id: 6, badge: "Operations & CRM", client: "GCP", location: "Gold Coast, QLD",
    challenge: "A service business running client acquisition, onboarding, and retention across disconnected tools — spreadsheets for leads, email for onboarding, and no nurture system. Clients were churning because nothing was automated post-sale.",
    solution: "Built a complete GoHighLevel pipeline system covering lead capture, automated onboarding sequences, milestone-based check-ins, and long-term nurture campaigns — all connected to Stripe for billing and Notion for internal visibility.",
    tools: ["GHL Pipeline", "Auto-Onboarding", "Retention Engine"],
    results: [
      { icon: TrendingUp, metric: "3x", label: "Client conversion rate" },
      { icon: Settings, metric: "80%", label: "Less manual follow-up" },
      { icon: DollarSign, metric: "~$3K–$5K", label: "Approx. build cost (AUD)" },
    ],
    quote: "Before this, clients would sign up and then hear nothing for weeks. Now the whole journey is automated — and our retention has never been better.",
    quoteName: "Daniel R., Founder", timeline: "3 weeks build · Ongoing support",
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

            <p className="text-[11px] text-muted-foreground/60 italic mb-10">
              * All costs are approximate and vary based on project complexity, integrations, and scope. Figures shown in AUD.
            </p>

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
