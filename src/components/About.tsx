import { motion } from "framer-motion";
import { Code, Hourglass, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects & Mini-Apps Built", value: "10+" },
    { icon: Hourglass, label: "Hours of Coding Practice", value: "3000+" },
    { icon: Users, label: "GitHub Contributions", value: "50+" },
    { icon: Award, label: "Courses & Certifications", value: "3+" },
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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-primary rounded-full mb-6"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate Full Stack Developer with expertise in modern web
              technologies. I love creating digital experiences that are not
              only visually appealing but also highly functional and
              user-friendly.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With a strong foundation in both frontend and backend development,
              I enjoy working on challenging projects that push the boundaries
              of what's possible on the web. I'm always eager to learn new
              technologies and apply them to create innovative solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              When I'm not coding, you can find me exploring new frameworks,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </motion.p>

          {/* <motion.div variants={itemVariants} className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1aXq_XSM3_7j7aSQ-AP--gfUoWFiCZ9bt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </motion.div> */}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="p-6 text-center hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:shadow-glow transition-all duration-300"
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gradient mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
