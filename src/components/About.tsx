import { Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-slide-right" : "opacity-0"}>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
              ● ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-display text-foreground leading-[1.15] mb-8">
              <span className="text-accent italic">ALWAYS PROVIDING</span> THE<br />
              BEST SERVICES
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg">
              Lorem ipsum amet volutan donec fermen lorem in the ipsum quisque sodales miss into the varius drana miss experience elementum sesuen miss elitisten drana in the miss elite rana duru in the fermen.
            </p>
            <p className="text-foreground text-xs tracking-[0.2em] uppercase mb-10 font-medium">
              WE ARE MORE THAN A<br />
              DIGITAL AGENCY.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-xs tracking-[0.15em] uppercase font-medium">
                READ MORE
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <Phone className="w-4 h-4 text-background" />
                </div>
                <span className="text-foreground text-sm font-medium tracking-wide">+1 234 567 8910</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image with WATCH VIDEO overlay */}
          <div className={`relative ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[450px] object-cover grayscale"
              />
              {/* WATCH VIDEO Overlay */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-foreground/90 backdrop-blur-sm px-6 py-4 rounded-full">
                <div className="w-10 h-10 rounded-full border-2 border-light/30 flex items-center justify-center">
                  <Play className="w-4 h-4 text-light fill-current ml-0.5" />
                </div>
                <span className="text-light text-xs tracking-[0.2em] uppercase font-medium">
                  WATCH VIDEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
