import { Play, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <p className="section-subheader mb-4 md:mb-6">
              ● ABOUT US
            </p>
            <h2 className="section-main-header text-[28px] md:text-[45px] mb-6 md:mb-8">
              <span className="text-accent">ALWAYS PROVIDING</span> THE<br className="hidden md:block" />
              BEST SERVICES
            </h2>
            <p className="section-paragraph mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum amet volutan donec fermen lorem in the ipsum quisque sodales miss into the varius drana miss experience elementum sesuen miss elitisten drana in the miss elite rana duru in the fermen.
            </p>
            <p className="text-base md:text-[20px] font-display uppercase mb-8 md:mb-10 tracking-[0.15em] md:tracking-[0.2em]" style={{ color: '#101010' }}>
              WE ARE MORE THAN A<br />
              DIGITAL AGENCY.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <button className="btn-primary uppercase">
                READ MORE
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground flex items-center justify-center">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-background" />
                </div>
                <span className="text-foreground text-xs md:text-sm font-medium tracking-wide">+1 234 567 8910</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image with WATCH VIDEO overlay */}
          <div className={`relative ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            {/* Image with clipped bottom-left corner */}
            <div
              className="relative overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 150px 100%, 150px calc(100% - 20px), 140px calc(100% - 30px), 120px calc(100% - 40px), 80px calc(100% - 50px), 0 calc(100% - 60px))',
                borderRadius: '20px 20px 20px 0'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[300px] md:h-[450px] object-cover grayscale"
              />
            </div>

            {/* WATCH VIDEO positioned at the clipped corner */}
            <div
              className="absolute bottom-0 left-0 flex items-center gap-3 md:gap-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                <Play className="w-4 h-4 md:w-5 md:h-5 text-light fill-current ml-0.5" />
              </div>
              <span className="text-foreground text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-display">
                WATCH VIDEO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};