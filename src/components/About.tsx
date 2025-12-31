import { Play, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 bg-background">
      <div ref={ref} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-slide-right" : "opacity-0"}>
            <p className="section-subheader mb-6">
              ● ABOUT US
            </p>
            <h2 className="section-main-header mb-8">
              <span className="text-accent">ALWAYS PROVIDING</span> THE<br />
              BEST SERVICES
            </h2>
            <p className="section-paragraph mb-8 max-w-lg">
              Lorem ipsum amet volutan donec fermen lorem in the ipsum quisque sodales miss into the varius drana miss experience elementum sesuen miss elitisten drana in the miss elite rana duru in the fermen.
            </p>
            <p className="text-[20px] font-display uppercase mb-10 tracking-[0.2em]" style={{ color: '#101010' }}>
              WE ARE MORE THAN A<br />
              DIGITAL AGENCY.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="btn-primary uppercase">
                READ MORE
              </button>
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
            <div className="relative rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[450px] object-cover grayscale"
              />
              {/* Masked corner for WATCH VIDEO */}
              <div className="absolute bottom-0 left-0 bg-background" style={{ 
                width: '220px', 
                height: '80px',
                borderRadius: '0 20px 0 0'
              }}>
                <div className="flex items-center gap-4 h-full px-4">
                  <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
                    <Play className="w-5 h-5 text-light fill-current ml-0.5" />
                  </div>
                  <span className="text-foreground text-xs tracking-[0.2em] uppercase font-display">
                    WATCH VIDEO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};