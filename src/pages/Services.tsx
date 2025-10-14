import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01.",
      title: "Photography",
      description: "We offer professional photography services for products, events, and corporate needs. Our photographers capture high-quality images that tell your story and highlight the unique aspects of your brand.",
      image: "/src/assets/project-1.jpg",
    },
    {
      number: "02.",
      title: "Brand Identity",
      description: "Creating unique visual identities that capture the essence of your brand and resonate with your audience. From logos to complete brand guidelines, we craft memorable experiences.",
      image: "/src/assets/project-2.jpg",
    },
    {
      number: "03.",
      title: "Web Design",
      description: "Modern, responsive websites designed to provide exceptional user experiences and drive results. We combine aesthetics with functionality to create digital experiences that convert.",
      image: "/src/assets/project-3.jpg",
    },
    {
      number: "04.",
      title: "Creative Direction",
      description: "Strategic creative guidance to ensure your projects achieve their full artistic and commercial potential. We help bring your vision to life with expert direction.",
      image: "/src/assets/project-4.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Capturing moments that tell a story, I create striking images that leave a lasting impression. From vivid portraits to cinematic landscapes, every shot is crafted with precision, emotion, and a unique artistic vision.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden group h-[500px] md:h-[600px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
                  <div className="text-white/60 text-lg md:text-xl font-light">
                    {service.number}
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="rounded-full group/btn"
                    >
                      View Work
                      <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
