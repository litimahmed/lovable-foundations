import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "BRANDING DESIGN",
    category: "Design",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "CREATIVE DESIGN",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "WEB DEVELOPMENT",
    category: "Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "DIGITAL MARKETING",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  },
];

export const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + portfolioItems.length) % portfolioItems.length;
      items.push({ ...portfolioItems[index], position: i });
    }
    return items;
  };

  return (
    <section id="portfolio" className="py-28 bg-background overflow-hidden">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            OUR WORKS
          </h2>
        </div>
      </div>

      {/* Full-width Carousel */}
      <div className={`relative ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
        <div className="flex items-center justify-center gap-6 px-4">
          {getVisibleItems().map((item) => (
            <div
              key={`${item.id}-${item.position}`}
              className={`relative flex-shrink-0 transition-all duration-500 ${
                item.position === 0 
                  ? "w-[60%] max-w-[900px] z-10" 
                  : "w-[25%] max-w-[350px] opacity-60"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.position === 0 ? "h-[500px]" : "h-[400px]"
                  } ${item.position !== 0 ? "grayscale" : ""}`}
                />
                {item.position === 0 && (
                  <>
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block bg-accent text-accent-foreground text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-3">
                        ● {item.category}
                      </span>
                      <h3 className="text-light text-2xl font-display tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-background -rotate-45" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[15%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors z-20"
        >
          <ArrowLeft className="w-5 h-5 text-accent-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[15%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors z-20"
        >
          <ArrowRight className="w-5 h-5 text-accent-foreground" />
        </button>
      </div>
    </section>
  );
};
