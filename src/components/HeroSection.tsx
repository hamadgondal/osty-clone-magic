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
    { image: hero1, color: "bg-card-blue", delay: 0, baseX: -400, baseY: 0, rotation: -8 },
    { image: hero2, color: "bg-card-peach", delay: 0.1, baseX: -200, baseY: 0, rotation: -4 },
    { image: hero3, color: "bg-card-purple", delay: 0.2, baseX: 0, baseY: 0, rotation: 0 },
    { image: hero4, color: "bg-card-pink", delay: 0.3, baseX: 200, baseY: 0, rotation: 4 },
    { image: hero5, color: "bg-card-yellow", delay: 0.4, baseX: 400, baseY: 0, rotation: 8 },
  ];

  const MagneticCard = ({ card, index }: { card: typeof cards[0]; index: number }) => {
    const cardX = useMotionValue(card.baseX);
    const cardY = useMotionValue(card.baseY);
    const cardRotate = useMotionValue(card.rotation);
    
    const springX = useSpring(cardX, { stiffness: 200, damping: 25 });
    const springY = useSpring(cardY, { stiffness: 200, damping: 25 });
    const springRotate = useSpring(cardRotate, { stiffness: 200, damping: 25 });

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
        
        const magneticRadius = 350;
        
        if (distance < magneticRadius) {
          const force = Math.pow((magneticRadius - distance) / magneticRadius, 2);
          const angle = Math.atan2(deltaY, deltaX);
          
          const pushX = -Math.cos(angle) * force * 200;
          const pushY = -Math.sin(angle) * force * 200;
          const rotationOffset = -pushX * 0.08;
          
          cardX.set(card.baseX + pushX);
          cardY.set(card.baseY + pushY);
          cardRotate.set(card.rotation + rotationOffset);
        } else {
          cardX.set(card.baseX);
          cardY.set(card.baseY);
          cardRotate.set(card.rotation);
        }
      };

      const handleMouseLeave = () => {
        cardX.set(card.baseX);
        cardY.set(card.baseY);
        cardRotate.set(card.rotation);
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
    }, [card.baseX, card.baseY, card.rotation, cardX, cardY, cardRotate]);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
        }}
        style={{
          x: springX,
          y: springY,
          rotate: springRotate,
          transformStyle: "preserve-3d",
          zIndex: index === 2 ? 30 : 20 - Math.abs(2 - index) * 3,
        }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3 + card.delay,
          type: "spring",
          stiffness: 120,
          damping: 15
        }}
        className={`absolute w-[200px] h-[260px] md:w-[280px] md:h-[360px] rounded-[32px] ${card.color} shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden cursor-pointer`}
      >
        <img
          src={card.image}
          alt={`Portfolio showcase ${index + 1}`}
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
          We Build Digital Experiences That Define Your Brand.
        </motion.h1>

        {/* Overlapping Cards with Magnetic Effect */}
        <div 
          ref={containerRef}
          className="flex items-center justify-center mb-16 h-[320px] md:h-[440px] relative px-4"
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
          You have a vision. We have the technical and creative expertise to digitize it. From Pixel to Platform, we build scalable web and mobile apps, forge powerful brand identities, and deliver graphic design that cuts through the noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="rounded-full px-8 text-base font-medium bg-primary hover:bg-primary/90">
            Contact us
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
