import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const teamMembers = [
    {
      id: 1,
      name: "ALEXANDRA STONE",
      positionKey: "team.positions.socialMedia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "MARCUS CHEN",
      positionKey: "team.positions.supportEngineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "OLIVIA PARKER",
      positionKey: "team.positions.developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
  ];

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
              ● {t("team.subtitle")}
            </p>
            <h2 className="section-main-header text-[28px] md:text-[45px] mb-4 md:mb-6">
              {t("team.title")}
            </h2>
            <p className="section-paragraph mb-6 md:mb-8">
              {t("team.description")}
            </p>
            <button className="btn-primary uppercase flex items-center gap-2 mx-auto lg:mx-0">
              {t("team.button")}
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
                      {t(member.positionKey)}
                    </span>
                  </div>
                  
                  {/* Image with rounded corners */}
                  <div className="relative group flex-1">
                    <div
                      className="relative w-full h-64 md:h-80 overflow-hidden bg-secondary rounded-2xl"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Info Button */}
                    <div 
                      className="absolute flex items-center justify-center cursor-pointer hover:bg-accent transition-colors"
                      style={{
                        bottom: '-10px',
                        right: '10px',
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
