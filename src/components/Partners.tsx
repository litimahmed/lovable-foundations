import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "smart", logo: "smart" },
  { name: "WOCOMMERCE", logo: "WOCOMMERCE" },
  { name: "awwwards", logo: "awwwards" },
  { name: "envato", logo: "envato" },
  { name: "monday", logo: "monday" },
];

export const Partners = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-background border-y border-border">
      <div ref={ref} className="container-custom">
        <div className={`flex items-center justify-between gap-8 flex-wrap ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <span className="text-lg md:text-xl font-display text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default tracking-wide">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
