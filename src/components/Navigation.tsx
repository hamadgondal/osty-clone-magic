import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Index", href: "/" },
    { label: "News", href: "#news" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "/services" },
    { label: "Shop", href: "#shop" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight"
          >
            osty.
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              item.href.startsWith("#") ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ) : (
                <Link key={item.label} to={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <div className="hidden md:block w-10 h-10 bg-foreground rounded-full" />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {menuItems.map((item, index) => (
                  item.href.startsWith("#") ? (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ) : (
                    <Link key={item.label} to={item.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
