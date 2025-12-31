import { Globe, ShoppingCart, Settings, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Decorative Line Top */}
        <div className={`flex justify-center mb-10 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="w-px h-12 md:h-16 bg-accent" />
        </div>

        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4 md:mb-6">
            ● WHAT WE DO
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px]">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Carousel */}
        <div className={`overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {services.map((service, index) => (
                <div
                    key={service.title}
                    className="flex-shrink-0 overflow-visible w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                {/* Card with clipped corner */}
                <div
                  className="relative p-6 md:p-8 pt-8 md:pt-10 pb-20 md:pb-24 h-full"
                  style={{
                    backgroundColor: '#f0f0f3',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), 100% calc(100% - 35px), 95% calc(100% - 30px), 85% calc(100% - 20px), 70% calc(100% - 10px), 50px 100%, 0 100%)',
                    borderRadius: '20px 20px 0 20px'
                  }}
                >
                  <h3 className="text-sm md:text-base font-display mb-3 md:mb-4 tracking-wide" style={{ color: '#101010' }}>
                    {service.title}
                  </h3>
                  <p className="section-paragraph text-sm md:text-[17px]">
                    {service.description}
                  </p>
                </div>

                {/* Icon positioned at the clipped corner */}
                <div
                  className="relative -mt-[50px] ml-auto w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  style={{
                    backgroundColor: hoveredCard === index ? '#B6EF00' : '#101010',
                  }}
                >
                  {hoveredCard === index ? (
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  ) : (
                    <service.icon className="w-5 h-5 text-background" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Pagination Dots */}
        <div className={`flex justify-center gap-3 mt-8 md:mt-12 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
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
        <div className={`flex justify-center mt-10 md:mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-12 md:h-16 bg-accent" />
        </div>
      </div>
    </section>
  );
};