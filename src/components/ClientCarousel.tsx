import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

const ClientCarousel = () => {
  const clients = [
    {
      name: "HWI Dubai",
      logo: null,
      website: "http://www.healthworld-international.com/",
    },
    { name: "Indigo Oman", logo: null, website: "https://indigo-oman.com/" },
    { name: "MK1 UAE", logo: null, website: "https://www.instagram.com/mk1_uae/" },
    { name: "Al Mouj Muscat", logo: null, website: "https://www.almouj.com/en/" },
    { name: "Omantel", logo: null, website: "https://www.omantel.om/" },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            A Portfolio Defined by Quality, Not Scale
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've had the privilege to work with some of the most innovative companies
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-8 flex items-center justify-center h-full"
                >
                  <Link
                    to={client.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-full"
                  >
                    {client.logo ? (
                      // 1. RENDER IMAGE (if client.logo exists)
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-[80px] object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      // 2. RENDER NAME (if client.logo does NOT exist)
                      <div className="text-2xl md:text-lg font-bold text-foreground/40 hover:text-foreground transition-colors text-center">
                        {client.name}
                      </div>
                    )}
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientCarousel;
