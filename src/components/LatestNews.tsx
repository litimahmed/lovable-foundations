import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const newsItems = [
  {
    id: 1,
    title: "How to Push And Sell Stunning",
    subtitle: "Professional Work",
    category: "Design",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How to Create a Site And App",
    subtitle: "Development Tips",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Steps For Planning And Build",
    subtitle: "Project Guide",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&w=800&q=80",
  },
];

export const LatestNews = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="news" className="py-24 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            ● Our Blog
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            LATEST NEWS
          </h2>
        </div>

        {/* News Grid */}
        <div className={`grid md:grid-cols-3 gap-8 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {newsItems.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-display text-foreground leading-tight mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center gap-2 mt-12 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>
    </section>
  );
};
