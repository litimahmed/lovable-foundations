import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              ● SENIORS
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-6">
              OUR TEAM
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Agency quisque sodales miss in the variustion vestibulum drana miss in the turpis tellus elite sorttiton the in the fermen.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-xs tracking-[0.15em] uppercase font-medium gap-2">
              ALL TEAM
              <span className="text-lg">↗</span>
            </Button>
          </div>

          {/* Right Column - Team Members */}
          <div className={`lg:col-span-9 flex gap-6 justify-end ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            {teamMembers.map((member) => (
              <div key={member.id} className="flex gap-3 items-end">
                {/* Vertical Text */}
                <div className="flex flex-col items-center gap-2 pb-4">
                  <span 
                    className="text-xs tracking-[0.2em] text-foreground font-display uppercase whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
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
                
                {/* Image */}
                <div className="relative group">
                  <div className="w-52 h-72 rounded-t-full rounded-b-lg overflow-hidden bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Info Button */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                      <Info className="w-4 h-4 text-background" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
