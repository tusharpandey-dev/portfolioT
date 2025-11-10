import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import profileImage from "../assets/profile.png";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/savagetushar",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tushar-pandey-3b0251208/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:pandeytushar287@gmail.com@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:6204156687",
      label: "Phone",
    },
  ];

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark pt-16 sm:pt-20 lg:pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Large screen layout (unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-lg text-primary font-medium mb-2">
                Hello, I'm Tushar Kumar
              </h2>
            
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl text-muted-foreground font-light mb-6">
                Full Stack Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate about creating beautiful, functional, and
                user-friendly applications. I love turning complex problems into
                simple, elegant solutions.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1ulSOddlg0LxJtAz7mVvK964G5b1o2AyM/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-black hover:shadow-glow transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1ulSOddlg0LxJtAz7mVvK964G5b1o2AyM
"
                  download="https://drive.google.com/uc?export=download&id=1ulSOddlg0LxJtAz7mVvK964G5b1o2AyM
"
                  className="inline-flex items-center px-6 py-3 rounded-lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src={profileImage}
                    alt="tusharKumar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Profile Image on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src={profileImage}
                    alt="tushar Kumar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
            </motion.div>
          </motion.div>

          {/* Content below image in two columns */}
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Left side - Name and description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 md:mt-0"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold mb-5">
  Hello, I'm
</h2>

<h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold mb-5">
  <span className="text-gradient">Tushar Kumar</span>
</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl text-muted-foreground font-light mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Passionate about creating beautiful, functional, and
                  user-friendly applications. I love turning complex problems
                  into simple, elegant solutions.
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - Social links and buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col items-center md:items-start space-y-6 md:min-w-[220px]"
            >
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-3"
              >
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col space-y-3 w-full"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm px-6 py-2.5 w-full"
                >
                  <a
                    href="/c:\Users\hp\Downloads\Tushar_Kumar_Resume (2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary text-black hover:shadow-glow transition-all duration-300 text-sm px-6 py-2.5 w-full"
                >
                  <a
                    href="/c:\Users\hp\Downloads\Tushar_Kumar_Resume (2).pdf"
                    download="c:\Users\hp\Downloads\Tushar_Kumar_Resume (2).pdf"
                    className="inline-flex items-center justify-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute hidden sm:block bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
