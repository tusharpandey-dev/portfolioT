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
    { icon: Github, href: "https://github.com/savagetushar", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tushar-pandey-3b0251208/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:pandeytushar287@gmail.com",
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark pt-16 sm:pt-20 lg:pt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div>
             <h2 className="text-3xl text-primary font-semibold mb-3">
  Hello, I'm
</h2>

<h1 className="text-5xl font-bold text-white leading-tight">
  <span className="text-gradient">Tushar Kumar</span>
</h1>

            </div>

            <div>
              <h3 className="text-3xl text-muted-foreground font-light mb-6">Full Stack Developer</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Passionate about creating beautiful, functional, and user-friendly applications. 
                I love turning complex problems into simple, elegant solutions.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:bg-primary/10"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-4 flex space-x-4">
              <Button asChild size="lg" className="text-lg px-6 py-3 bg-gradient-primary">
                <a href="https://drive.google.com/file/d/1ulSOddlg0LxJtAz7mVvK964G5b1o2AyM/view" target="_blank">
                  View Resume
                </a>
              </Button>

              <Button asChild size="lg" className="text-lg px-6 py-3 bg-gradient-primary text-black">
                <a
                  href="https://drive.google.com/uc?export=download&id=1ulSOddlg0LxJtAz7mVvK964G5b1o2AyM"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-96 h-96 rounded-full bg-gradient-primary p-1">
              <div className="rounded-full bg-background p-2 w-full h-full">
                <img src={profileImage} alt="tushar" className="rounded-full object-cover w-full h-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary text-center">
            Tushar Kumar
          </h1>
          <h3 className="text-2xl text-muted-foreground font-light text-center">
            Full Stack Developer
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-md">
            Passionate about building modern web experiences.
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
