import { Linkedin } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-peach/60 relative">
    {/* Gradient border top */}
    <div className="h-px w-full gradient-lavender-peach" style={{
      background: "linear-gradient(90deg, hsl(250 100% 94%), hsl(11 100% 76%))"
    }} />

    <div className="container-wide py-12 md:py-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <span className="font-heading font-bold text-xl text-foreground">
            First Step AI
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            AI made easy for small businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">How We Help</a></li>
            <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#cta" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-foreground">Connect</h4>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© 2026 First Step AI. All rights reserved.</span>
        <a href="#" className="hover:text-foreground transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
