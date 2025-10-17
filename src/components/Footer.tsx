import { motion } from "framer-motion";

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

      <div className="max-w-7xl mx-auto py-12 px-6 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">irozon.</h3>
            <p className="text-sm text-muted-foreground">
              A place to display your masterpiece and discover amazing artwork.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 irozon. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
