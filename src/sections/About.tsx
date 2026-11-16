"use client";

import { User, Target, Sparkles, CheckCircle, Code2, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Reveal from "@/components/common/Reveal";

const quickFacts = [
  {
    icon: User,
    label: "Who I Am",
    color: "text-accent-brand",
    bg: "bg-accent-brand/10",
    points: [
      "CSE Graduate & Full Stack Developer",
      "Project-focused learner",
      "Passionate about building clean, scalable web apps",
    ],
  },
  {
    icon: Sparkles,
    label: "What I Do",
    color: "text-green-500",
    bg: "bg-green-500/10",
    points: [
      "Build full-stack web applications",
      "Architect REST APIs & Database Integrations",
      "Implement secure Authentication & RBAC",
    ],
  },
  {
    icon: Target,
    label: "Current Focus",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    points: [
      "Backend Development & Software Architecture",
      "Improving problem-solving skills",
      "Currently learning PHP & Laravel",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

        {/* Header Section (Split Layout) */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Code Editor Visual */}
          <Reveal horizontal delay={0.1}>
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent-brand/20 blur-[80px] rounded-full" />
              
              {/* Editor Window */}
              <div className="relative bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-background/50 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-text-body/60">
                    <Code2 className="w-3.5 h-3.5" />
                    developer.ts
                  </div>
                </div>
                
                {/* Editor Content */}
                <div className="p-5 md:p-6 font-mono text-xs sm:text-sm leading-loose overflow-x-auto text-text-body">
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">1</span>
                    <span><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">2</span>
                    <span className="pl-4">name: <span className="text-green-400">'Md Abu Bakar Siddique'</span>,</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">3</span>
                    <span className="pl-4">role: <span className="text-green-400">'Full Stack Developer'</span>,</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">4</span>
                    <span className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'PostgreSQL'</span>],</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">5</span>
                    <span className="pl-4">isLearning: <span className="text-orange-400">true</span>,</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">6</span>
                    <span className="pl-4">passion: <span className="text-green-400">'Building scalable apps'</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-border/50 select-none">7</span>
                    <span>{"}"};</span>
                  </div>
                </div>

                {/* Editor Footer (Terminal) */}
                <div className="px-4 py-2 bg-background/80 border-t border-border/50 flex items-center gap-2 text-xs text-text-body/50 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Ready to build...</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Text Content */}
          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
                <span className="h-0.5 w-8 bg-accent-brand" />
                About Me
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
                Building Applications <br className="hidden sm:block" />
                <span className="text-accent-brand">with Purpose</span>
              </h2>
              
              <div className="space-y-4 text-text-body text-sm sm:text-base leading-relaxed">
                <p>
                  I’m a Computer Science and Engineering graduate with hands-on experience building full-stack web applications through personal, academic, and collaborative projects.
                </p>
                <p>
                  My primary focus is developing practical web solutions using modern JavaScript technologies. I enjoy working with APIs, authentication systems, role-based access control, database design, and responsive user interfaces.
                </p>
                <p>
                  I’m continuously improving my problem-solving skills, strengthening my backend fundamentals, and learning how to build maintainable software.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {quickFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={0.1 * index}>
              <Card className="h-full bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-accent-brand/30 transition-all duration-300 rounded-3xl group">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${fact.bg} ${fact.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      <fact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-foreground tracking-tight">
                      {fact.label}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {fact.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-body/90 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-accent-brand flex-shrink-0 mt-0.5 opacity-60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}