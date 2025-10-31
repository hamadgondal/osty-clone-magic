import Navigation from "@/components/Navigation";
import ClientCarousel from "@/components/ClientCarousel";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Services />
      <ClientCarousel />
      <PortfolioGrid />
      <Footer />
    </div>
  );
};

export default Index;
