import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface SpringAnimation {
  element: HTMLElement;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  velocityX: number;
  velocityY: number;
  stiffness: number;
  damping: number;
  mass: number;
  isAnimating: boolean;
}

const HeroSection: React.FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const springsRef = useRef<SpringAnimation[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!imagesRef.current) return;

    const floatingImages = imagesRef.current.querySelectorAll<HTMLElement>(".floating-image");

    // Initialize spring animations
    springsRef.current = Array.from(floatingImages).map((element) => ({
      element,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      velocityX: 0,
      velocityY: 0,
      stiffness: 0.05,
      damping: 0.75,
      mass: 1,
      isAnimating: false,
    }));

    const updateSpring = (spring: SpringAnimation) => {
      const forceX = (spring.targetX - spring.x) * spring.stiffness;
      const forceY = (spring.targetY - spring.y) * spring.stiffness;

      spring.velocityX += forceX / spring.mass;
      spring.velocityY += forceY / spring.mass;
      spring.velocityX *= spring.damping;
      spring.velocityY *= spring.damping;

      spring.x += spring.velocityX;
      spring.y += spring.velocityY;

      // Get the initial rotation from the element's data attribute
      const rotation = spring.element.getAttribute("data-rotation") || "0";
      spring.element.style.transform = `translate(${spring.x}px, ${spring.y}px) rotate(${rotation}deg)`;

      const isMoving =
        Math.abs(spring.velocityX) > 0.01 ||
        Math.abs(spring.velocityY) > 0.01 ||
        Math.abs(spring.targetX - spring.x) > 0.1 ||
        Math.abs(spring.targetY - spring.y) > 0.1;

      if (isMoving) {
        requestAnimationFrame(() => updateSpring(spring));
      } else {
        spring.isAnimating = false;
      }
    };

    const setTarget = (spring: SpringAnimation, x: number, y: number) => {
      spring.targetX = x;
      spring.targetY = y;

      if (!spring.isAnimating) {
        spring.isAnimating = true;
        updateSpring(spring);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      floatingImages.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        const imgCenterX = rect.left + rect.width / 2;
        const imgCenterY = rect.top + rect.height / 2;

        const deltaX = imgCenterX - mouseX;
        const deltaY = imgCenterY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 300;

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * 50;
          const angle = Math.atan2(deltaY, deltaX);
          const moveX = Math.cos(angle) * strength;
          const moveY = Math.sin(angle) * strength;

          setTarget(springsRef.current[index], moveX, moveY);
        } else {
          setTarget(springsRef.current[index], 0, 0);
        }
      });
    };

    const handleMouseLeave = () => {
      springsRef.current.forEach((spring) => {
        setTarget(spring, 0, 0);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const images = [
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Person-with-VR-Headset-m_f.png",
      alt: "Person with VR Headset",
      rotation: -8,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Minimalist-Stone-Composition-m_f.png",
      alt: "Minimalist Stone Composition",
      rotation: 5,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Whimsical-Character-in-a-Jar-m_f.png",
      alt: "Whimsical Character in a Jar",
      rotation: -3,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/02/Three-Scoops-of-Ice-Cream-on-Spoons.webp",
      alt: "Three Scoops of Ice Cream",
      rotation: 6,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Green-Character-in-Yellow-Hoodie-m_f.png",
      alt: "Green Character in Yellow Hoodie",
      rotation: -5,
    },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Digital Experiences That Define Your Brand</h1>
      </div>

      <div className="floating-images" ref={imagesRef}>
        {images.map((image, index) => (
          <div key={index} className="floating-image" data-rotation={image.rotation}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="hero-content mt-8">
        <p className="hero-description">
          You have a vision. We have the technical and creative expertise to digitize it. From Pixel
          to Platform, we build scalable web and mobile apps, forge powerful brand identities, and
          deliver graphic design that cuts through the noise. Ready to make your vision a digital
          reality?
        </p>
        <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            key="lets-talk-button"
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className={`px-8 py-3 rounded-xl text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-foreground hover:text-background`}
          >
            Lets Talk
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
