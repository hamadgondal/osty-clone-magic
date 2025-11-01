import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Categories");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All Categories", "Creative", "Design", "Photo", "Style"];

  const projects = [
    {
      id: 1,
      title: "The Dark Side",
      category: "Creative",
      image: project1,
      images: [project1, project2, project3],
      client: "Dark Studios",
      year: "2024",
      description:
        "A bold creative campaign that explores the darker side of modern design aesthetics. This project combines cutting-edge visual storytelling with immersive user experiences.",
      technologies: ["React", "Three.js", "GSAP", "WebGL"],
    },
    {
      id: 2,
      title: "Justice Robot",
      category: "Design",
      image: project2,
      images: [project2, project4, project5],
      client: "Tech Innovations Inc",
      year: "2024",
      description:
        "An innovative design system that brings robotics and justice together through powerful visual metaphors and interactive elements.",
      technologies: ["Figma", "React", "Framer Motion", "TypeScript"],
    },
    {
      id: 3,
      title: "Color Current",
      category: "Photo",
      image: project3,
      images: [project3, project6, project1],
      client: "Flow Creative",
      year: "2023",
      description:
        "A stunning photography series that captures the essence of color in motion, combining artistic vision with technical excellence.",
      technologies: ["Photography", "Adobe Suite", "Color Grading"],
    },
    {
      id: 4,
      title: "Subsequent Sneeze",
      category: "Creative",
      image: project4,
      images: [project4, project1, project2],
      client: "Wellness Brand Co",
      year: "2023",
      description:
        "A creative exploration of unexpected moments and their ripple effects, told through engaging visuals and interactive storytelling.",
      technologies: ["React", "Animation", "Creative Direction"],
    },
    {
      id: 5,
      title: "Abstract Dreams",
      category: "Design",
      image: project5,
      images: [project5, project3, project6],
      client: "Dream Labs",
      year: "2024",
      description:
        "An abstract design project that pushes the boundaries of digital art and user interface design, creating dreamlike experiences.",
      technologies: ["UI/UX Design", "React", "Canvas API", "WebGL"],
    },
    {
      id: 6,
      title: "Minimal Essence",
      category: "Photo",
      image: project6,
      images: [project6, project2, project4],
      client: "Essence Studio",
      year: "2023",
      description:
        "A minimalist photography project that strips away the unnecessary to reveal the true essence of subjects through clean composition.",
      technologies: ["Photography", "Minimalist Design", "Post-Production"],
    },
  ];

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  };

  const filteredProjects =
    activeFilter === "All Categories"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Featured Work Section */}
      <section className="pt-32 py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">FEATURED WORK</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Beautiful designs. Eye-catching interactions. Memorable experiences. Development that
              delivers. Let the work do the talking.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-foreground text-background" // ACTIVE: Dark Background, Light Text (Correct)
                    : "bg-[hsl(0,0%,92.16%)] text-foreground hover:bg-primary hover:text-primary-foreground" // UNSELECTED: Light Gray Background (Changed)
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-card shadow-lg aspect-square">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedProject.category} Project
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-xl text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Client</p>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Year</p>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">About the Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-[hsl(var(--button-base))] text-[hsl(var(--button-base-foreground))] rounded-xl text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
