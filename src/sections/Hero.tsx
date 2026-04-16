"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";
import { GithubIcon as Github, LinkedinIcon as Linkedin, Facebook, Mail, ArrowRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";
import Magnetic from "@/components/common/Magnetic";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com", icon: Mail },
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

  // Parallax transforms for the hero image
  // We use spring for smoother motion
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const parallaxAmount = isMobile ? 0.35 : 1;
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, 60 * parallaxAmount]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, -45 * parallaxAmount]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -40 * parallaxAmount]);
  const floatingCardY = useTransform(scrollYProgress, [0, 1], [0, -28 * parallaxAmount]);

  // Use motion template for the radial gradient to avoid re-renders
  const backgroundX = useTransform(x, (val) => 50 + val * 100);
  const backgroundY = useTransform(y, (val) => 50 + val * 100);
  const background = useMotionTemplate`radial-gradient(600px circle at ${backgroundX}% ${backgroundY}%, rgba(6, 182, 212, 0.15), transparent 80%)`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-background overflow-hidden selection:bg-accent-brand/30">
      {/* Background Interactive Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ background }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orbLeftY }}
          className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-accent-brand/10 rounded-full blur-[130px] animate-pulse"
        />
        <motion.div
          style={{ y: orbRightY }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-accent-soft/8 rounded-full blur-[110px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>


      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <Badge variant="outline" className="text-accent-brand border-accent-brand/30 bg-accent-brand/5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              ✦ Available for Full-Stack Opportunities
            </Badge>

            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-foreground leading-[1.08] tracking-tighter">
              Full Stack
              <br />
              <span className="text-accent-brand">Developer</span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-foreground/80 font-heading">
              Md Abu Bakar Siddique
            </p>

            <p className="text-text-body max-w-lg text-base md:text-lg leading-relaxed border-l-2 border-accent-brand/40 pl-4 italic">
              Building scalable, real-world applications with modern technologies.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">
            {/* Primary CTA */}
            <a href="#projects">
              <Button
                size="lg"
                className="bg-accent-brand text-white hover:bg-accent-brand/90 rounded-full px-7 h-12 text-sm font-bold shadow-lg shadow-accent-brand/25 hover:shadow-accent-brand/40 transition-all hover:scale-105 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </a>

            {/* Secondary CTA */}
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card hover:border-accent-brand/50 hover:text-accent-brand rounded-full px-7 h-12 text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>

            {/* Resume */}
            <Magnetic strength={0.3}>
              <a
                href="/Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                download="Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                className="gap-2 bg-transparent text-text-body border border-border px-5 h-12 rounded-full font-bold text-sm hover:text-foreground hover:border-foreground/40 transition-all inline-flex items-center justify-center hover:scale-105 active:scale-95"
              >
                Resume ↓
              </a>
            </Magnetic>
          </div>

          <div className="flex gap-6 items-center">
            {socialLinks.map((social) => (
              <motion.a
                whileHover={{ scale: 1.1, translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-card border border-border rounded-2xl text-text-body hover:text-accent-brand hover:border-accent-brand hover:shadow-lg transition-all duration-300"


                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
          style={{
            perspective: 1000,
            y: heroImageY,
            rotateX: isMobile ? 0 : rotateX,
            rotateY: isMobile ? 0 : rotateY,
          }}
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Spinning Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-accent-brand/20 rounded-full"
            />

            {/* Branded Glows */}
            <div className="absolute -inset-10 bg-gradient-to-br from-accent-brand/20 to-accent-soft/10 rounded-full blur-[80px] opacity-40 dark:opacity-60" />

            {/* Profile Frame */}
            <div className="relative w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden border-2 border-border bg-card shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl group transition-all duration-500 hover:border-accent-brand/50">
              <Image
                src="/images/abubakar.png"
                alt="Md Abu Bakar Siddique"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x600/0F172A/06B6D4?text=Md+Abu+Bakar+Siddique";
                }}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>


            {/* Decorative Card */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: floatingCardY }}
              className="absolute -bottom-4 right-0 md:bottom-20 md:-right-8 p-5 bg-card/80 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl space-y-2 hidden sm:block"
            >

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-brand/10 flex items-center justify-center text-accent-brand">
                  <div className="w-2.5 h-2.5 bg-accent-brand rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground uppercase tracking-widest opacity-60">Status</p>
                  <p className="text-sm font-bold text-foreground">Available to Hire</p>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
