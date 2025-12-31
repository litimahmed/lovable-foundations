import { Globe, ShoppingCart, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "DIGITAL MARKETING",
    description: "Lorem ipsum dolor miss onso altin amen the in constran adipiscing entesue in the rana duru miss fermen.",
    icon: Globe,
  },
  {
    title: "E-COMMERCE",
    description: "Lorem ipsum dolor miss onso altin amen the in constran adipiscing entesue in the rana duru miss fermen.",
    icon: ShoppingCart,
  },
  {
    title: "BRANDING",
    description: "Lorem ipsum dolor miss onso altin amen the in constran adipiscing entesue in the rana duru miss fermen.",
    icon: Settings,
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Decorative Line Top */}
        <div className={`flex justify-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>

        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● WHAT WE DO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative bg-secondary/50 rounded-3xl p-8 pt-10 pb-20 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="text-base font-display text-foreground mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              {/* Icon at bottom right */}
              <div className="absolute bottom-6 right-6">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-background" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center gap-2 mt-12 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-foreground" />
        </div>

        {/* Decorative Line Bottom */}
        <div className={`flex justify-center mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>
      </div>
    </section>
  );
};
