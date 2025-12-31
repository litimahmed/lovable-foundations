import { ArrowRight, ArrowUp, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Contact Us", href: "#contact" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light pt-20 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-16 pb-16 border-b border-light/10">
          {/* Brand Column */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center rounded">
                <span className="text-accent-foreground font-display text-lg font-bold">D</span>
              </div>
              <span className="text-lg font-display text-light tracking-wide">AGENCY</span>
            </a>
            <p className="text-light/50 text-sm leading-relaxed mb-8 max-w-xs">
              Dagency architecture miss in the sapien sertiton miss bibenum the erat nesuen fermen.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <span className="text-lg font-bold group-hover:text-accent-foreground">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Instagram className="w-4 h-4 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <svg className="w-4 h-4 group-hover:text-accent-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm mb-8 tracking-[0.2em] uppercase">QUICK LINKS</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm mb-8 tracking-[0.2em] uppercase">SUBSCRIBE</h4>
            <p className="text-light/50 text-sm mb-6 leading-relaxed">
              Want to be notified about our services. Just sign up and we'll send you a notification by email.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-light/20 text-light placeholder:text-light/40 text-sm rounded-l-full rounded-r-none focus:border-accent h-12 px-6"
              />
              <button className="w-12 h-12 bg-accent rounded-r-full flex items-center justify-center hover:bg-accent/90 transition-colors">
                <ArrowRight className="w-4 h-4 text-accent-foreground -rotate-45" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex items-center justify-between">
          <p className="text-light/40 text-xs">
            © Copyright 2025 Dagency | All Rights Reserved.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-accent flex items-center justify-center hover:bg-accent transition-colors group"
          >
            <ArrowUp className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};
