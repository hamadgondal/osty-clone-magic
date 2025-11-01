import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Briefcase, Mail, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Portfolio", href: "/projects", icon: Briefcase },
    { label: "Services", href: "/services", icon: Settings },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        height: isScrolled ? "60px" : "80px"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--header-footer))]/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight"
          >
            irozon.
          </motion.div>

          {/* Desktop/Tablet Menu */}
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

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navigation;
