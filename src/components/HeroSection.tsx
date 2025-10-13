import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    { image: hero1, color: "bg-card-blue", delay: 0, baseX: -220, baseY: 0 },
    { image: hero2, color: "bg-card-peach", delay: 0.1, baseX: -110, baseY: 0 },
    { image: hero3, color: "bg-card-purple", delay: 0.2, baseX: 0, baseY: 0 },
    { image: hero4, color: "bg-card-pink", delay: 0.3, baseX: 110, baseY: 0 },
    { image: hero5, color: "bg-card-yellow", delay: 0.4, baseX: 220, baseY: 0 },
  ];

  const MagneticCard = ({ card, index }: { card: typeof cards[0]; index: number }) => {
    const cardX = useMotionValue(card.baseX);
    const cardY = useMotionValue(card.baseY);
    
    const springX = useSpring(cardX, { stiffness: 150, damping: 20 });
    const springY = useSpring(cardY, { stiffness: 150, damping: 20 });

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const cardCenterX = card.baseX;
        const cardCenterY = card.baseY;
        
        const deltaX = mouseX - cardCenterX;
        const deltaY = mouseY - cardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        const magneticRadius = 200;
        
        if (distance < magneticRadius) {
          const force = (magneticRadius - distance) / magneticRadius;
          const angle = Math.atan2(deltaY, deltaX);
          
          const pushX = -Math.cos(angle) * force * 120;
          const pushY = -Math.sin(angle) * force * 120;
          
          cardX.set(card.baseX + pushX);
          cardY.set(card.baseY + pushY);
        } else {
          cardX.set(card.baseX);
          cardY.set(card.baseY);
        }
      };

      const handleMouseLeave = () => {
        cardX.set(card.baseX);
        cardY.set(card.baseY);
      };

      const container = containerRef.current;
      if (container) {
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, [card.baseX, card.baseY, cardX, cardY]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 100, rotateY: -30 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateY: 0,
        }}
        style={{
          x: springX,
          y: springY,
          transformStyle: "preserve-3d",
          zIndex: index === 2 ? 30 : 20 - Math.abs(2 - index) * 5,
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5 + card.delay,
          type: "spring",
          stiffness: 100
        }}
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
          className="flex items-center justify-center mb-12 h-[300px] md:h-[400px] relative"
        >
          {cards.map((card, index) => (
            <MagneticCard key={index} card={card} index={index} />
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
