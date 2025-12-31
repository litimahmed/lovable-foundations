import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tags = [
  "STRATEGY", "SOCIAL", "MEDIA", "DIGITAL", "PHOTOSHOP", 
  "ILLUSTRATOR", "GRAPHIC", "DESIGN", "CREATIVE"
];

export const VideoBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-dark/30" />
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-20 left-0 pointer-events-none">
        <span className="text-[15vw] font-display text-light/10 whitespace-nowrap tracking-wider">
          VIDEOS
        </span>
      </div>

      {/* Play Button - Center */}
      <div ref={ref} className="relative z-10 flex items-center justify-center min-h-[500px]">
        <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <button className="group relative w-36 h-36">
            {/* Rotating Text Circle */}
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="videoBannerCirclePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text className="text-[7px] fill-light uppercase tracking-[0.25em]">
                  <textPath href="#videoBannerCirclePath">
                    CREATIVE AGENCY • CREATIVE AGENCY • 
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

      {/* Scrolling Tags */}
      <div className={`relative z-10 py-6 border-t border-light/10 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tags, ...tags].map((tag, index) => (
              <span key={index} className="flex items-center">
                <span className="mx-6 text-sm tracking-[0.2em] text-light/80 uppercase font-medium">
                  {tag}
                </span>
                <span className="text-accent text-lg">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
