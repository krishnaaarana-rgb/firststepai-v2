import { Linkedin, ArrowUpRight } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border">
    <div className="container-wide py-14 md:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div className="lg:col-span-2">
          <span className="font-heading font-bold text-lg text-foreground">
            First Step AI
          </span>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Hands-on AI setup and training for small businesses.
            No tech overwhelm — just results.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-[13px] uppercase tracking-widest text-muted-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "#home" },
              { label: "How We Help", href: "#services" },
              { label: "About Us", href: "#about" },
              { label: "Contact", href: "#cta" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading font-semibold text-[13px] uppercase tracking-widest text-muted-foreground mb-5">Connect</h4>
          <a
            href="https://linkedin.com"
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
