import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Lorem posuere in miss drana eliten in the nisan drana sceriun miss etiam ornare in the miss rana duru fermen.",
    name: "G. MARTIN",
    position: "Customer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote: "Lorem posuere in miss drana eliten in the nisan drana sceriun miss etiam ornare in the miss rana duru fermen.",
    name: "L. BROWN",
    position: "Customer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote: "Lorem posuere in miss drana eliten in the nisan drana sceriun miss etiam ornare in the miss rana duru fermen.",
    name: "L. WHITE",
    position: "Customer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    quote: "Lorem posuere in miss drana eliten in the nisan drana sceriun miss etiam ornare in the miss rana duru fermen.",
    name: "M. JONES",
    position: "Customer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4 md:mb-6">
            ● TESTIMONIALS
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px]">
            WHAT CLIENTS SAY
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className={`overflow-hidden ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`} ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-[calc(100%-40px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
              >
                {/* Card with clipped bottom-left corner */}
                <div
                  className="relative p-6 md:p-8 pt-6 md:pt-8 pb-24 md:pb-28 h-full"
                  style={{
                    backgroundColor: '#f0f0f3',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 60px 100%, 60px calc(100% - 15px), 50px calc(100% - 25px), 35px calc(100% - 35px), 15px calc(100% - 45px), 0 calc(100% - 50px))',
                    borderRadius: '20px 20px 20px 0'
                  }}
                >
                  {/* Quote Icon */}
                  <div className="mb-4 md:mb-6">
                    <span className="text-4xl md:text-6xl font-display text-accent leading-none">"</span>
                  </div>
                  <p className="section-paragraph text-sm md:text-[17px]">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Client info at the clipped corner */}
                <div 
                  className="relative -mt-[60px] flex items-center gap-3 px-0"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <h4 className="font-display text-xs md:text-sm tracking-wide" style={{ color: '#101010' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] md:text-xs" style={{ color: '#727272' }}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Pagination Dots */}
        <div className={`flex justify-center gap-2 md:gap-3 mt-8 md:mt-12 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          {scrollSnaps.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 ${
                selectedIndex === index 
                  ? 'w-8 h-2 bg-accent rounded-full' 
                  : 'w-2 h-2 bg-border hover:bg-muted-foreground rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Decorative Line */}
        <div className={`flex justify-center mt-10 md:mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-12 md:h-16 bg-accent" />
        </div>
      </div>
    </section>
  );
};