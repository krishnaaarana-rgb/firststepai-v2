import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Linkedin, Clock } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative aurora-bg noise-overlay">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge mb-6 block w-fit">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-heading leading-[1.05] mb-6">
              Let's start your{" "}
              <span className="text-teal">AI journey</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Book a free, no-pressure consultation and we'll show you exactly how AI can simplify your workday.
            </p>

            <div className="space-y-6">
              <a href="mailto:info@firststepai.com.au" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-teal group-hover:text-navy transition-all duration-500"
                  style={{ background: 'rgba(0, 166, 166, 0.1)' }}
                >
                  <Mail className="w-5 h-5 text-teal group-hover:text-navy" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-heading font-semibold text-foreground">info@firststepai.com.au</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/company/firststepai-anz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-teal group-hover:text-navy transition-all duration-500"
                  style={{ background: 'rgba(0, 166, 166, 0.1)' }}
                >
                  <Linkedin className="w-5 h-5 text-teal group-hover:text-navy" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Follow us</p>
                  <p className="font-heading font-semibold text-foreground">LinkedIn</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0, 166, 166, 0.1)' }}
                >
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-heading font-semibold text-foreground">Sydney, Australia</p>
                  <p className="text-xs text-muted-foreground">Supporting AU & NZ businesses</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0, 166, 166, 0.1)' }}
                >
                  <Clock className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response time</p>
                  <p className="font-heading font-semibold text-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glow-card p-8 md:p-10">
              <h2 className="text-xl font-heading font-bold mb-2">Book your free consultation</h2>
              <p className="text-sm text-muted-foreground mb-8">Fill in your details and we'll be in touch within 24 hours.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:info@firststepai.com.au?subject=Free Consultation Request";
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border bg-navy-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    style={{ borderColor: 'rgba(27, 73, 101, 0.3)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border bg-navy-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    style={{ borderColor: 'rgba(27, 73, 101, 0.3)' }}
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Business name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border bg-navy-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    style={{ borderColor: 'rgba(27, 73, 101, 0.3)' }}
                    placeholder="Your business"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">What do you need help with?</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border bg-navy-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-none"
                    style={{ borderColor: 'rgba(27, 73, 101, 0.3)' }}
                    placeholder="Tell us about your business and what you're looking to improve..."
                  />
                </div>
                <button type="submit" className="cta-button w-full justify-center">
                  Send enquiry
                  <ArrowUpRight size={15} />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Free consultation · No commitment · Response within 24hrs
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default ContactPage;
