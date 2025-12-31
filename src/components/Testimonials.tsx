import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            WHAT CLIENTS SAY
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-3 gap-6 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-secondary/50 rounded-3xl p-8"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <span className="text-6xl font-display text-accent leading-none">"</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-display text-sm text-foreground tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center gap-2 mt-12 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="w-2 h-2 rounded-full bg-border" />
        </div>

        {/* Decorative Line */}
        <div className={`flex justify-center mt-16 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>
      </div>
    </section>
  );
};
