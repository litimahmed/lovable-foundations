import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Team } from "@/components/Team";
import { VideoBanner } from "@/components/VideoBanner";
import { Testimonials } from "@/components/Testimonials";
import { LatestNews } from "@/components/LatestNews";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <VideoBanner />
      <Testimonials />
      <LatestNews />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
