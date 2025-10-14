import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientCarousel from "@/components/ClientCarousel";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ClientCarousel />
      <Services />
      <PortfolioGrid />
      <Footer />
    </div>
  );
};

export default Index;
