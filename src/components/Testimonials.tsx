import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
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
  });
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
    <section className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-6">
            ● TESTIMONIALS
          </p>
          <h2 className="section-main-header">
            WHAT CLIENTS SAY
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className={`overflow-hidden ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`} ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
              >
                <div 
                  className="relative rounded-[20px] p-8 pb-20 h-full"
                  style={{ 
                    backgroundColor: '#f0f0f3',
                    borderRadius: '20px 20px 20px 0'
                  }}
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <span className="text-6xl font-display text-accent leading-none">"</span>
                  </div>
                  <p className="section-paragraph mb-8">
                    {testimonial.quote}
                  </p>
                  
                  {/* Client info at bottom center with masked corner */}
                  <div 
                    className="absolute bottom-0 left-0 flex items-center gap-3 bg-background px-4 py-3"
                    style={{ borderRadius: '0 20px 0 0' }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <h4 className="font-display text-sm tracking-wide" style={{ color: '#101010' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-xs" style={{ color: '#727272' }}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Pagination Dots */}
        <div className={`flex justify-center gap-3 mt-12 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          {scrollSnaps.slice(0, 2).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index 
                  ? 'bg-foreground scale-100' 
                  : 'bg-border hover:bg-muted-foreground scale-75'
              }`}
            />
          ))}
        </div>

        {/* Decorative Line */}
        <div className={`flex justify-center mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>
      </div>
    </section>
  );
};