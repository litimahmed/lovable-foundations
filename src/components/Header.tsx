import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const navItems = [
  { name: "HOME", href: "#", active: true },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "TEAM", href: "#team" },
  { name: "BLOG", href: "#news" },
  { name: "CONTACT", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded">
            <span className="text-accent-foreground font-display text-lg font-bold">D</span>
          </div>
          <span className="text-lg font-display text-light tracking-wide">AGENCY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 text-[11px] tracking-[0.15em] ${
                item.active 
                  ? "text-accent" 
                  : "text-light/70 hover:text-light"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Cart Icon */}
        <div className="hidden lg:flex items-center">
          <button className="text-light/70 hover:text-light transition-colors p-2">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-light p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-border/10 mt-4">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 text-sm tracking-[0.15em] py-2 ${
                  item.active 
                    ? "text-accent" 
                    : "text-light/70 hover:text-light"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
