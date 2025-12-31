import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern office workspace"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="pt-20">
            <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-8">
                ● DISCOVER DAGENCY
              </p>
            </div>
            
            <h1 
              className={`text-5xl md:text-6xl lg:text-[80px] font-display text-light leading-[1.05] mb-10 ${
                isVisible ? "animate-fade-up delay-100" : "opacity-0"
              }`}
            >
              DIGITAL MEDIA<br />
              AGENCY
            </h1>
            
            <div className={`${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
              <Button 
                variant="outline" 
                className="border-accent/50 text-light hover:bg-accent hover:text-accent-foreground hover:border-accent rounded-full px-10 py-6 text-xs tracking-[0.15em] uppercase transition-all duration-300"
              >
                EXPLORE MORE
              </Button>
            </div>
          </div>

          {/* Right Content - Rotating Play Button */}
          <div 
            className={`flex justify-center lg:justify-end items-center ${
              isVisible ? "animate-fade-up delay-300" : "opacity-0"
            }`}
          >
            <button className="group relative w-32 h-32">
              {/* Rotating Text Circle */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[8px] fill-light/70 uppercase tracking-[0.3em]">
                    <textPath href="#circlePath">
                      DAGENCY • DIGITAL MEDIA AGENCY • 
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Play className="w-6 h-6 text-accent group-hover:text-accent-foreground fill-current ml-1 transition-colors" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
