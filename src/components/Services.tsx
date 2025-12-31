import { Globe, ShoppingCart, Settings, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
  {
    title: "WEB DESIGN",
    description: "Lorem ipsum dolor miss onso altin amen the in constran adipiscing entesue in the rana duru miss fermen.",
    icon: Globe,
  },
  {
    title: "SEO OPTIMIZATION",
    description: "Lorem ipsum dolor miss onso altin amen the in constran adipiscing entesue in the rana duru miss fermen.",
    icon: Settings,
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useState(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect();
    }
  });

  return (
    <section id="services" className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Decorative Line Top */}
        <div className={`flex justify-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>

        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-6">
            ● WHAT WE DO
          </p>
          <h2 className="section-main-header">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Carousel */}
        <div className={`overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} ref={emblaRef}>
          <div className="flex gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="relative rounded-[20px] p-8 pt-10 pb-24 h-full"
                  style={{ 
                    backgroundColor: '#f0f0f3',
                    borderRadius: '20px 20px 20px 0'
                  }}
                >
                  <h3 className="text-base font-display mb-4 tracking-wide" style={{ color: '#101010' }}>
                    {service.title}
                  </h3>
                  <p className="section-paragraph">
                    {service.description}
                  </p>
                  {/* Icon at bottom right with masked corner */}
                  <div 
                    className="absolute bottom-0 right-0 w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ 
                      backgroundColor: hoveredCard === index ? '#B6EF00' : '#101010',
                      transform: 'translate(0, 0)'
                    }}
                  >
                    {hoveredCard === index ? (
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    ) : (
                      <service.icon className="w-5 h-5 text-background" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Pagination Dots */}
        <div className={`flex justify-center gap-3 mt-12 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => scrollTo(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(selectedIndex / 3) === index 
                  ? 'bg-foreground scale-100' 
                  : 'bg-border hover:bg-muted-foreground scale-75'
              }`}
            />
          ))}
        </div>

        {/* Decorative Line Bottom */}
        <div className={`flex justify-center mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>
      </div>
    </section>
  );
};