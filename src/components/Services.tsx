import { motion } from "framer-motion";
import { Palette, Camera, Layout, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Mobile App Development",
      description:
        "Building high-performance, native (iOS & Android) and cross-platform applications. We ensure speed, stability, and a flawless user experience on every device.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Camera,
      title: "Web & App Development",
      description:
        "Engineering scalable web applications and custom CMS-driven websites. We deliver robust, secure, and future-proof digital platforms designed for growth.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: Layout,
      title: "Brand Identity & Strategy",
      description:
        "Designing complete brand systems—from logo creation and voice development to comprehensive style guides that ensure a unified, memorable presence.",
      gradient: "from-orange-500/10 to-yellow-500/10",
      iconBg: "bg-gradient-to-br from-orange-500 to-yellow-500",
    },
    {
      icon: Sparkles,
      title: "UI/UX & Graphic Design",
      description:
        "Creating intuitive User Interfaces (UI) and compelling User Experiences (UX). This includes all necessary graphic assets, marketing materials, and digital visuals.",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive creative solutions tailored to bring your vision to life with cutting-edge
            technology and innovative design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl transition-opacity opacity-0 group-hover:opacity-100`}
                />
                <div className="relative p-8 lg:p-10 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="flex flex-col h-full">
                    {/* <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div> */}
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg flex-grow">
                      {service.description}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-6"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
