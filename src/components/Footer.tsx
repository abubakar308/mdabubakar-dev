"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/common/Magnetic";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com", icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-slate border-t border-border">

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center text-foreground">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold tracking-tighter uppercase">
            MD ABU BAKAR SIDDIQUE
          </h2>

          <p className="text-text-body/70 max-w-md mx-auto">
            Full Stack Developer specializing in building modern, scalable web applications with Next.js and TypeScript.
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <Magnetic key={social.name}>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-card border border-border rounded-2xl text-text-body hover:text-accent-brand hover:border-accent-brand hover:shadow-lg transition-all duration-300"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            </Magnetic>
          ))}
        </div>

        <div className="text-text-body/50 text-xs">
          <p>© {currentYear} Md Abu Bakar Siddique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
