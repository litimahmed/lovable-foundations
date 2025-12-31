import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "STRATEGY" },
  { name: "SOCIAL" },
  { name: "MEDIA" },
  { name: "DIGITAL" },
  { name: "PHOTOSHOP" },
  { name: "ILLUSTRATOR" },
  { name: "GRAPHIC" },
  { name: "DESIGN" },
  { name: "CREATIVE" },
];

export const Partners = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-6 bg-background border-y border-border overflow-hidden">
      <div ref={ref} className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="flex animate-carousel-scroll">
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0"
            >
              <span className="text-sm md:text-base font-display tracking-[0.2em] uppercase px-6" style={{ color: '#101010' }}>
                {partner.name}
              </span>
              <span className="text-accent text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};