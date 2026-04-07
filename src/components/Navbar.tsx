"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/common/ThemeToggle";
import Magnetic from "@/components/common/Magnetic";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-5",
    scrolled
      ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.2)]"
      : "bg-transparent"
  );


  const textClasses = cn(
    "transition-colors duration-300",
    scrolled ? "text-foreground" : "text-foreground"
  );


  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Magnetic>
          <Link
            href="/"
            className={cn(
              "text-xl font-heading font-bold tracking-tighter hover:text-accent-brand transition-colors",
              textClasses
            )}
          >
            MD ABU BAKAR SIDDIQUE
          </Link>
        </Magnetic>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest hover:text-accent-brand transition-colors",
                  textClasses
                )}
              >
                {link.name}
              </a>
            </motion.div>
          ))}

          <Magnetic>
            <ThemeToggle />
          </Magnetic>
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden flex items-center gap-4">
          <Magnetic>
            <ThemeToggle />
          </Magnetic>
          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className={textClasses}>
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-background/95 backdrop-blur-xl border-l border-border h-full max-w-[320px] w-[80%] rounded-l-[1.5rem] p-0 shadow-2xl">
              <div className="flex flex-col h-full overflow-y-auto">
                {/* Header */}
                <div className="p-6 pb-4 flex items-center justify-between">
                  <div className="text-sm font-heading font-extrabold tracking-tighter text-foreground/40 uppercase">
                    Portfolio
                  </div>
                  <DrawerClose asChild>
                     <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent-brand/10 hover:text-accent-brand transition-colors">
                        <X className="w-5 h-5" />
                     </Button>
                  </DrawerClose>
                </div>

                <div className="px-6 py-2">
                   <DrawerTitle className="text-xl font-heading font-extrabold text-foreground pb-4 border-b border-border/50">
                     Navigation
                   </DrawerTitle>
                </div>

                {/* Main Links */}
                <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-accent-brand/5 text-base font-bold uppercase tracking-widest text-foreground/80 hover:text-accent-brand transition-all"
                    >
                      {link.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-brand scale-0 group-hover:scale-100 transition-transform" />
                    </a>
                  ))}
                </nav>

                {/* Footer Section */}
                <div className="p-6 pt-0 mt-auto space-y-8">
                   <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 pl-1">Keep in Touch</p>
                      <div className="flex gap-3">
                         {socialLinks.map((social) => (
                            <Link
                               key={social.name}
                               href={social.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-3 bg-secondary/10 hover:bg-accent-brand/10 text-foreground/60 hover:text-accent-brand hover:shadow-lg transition-all rounded-xl"
                               title={social.name}
                            >
                               <social.icon className="w-4 h-4" />
                            </Link>
                         ))}
                      </div>
                   </div>

                   <div className="pt-4 text-center">
                       <p className="text-[10px] font-medium text-foreground/30">© {new Date().getFullYear()} Md Abu Bakar Siddique</p>
                   </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
