import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Home, Briefcase, Mail, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight"
          >
            irozon.
          </motion.div>

          {/* Desktop Menu - Always visible */}
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

          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => setOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    navigate(item.href);
                    setOpen(false);
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </motion.nav>
  );
};

export default Navigation;
