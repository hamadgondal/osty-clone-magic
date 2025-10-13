import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cards = [
    { image: hero1, color: "bg-card-blue", delay: 0, baseX: -220 },
    { image: hero2, color: "bg-card-peach", delay: 0.1, baseX: -110 },
    { image: hero3, color: "bg-card-purple", delay: 0.2, baseX: 0 },
    { image: hero4, color: "bg-card-pink", delay: 0.3, baseX: 110 },
    { image: hero5, color: "bg-card-yellow", delay: 0.4, baseX: 220 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    mouseX.set(0);
    mouseY.set(0);
  };

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

        {/* Overlapping Cards with Magnetic Effect */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center mb-12 h-[300px] md:h-[400px] relative"
        >
          {cards.map((card, index) => {
            const CardWithMagnetic = () => {
              const cardX = useSpring(card.baseX, { stiffness: 150, damping: 15 });
              const cardY = useSpring(0, { stiffness: 150, damping: 15 });

              const calculateDistance = (x: number, y: number) => {
                return Math.sqrt(x * x + y * y);
              };

              useTransform([mouseX, mouseY], ([latestX, latestY]) => {
                const distance = calculateDistance(
                  (latestX as number) - card.baseX,
                  (latestY as number)
                );
                
                if (distance < 200) {
                  const force = (200 - distance) / 200;
                  const angle = Math.atan2(
                    (latestY as number),
                    (latestX as number) - card.baseX
                  );
                  
                  const pushX = -Math.cos(angle) * force * 80;
                  const pushY = -Math.sin(angle) * force * 80;
                  
                  cardX.set(card.baseX + pushX);
                  cardY.set(pushY);
                } else {
                  cardX.set(card.baseX);
                  cardY.set(0);
                }
              });

              return (
                <motion.div
                  initial={{ opacity: 0, y: 100, rotateY: -30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateY: 0,
                  }}
                  style={{
                    x: cardX,
                    y: cardY,
                    transformStyle: "preserve-3d",
                    zIndex: hoveredIndex === index ? 50 : index === 2 ? 30 : 20 - Math.abs(2 - index) * 5,
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + card.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`absolute w-[180px] h-[240px] md:w-[260px] md:h-[340px] rounded-3xl ${card.color} shadow-2xl overflow-hidden cursor-pointer`}
                >
                  <img
                    src={card.image}
                    alt={`Hero image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            };

            return <CardWithMagnetic key={index} />;
          })}
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
