import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const HeroSection = () => {
  const cards = [
    { image: hero1, color: "bg-card-blue", delay: 0 },
    { image: hero2, color: "bg-card-peach", delay: 0.1 },
    { image: hero3, color: "bg-card-purple", delay: 0.2 },
    { image: hero4, color: "bg-card-pink", delay: 0.3 },
    { image: hero5, color: "bg-card-yellow", delay: 0.4 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12 text-foreground"
        >
          A place to display your masterpiece
        </motion.h1>

        {/* Overlapping Cards */}
        <div className="flex items-center justify-center mb-12 h-[300px] md:h-[400px] relative">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                x: index === 0 ? -80 : index === 1 ? -40 : index === 3 ? 40 : index === 4 ? 80 : 0,
              }}
              whileHover={{ 
                y: -20, 
                scale: 1.05,
                zIndex: 50,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + card.delay,
                type: "spring",
                stiffness: 100
              }}
              className={`absolute w-[200px] h-[260px] md:w-[280px] md:h-[360px] rounded-3xl ${card.color} shadow-2xl overflow-hidden cursor-pointer`}
              style={{
                transformStyle: "preserve-3d",
                zIndex: index === 2 ? 30 : 20 - Math.abs(2 - index) * 5,
              }}
            >
              <img
                src={card.image}
                alt={`Hero image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="rounded-full px-8 text-base font-medium bg-primary hover:bg-primary/90">
            Contact Me
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-medium">
            Discover Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
