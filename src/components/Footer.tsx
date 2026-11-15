"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/abubakar308", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abubakar308/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/mdabubakar308", icon: Facebook },
  { name: "Email", href: "mailto:mdabubakar.dev@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Brand/Identity */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="bg-teal-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xs shadow-lg shadow-teal-500/20">
                AB
              </div>
              <span className="text-lg font-heading font-extrabold text-foreground tracking-tight">Abu Bakar</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent-brand">
                Full Stack Developer
              </p>
              <p className="text-sm text-text-body max-w-sm mx-auto leading-relaxed">
                Engineering scalable, production-ready applications with modern technology and clean architecture.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border/60 rounded-xl text-text-body hover:text-accent-brand hover:border-accent-brand/40 hover:-translate-y-1 hover:shadow-lg transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright Area */}
          <div className="pt-8 border-t border-border/40 w-full text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} Md Abu Bakar Siddique
              </p>
              <p className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}