"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
  Facebook,
  Mail,
  FolderGit2,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com", icon: Mail },
];

const roles = [
   "Software Engineer",
  "Full Stack Developer",
  "Backend-Focused Developer",
  "Problem Solver"
];

export default function Hero() {
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  // Typewriter Animation State
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Logic
  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(role.substring(0, currentText.length + 1));
        if (currentText === role) {
          setTimeout(() => setIsDeleting(true), 2000); // ২ সেকেন্ড অপেক্ষা করবে
        }
      } else {
        setCurrentText(role.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const parallaxAmount = isMobile ? 0.2 : 1; 
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -40 * parallaxAmount]);
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, 100 * parallaxAmount]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, -80 * parallaxAmount]);

  const backgroundX = useTransform(x, (val) => 50 + val * 100);
  const backgroundY = useTransform(y, (val) => 50 + val * 100);
  const background = useMotionTemplate`radial-gradient(600px circle at ${backgroundX}% ${backgroundY}%, rgba(6, 182, 212, 0.1), transparent 80%)`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background overflow-hidden selection:bg-accent-brand/30 pt-24 pb-12 md:pt-32 md:pb-0"
    >
      {!isMobile && (
        <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background }} />
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: orbLeftY }} className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-accent-brand/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: orbRightY }} className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent-soft/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 md:space-y-7 flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1"
          >
            {/* Eyebrow / Badge */}
            <div className="inline-flex items-center text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-accent-brand/5 border border-accent-brand/20 text-accent-brand backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-brand"></span>
              </span>
              Open for Opportunities
            </div>

            {/* Main Heading & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tighter uppercase">
                Md Abu Bakar Siddique
              </h1>
              <div className="h-8 sm:h-10 flex items-center justify-center md:justify-start">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent-brand tracking-tight">
                  {currentText}
                  <span className="animate-pulse ml-1 text-foreground">|</span>
                </p>
              </div>
            </div>

            {/* Description */}
         <p className="text-sm sm:text-base md:text-lg text-text-body leading-relaxed max-w-lg md:max-w-xl">
  I'm a backend-focused Full Stack Developer with hands-on
  experience building web applications, REST APIs, and
  database-driven solutions using{" "}
  <span className="text-foreground font-bold">
    Next.js, TypeScript, Node.js, and PostgreSQL
  </span>
  . Currently expanding my backend development skills
  with PHP and Laravel.
</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3 pt-2">
              <a 
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-accent-brand text-white hover:bg-accent-brand/90 h-12 px-6 rounded-xl text-sm font-bold shadow-lg shadow-accent-brand/20 hover:shadow-accent-brand/40 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4 mr-2" />
                View My Projects
              </a>

              <a 
                href="/Full Stack_Developer_Resume_of_Abu Bakar Siddique.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-border text-foreground hover:bg-card hover:border-accent-brand/50 hover:text-accent-brand h-12 px-6 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 items-center pt-4 border-t border-border/40 md:border-none w-full md:w-auto justify-center md:justify-start">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/40 hidden sm:block mr-2">Connect</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 bg-card/50 border border-border/60 rounded-xl text-text-body hover:text-accent-brand hover:border-accent-brand/40 hover:-translate-y-1 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center md:justify-end order-1 md:order-2"
            style={{
              perspective: 1000,
              y: heroImageY,
              rotateX: isMobile ? 0 : rotateX,
              rotateY: isMobile ? 0 : rotateY,
            }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/30 to-accent-soft/20 rounded-full blur-[50px] opacity-60" />

              {/* Image Frame (Fully Rounded + Fixed Background Color) */}
              <div className="relative w-full h-full rounded-full bg-background border border-border/60 shadow-2xl group">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-card">
                  <Image
                    src="/images/abubakarv2.png"
                    alt="Md Abu Bakar Siddique"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}