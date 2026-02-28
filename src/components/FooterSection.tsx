import { Linkedin, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const FooterSection = () => (
  <footer className="border-t border-border">
    <div className="container-wide py-14 md:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block mb-3">
            <img src={logoImg} alt="First Step AI" className="h-10 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Hands-on AI setup and training for small businesses across Australia & New Zealand.
            No tech overwhelm. Just results.
          </p>
          <a
            href="mailto:info@firststepai.com.au"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
          >
            <Mail size={14} />
            info@firststepai.com.au
          </a>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-[13px] uppercase tracking-widest text-muted-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "How We Help", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading font-semibold text-[13px] uppercase tracking-widest text-muted-foreground mb-5">Connect</h4>
          <a
            href="https://www.linkedin.com/company/firststepai-anz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Linkedin size={16} />
            LinkedIn
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-muted-foreground">© 2026 First Step AI. All rights reserved.</span>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
