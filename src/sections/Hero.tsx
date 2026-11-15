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
  ArrowRight,
  FolderGit2,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com?subject=Portfolio%20Inquiry", icon: Mail },
];

export default function Hero() {
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  // Smooth Parallax Calculation
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
      {/* Background Interactive Glow (Desktop Only) */}
      {!isMobile && (
        <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background }} />
      )}

      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orbLeftY }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-accent-brand/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: orbRightY }}
          className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent-soft/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-accent-brand/5 border border-accent-brand/20 text-accent-brand backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-brand"></span>
              </span>
              Open for Opportunities
            </div>

            {/* Headline */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-foreground leading-[1.05] tracking-tighter uppercase">
                <span className="block text-accent-brand">Full Stack</span>
                <span className="block">Developer</span>
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="hidden md:block h-px w-10 bg-border" />
                <p className="text-lg sm:text-xl font-bold text-foreground/70 tracking-tight">
                  Md Abu Bakar Siddique
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-text-body font-medium leading-relaxed max-w-lg md:max-w-xl">
              I build <span className="text-foreground font-bold">scalable, production-ready applications</span> with a focus on performance, clean architecture, and exceptional user experiences.
            </p>

            {/* CTAs (Fixed Mobile Stack) */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 pt-2">
              <a 
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-accent-brand text-white hover:bg-accent-brand/90 h-12 px-8 rounded-xl text-sm font-bold shadow-lg shadow-accent-brand/20 hover:shadow-accent-brand/40 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4 mr-2" />
                View My Work
              </a>

              <a 
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-border text-foreground hover:bg-card hover:border-accent-brand/50 hover:text-accent-brand h-12 px-8 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Resume & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto border-t border-border/40 md:border-none pt-6 md:pt-4">
              <a
                href="/Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                download
                className="group inline-flex items-center gap-2 text-text-body hover:text-foreground transition-all font-bold text-sm"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              
              <div className="hidden sm:block h-4 w-px bg-border"></div>

              <div className="flex gap-3 items-center">
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
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Spinning ring */}
              <motion.div
                animate={isMobile ? {} : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-accent-brand/30 rounded-full"
              />

              {/* Glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-accent-brand/20 to-accent-soft/10 rounded-full blur-[60px] opacity-60" />

              {/* Image Frame */}
              <div className="relative w-full h-full p-2">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl group">
                  <Image
                    src="/images/abubakar.png"
                    alt="Md Abu Bakar Siddique"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Floating Status Card (Hidden on very small screens for cleaner look) */}
              <motion.div
                animate={isMobile ? {} : { y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 sm:-right-6 p-3 sm:p-4 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-brand/10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-accent-brand rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-foreground uppercase tracking-widest opacity-60">Status</p>
                  <p className="text-xs sm:text-sm font-bold text-foreground">Available to Hire</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}