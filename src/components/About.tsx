import { Play, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <p className="section-subheader mb-4 md:mb-6">
              ● {t("about.subtitle")}
            </p>
            <h2 className="section-main-header text-[28px] md:text-[45px] mb-6 md:mb-8">
              <span className="text-accent">{t("about.titleHighlight")}</span> {t("about.titleRest")}
            </h2>
            <p className="section-paragraph mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              {t("about.description")}
            </p>
            <p className="text-base md:text-[20px] font-display uppercase mb-8 md:mb-10 tracking-[0.15em] md:tracking-[0.2em]" style={{ color: '#101010' }}>
              {t("about.tagline1")}<br />
              {t("about.tagline2")}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <button className="btn-primary uppercase">
                {t("about.button")}
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
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Creative team collaboration"
                className="w-full h-[300px] md:h-[450px] object-cover grayscale"
              />
            </div>

            {/* WATCH VIDEO positioned at the bottom */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                <Play className="w-4 h-4 md:w-5 md:h-5 text-light fill-current ml-0.5" />
              </div>
              <span className="text-light text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-display">
                {t("about.watchVideo")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
