import { Instagram, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Team meeting"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        <div className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● LET'S TALK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-light leading-tight mb-10">
            HAVE A PROJECT IN MIND?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 text-light/80">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Instagram className="w-5 h-5" />
              <span className="text-xl font-bold">𝕏</span>
              <span className="text-lg font-bold">Be</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </div>

            <span className="hidden sm:block text-light/30">|</span>

            <a href="mailto:info@dagency.com" className="hover:text-accent transition-colors">
              info@dagency.com
            </a>

            <span className="hidden sm:block text-light/30">|</span>

            <span>+(1) 123 456 7890</span>

            <span className="hidden sm:block text-light/30">|</span>

            <a href="#contact" className="flex items-center gap-1 hover:text-accent transition-colors">
              Contact <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
