"use client";

import { User, Target, Sparkles, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/common/Reveal";

const quickFacts = [
  {
    icon: User,
    label: "Who I Am",
    color: "text-accent-brand",
    bg: "bg-accent-brand/10",
    points: [
      "Full Stack Developer based in Dhaka, Bangladesh",
      "Passionate about building clean, scalable web apps",
      "Focused on real-world impact with every line of code",
    ],
  },
  {
    icon: Sparkles,
    label: "What I Do",
    color: "text-green-500",
    bg: "bg-green-500/10",
    points: [
      "Build full-stack apps from database to polished UI",
      "Architect REST APIs with Node.js, Express, and Prisma",
      "Craft responsive, accessible interfaces with React",
    ],
  },
  {
    icon: Target,
    label: "Current Focus",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    points: [
      "Production-grade SaaS and platform products",
      "TypeScript, PostgreSQL, Prisma, and Next.js",
      "Open to full-stack roles and collaborations",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">

        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-8 bg-accent-brand" />
              About My Craft
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
              Engineering Scalable <br className="hidden sm:block" />
              <span className="text-accent-brand">Solutions</span>
            </h2>
            <p className="text-text-body text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              I am a results-driven developer who thrives on turning complex problems
              into seamless digital experiences. My focus is on writing clean,
              maintainable code that delivers real business value.
            </p>
          </div>
        </Reveal>

        {/* Quick Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {quickFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={0.1 * index}>
              <Card className="h-full bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-accent-brand/30 transition-all duration-300 rounded-3xl group">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  
                  {/* Icon + Label */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${fact.bg} ${fact.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      <fact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-foreground tracking-tight">
                      {fact.label}
                    </h3>
                  </div>

                  {/* Bullet Points */}
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

        {/* Quote + CTA Banner */}
        <Reveal delay={0.2}>
          <div className="grid lg:grid-cols-5 gap-5 md:gap-6">
            
            {/* Quote */}
            <div className="lg:col-span-3 p-6 sm:p-10 bg-card/50 border border-border rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110">
                <Sparkles className="w-24 h-24 sm:w-32 sm:h-32 text-accent-brand" />
              </div>
              <div className="relative z-10 space-y-5">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                  &quot;Software engineering is the art of solving human problems through elegant, scalable technology.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-accent-brand/40" />
                  <p className="text-xs font-bold text-accent-brand uppercase tracking-widest">
                    My Philosophy
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="lg:col-span-2 p-6 sm:p-10 rounded-[2rem] bg-accent-brand flex flex-col justify-between gap-6 overflow-hidden relative shadow-lg shadow-accent-brand/20 group">
              <div className="relative z-10 space-y-2">
                <p className="text-white/80 font-extrabold text-[10px] tracking-[0.25em] uppercase">
                  Status
                </p>
                <p className="text-2xl sm:text-3xl font-heading font-extrabold leading-tight text-white">
                  Open for <br />Opportunities
                </p>
              </div>

              <a 
                href="#projects" 
                className="relative z-10 inline-flex items-center justify-center w-fit px-6 py-3 bg-white text-accent-brand font-bold rounded-xl shadow-md hover:bg-slate-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Projects
              </a>

              {/* Decorative glows */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-[40px] pointer-events-none" />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}