import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import birthday from "../assets/birthday.jpg";
import library from "../assets/library.jpg";
import nikeStore from "../assets/nike-store.jpg";
import ecommerce from "../assets/ecommerce.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Food App",
      description:
        "A modern food delivery application built with React Native featuring real-time ordering, user authentication, and seamless payment integration.",
      techStack: ["React Native", "JavaScript", "Mobile Development"],
      github: "https://github.com/savagetushar/Foodiehub",
      demo: null,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop",
      gradient: "from-gray-700 to-black",
    },
    {
      title: "Library Management System",
      description:
        "A comprehensive library management application with book cataloging, member management, and automated fine calculation systems.",
      techStack: ["HTML", "CSS", "JavaScript", "Web Development"],
      github:
        "https://github.com/Yogesh01010/Library-Management-System-Application.git",
      demo: "https://library-management-system-application.netlify.app/",
      image: library,
      gradient: "from-gray-700 to-black",
    },
    {
      title: "Birthday Website",
      description:
        "An interactive and personalized birthday celebration website with animations, photo galleries, and custom messaging features.",
      techStack: ["React", "TypeScript", "Animation"],
      github: "https://github.com/Yogesh01010/Birthday-site.git",
      demo: "https://6861796ffbb8c121341f9dfa--iktara.netlify.app/",
      image: birthday,
      gradient: "from-gray-700 to-black",
    },
    {
      title: "Nike Store",
      description:
        "A sleek e-commerce store interface inspired by Nike's design language, featuring product showcases and interactive shopping experience.",
      techStack: ["HTML", "CSS", "JavaScript", "E-commerce"],
      github: "https://github.com/Yogesh01010/Nike_Sotre.git",
      demo: "https://master--frolicking-quokka-3d5cca.netlify.app/",
      image: nikeStore,
      gradient: "from-gray-700 to-black",
    },
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, and secure payment processing.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Yogesh01010/ecommerce_v1.git",
      demo: "https://master--frolicking-quokka-3d5cca.netlify.app/",
      image: ecommerce,
      gradient: "from-gray-700 to-black",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Each project
            represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    {/* Buttons */}
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>

                      {project.demo && (
                        <Button
                          size="sm"
                          variant="secondary"
                          asChild
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Code className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
