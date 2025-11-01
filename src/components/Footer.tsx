import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Dribbble, Twitter } from "lucide-react";

const Footer = () => {
  const marqueeText = "MOBILE APPS • WEB ENGINEERING • BRAND IDENTITY • UI/UX DESIGN • BUILD TO SCALE • CODE & COLOR FUSION";
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border"
    >
      <div className="max-w-7xl mx-auto py-20 px-6 bg-[hsl(var(--header-footer))]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Large Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              LET'S MAKE<br />
              IT HAPPEN.
            </h2>
          </div>
          
          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Social Media</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/irozon" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/irozonllc/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/irozon" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Dribbble className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Contact</h4>
            <a href="mailto:contact@irozon.com" className="text-foreground hover:text-primary transition-colors">
              contact@irozon.com
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>©2025 irozon. All Rights Reserved.</p>
          <p>Where Code & Color Fuse</p>
        </div>
      </div>
      {/* Moving text marquee */}
      <div className="overflow-hidden bg-primary py-6">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-primary-foreground text-2xl md:text-4xl font-bold mx-8">
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
