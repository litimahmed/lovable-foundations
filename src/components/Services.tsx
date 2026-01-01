import { Globe, ShoppingCart, Settings, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      titleKey: "services.items.digitalMarketing.title",
      descKey: "services.items.digitalMarketing.description",
      icon: Globe,
    },
    {
      titleKey: "services.items.ecommerce.title",
      descKey: "services.items.ecommerce.description",
      icon: ShoppingCart,
    },
    {
      titleKey: "services.items.branding.title",
      descKey: "services.items.branding.description",
      icon: Settings,
    },
    {
      titleKey: "services.items.webDesign.title",
      descKey: "services.items.webDesign.description",
      icon: Globe,
    },
    {
      titleKey: "services.items.seo.title",
      descKey: "services.items.seo.description",
      icon: Settings,
    },
  ];

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
            ● {t("services.subtitle")}
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px]">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Carousel */}
        <div className={`overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.titleKey}
                className="flex-shrink-0 overflow-visible w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div
                  className="relative p-6 md:p-8 pt-8 md:pt-10 pb-20 md:pb-24 h-full rounded-2xl"
                  style={{ backgroundColor: '#f0f0f3' }}
                >
                  <h3 className="text-sm md:text-base font-display mb-3 md:mb-4 tracking-wide" style={{ color: '#101010' }}>
                    {t(service.titleKey)}
                  </h3>
                  <p className="section-paragraph text-sm md:text-[17px]">
                    {t(service.descKey)}
                  </p>
                </div>

                {/* Icon positioned at the bottom right */}
                <div
                  className="relative -mt-[50px] ml-auto mr-4 w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
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
