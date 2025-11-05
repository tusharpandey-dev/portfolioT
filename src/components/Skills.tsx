import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  // Tools
  SiGithub,
  SiGit,
  SiPostman,
  SiCodesandbox,
  SiCodepen,
  SiReplit,
  SiVercel,
  SiNetlify,
  SiExpo,

  // Tech Stack
  SiJavascript,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { RiBearSmileFill } from "react-icons/ri";
import { Rocket, Wrench } from "lucide-react";

const Skills = () => {
  const techStack = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-600 text-4xl" />,
      category: "Programming",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600 text-4xl" />,
      category: "Backend",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-700 dark:text-white text-4xl" />,
      category: "Backend",
    },
    {
      name: "React",
      icon: <SiReact className="text-cyan-400 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-600 text-4xl" />,
      category: "State Management",
    },
    {
      name: "Zustand",
      icon: <RiBearSmileFill className="text-[#A0522D] text-4xl" />,
      category: "State Management",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-4xl" />,
      category: "Database",
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-blue-500 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="text-teal-500 text-4xl" />,
      category: "UI Library",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      category: "UI Framework",
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-500 text-4xl" />,
      category: "Database",
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative className="text-cyan-400 text-4xl" />,
      category: "Mobile",
    },
  ];

  const workingTools = [
    {
      name: "VS Code",
      icon: <VscVscode className="text-blue-500 text-4xl" />,
      category: "IDE",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-gray-800 dark:text-white text-4xl" />,
      category: "Version Control",
    },
    {
      name: "Git",
      icon: <SiGit className="text-orange-500 text-4xl" />,
      category: "Version Control",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-600 text-4xl" />,
      category: "API Testing",
    },
    {
      name: "CodeSandbox",
      icon: <SiCodesandbox className="text-black text-4xl" />,
      category: "Online Editor",
    },
    {
      name: "CodePen",
      icon: <SiCodepen className="text-black text-4xl" />,
      category: "Online Editor",
    },
    {
      name: "Replit",
      icon: <SiReplit className="text-yellow-500 text-4xl" />,
      category: "Online IDE",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-black dark:text-white text-4xl" />,
      category: "Deployment",
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-green-500 text-4xl" />,
      category: "Deployment",
    },
    {
      name: "Snack",
      icon: <SiExpo className="text-black dark:text-white text-4xl" />,
      category: "React Native",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  type Skill = {
    name: string;
    icon: React.ReactNode;
    category: string;
  };

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer"
    >
      <Card
        className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 
      hover:border-primary/50 hover:shadow-glow transition-all duration-300 
      relative overflow-hidden flex flex-col items-center justify-center text-center"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          {skill.icon}
        </motion.div>

        {/* Name */}
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 text-center">
          {skill.name}
        </h3>

        {/* Category */}
        <p className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full text-center">
          {skill.category}
        </p>
      </Card>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2"
          >
            <motion.span
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <Rocket className="w-10 h-10 text-primary" />
            </motion.span>
            Tech Stack
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {techStack.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Working Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2"
          >
            <motion.span
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <Wrench className="w-10 h-10 text-primary" />
            </motion.span>
            Working Tools
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {workingTools.map((tool, index) => (
              <SkillCard key={tool.name} skill={tool} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
