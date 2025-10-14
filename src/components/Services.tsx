import { motion } from "framer-motion";
import { Palette, Camera, Layout, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Creating unique visual identities that capture the essence of your brand and resonate with your audience.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services that tell your story through stunning, high-quality imagery.",
    },
    {
      icon: Layout,
      title: "Web Design",
      description: "Modern, responsive websites designed to provide exceptional user experiences and drive results.",
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      description: "Strategic creative guidance to ensure your projects achieve their full artistic and commercial potential.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
