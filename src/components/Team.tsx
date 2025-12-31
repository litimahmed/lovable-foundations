import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";

const teamMembers = [
  {
    id: 1,
    name: "L. WHITE",
    position: "Social Media",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "H. MCCURY",
    position: "Support Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "T. COOPER",
    position: "Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "J. SMITH",
    position: "Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

export const Team = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  });

  return (
    <section id="team" className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Decorative Line */}
        <div className={`flex justify-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="w-px h-16 bg-accent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Title and Button */}
          <div className={`lg:col-span-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="section-subheader mb-4">
              ● SENIORS
            </p>
            <h2 className="section-main-header mb-6">
              OUR TEAM
            </h2>
            <p className="section-paragraph mb-8">
              Agency quisque sodales miss in the variustion vestibulum drana miss in the turpis tellus elite sorttiton the in the fermen.
            </p>
            <button className="btn-primary uppercase flex items-center gap-2">
              ALL TEAM
              <span className="text-lg">↗</span>
            </button>
          </div>

          {/* Right Column - Team Members Carousel */}
          <div className={`lg:col-span-9 overflow-hidden ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`} ref={emblaRef}>
            <div className="flex gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0 flex gap-3 items-end">
                  {/* Vertical Text */}
                  <div className="flex flex-col items-center gap-2 pb-4">
                    <span 
                      className="text-xs tracking-[0.2em] font-display uppercase whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: '#101010' }}
                    >
                      {member.name}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span 
                      className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {member.position}
                    </span>
                  </div>
                  
                  {/* Image with masked corner */}
                  <div className="relative group">
                    <div 
                      className="w-52 h-72 overflow-hidden bg-secondary"
                      style={{ borderRadius: '20px 20px 0 20px' }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Info Button - positioned at bottom right corner */}
                    <div 
                      className="absolute flex items-center justify-center cursor-pointer hover:bg-accent transition-colors"
                      style={{
                        bottom: 0,
                        right: 0,
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#101010',
                        borderRadius: '50%',
                        transform: 'translate(0, 0)'
                      }}
                    >
                      <span className="text-light font-display text-lg">i</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};