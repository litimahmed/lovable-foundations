import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
];

export const Team = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  return (
    <section id="team" className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Decorative Line */}
        <div className={`flex justify-center mb-10 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="w-px h-12 md:h-16 bg-accent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Title and Button */}
          <div className={`lg:col-span-3 text-center lg:text-left ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="section-subheader mb-4">
              ● SENIORS
            </p>
            <h2 className="section-main-header text-[28px] md:text-[45px] mb-4 md:mb-6">
              OUR TEAM
            </h2>
            <p className="section-paragraph mb-6 md:mb-8">
              Agency quisque sodales miss in the variustion vestibulum drana miss in the turpis tellus elite sorttiton the in the fermen.
            </p>
            <button className="btn-primary uppercase flex items-center gap-2 mx-auto lg:mx-0">
              ALL TEAM
              <span className="text-lg">↗</span>
            </button>
          </div>

          {/* Right Column - Team Members */}
          <div className={`lg:col-span-9 overflow-hidden ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`} ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0 flex gap-2 md:gap-3 items-end w-[calc(100%-40px)] sm:w-[280px] lg:w-[calc(33.333%-16px)]">
                  {/* Vertical Text */}
                  <div className="flex flex-col items-center gap-2 pb-4">
                    <span 
                      className="text-[10px] md:text-xs tracking-[0.2em] font-display uppercase whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: '#101010' }}
                    >
                      {member.name}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span 
                      className="text-[8px] md:text-[10px] tracking-[0.15em] text-muted-foreground uppercase whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {member.position}
                    </span>
                  </div>
                  
                  {/* Image with proper masked corner */}
                  <div className="relative group flex-1">
                    {/* Image container with clipped corner */}
                    <div
                      className="relative w-full h-64 md:h-80 overflow-hidden bg-secondary"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 35px), 100% calc(100% - 30px), 95% calc(100% - 25px), 85% calc(100% - 15px), 70% calc(100% - 8px), 40px 100%, 0 100%)',
                        borderRadius: '20px 20px 0 20px'
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Info Button - positioned at the clipped corner */}
                    <div 
                      className="absolute flex items-center justify-center cursor-pointer hover:bg-accent transition-colors"
                      style={{
                        bottom: 0,
                        right: 0,
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#101010',
                        borderRadius: '50%',
                      }}
                    >
                      <span className="text-light font-display text-base">i</span>
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