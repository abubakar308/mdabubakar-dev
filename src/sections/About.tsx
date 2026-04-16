"use client";

import { User, Target, Sparkles, CheckCircle, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/common/Reveal";

const quickFacts = [
  {
    icon: User,
    label: "Who I Am",
    color: "text-accent-brand",
    bg: "bg-accent-brand/10",
    points: [
      "Full Stack Developer based in Dhaka, Bangladesh",
      "Passionate about building clean, scalable web applications",
      "Focused on real-world impact with every line of code",
    ],
  },
  {
    icon: Sparkles,
    label: "What I Do",
    color: "text-green-500",
    bg: "bg-green-500/10",
    points: [
      "Build full-stack apps from database schema to polished UI",
      "Architect REST APIs with Node.js, Express, and Prisma",
      "Craft responsive, accessible interfaces with React & Next.js",
    ],
  },
  {
    icon: Target,
    label: "Current Focus",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    points: [
      "Production-grade SaaS and platform products",
      "TypeScript, PostgreSQL, Prisma ORM, and Next.js App Router",
      "Open to full-stack roles and collaborative projects",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm">
              <span className="h-0.5 w-10 bg-accent-brand" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Who I Am &{" "}
              <span className="text-accent-brand">What I Build</span>
            </h2>
            <p className="text-text-body text-lg leading-relaxed max-w-xl">
              A results-oriented Full Stack Developer who turns ideas into
              fast, scalable, and production-ready web applications.
            </p>
          </div>
        </Reveal>

        {/* Quick Facts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {quickFacts.map((fact, index) => (
            <Reveal key={fact.label} horizontal delay={0.2 + index * 0.12}>
              <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  {/* Icon + Label */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl ${fact.bg} ${fact.color} transition-transform group-hover:scale-110 duration-300 flex-shrink-0`}
                    >
                      <fact.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-heading font-bold text-foreground">
                      {fact.label}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {fact.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-body leading-snug">
                        <CheckCircle className={`w-3.5 h-3.5 ${fact.color} flex-shrink-0 mt-0.5`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Quote + CTA */}
        <Reveal delay={0.5}>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Quote */}
            <div className="p-6 bg-card/50 border-l-4 border-accent-brand rounded-r-2xl italic text-foreground font-medium text-base md:text-lg shadow-sm">
              &quot;Building great software is not just about writing code — it&apos;s
              about solving real human problems through technology.&quot;
              <div className="flex items-center gap-2 mt-4 not-italic">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <p className="text-sm text-text-body">
                  Driven by passion, fueled by coffee, inspired by innovation.
                </p>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="p-7 rounded-[1.5rem] bg-primary text-primary-foreground flex flex-col gap-4 overflow-hidden relative shadow-2xl shadow-accent-brand/10">
              <div className="z-10">
                <p className="text-primary-foreground/70 font-bold text-[10px] tracking-widest uppercase mb-1">
                  Status
                </p>
                <p className="text-xl font-heading font-extrabold">
                  Open for Full-Stack Opportunities
                </p>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Available for remote & on-site roles worldwide.
                </p>
              </div>
              <a href="#projects" className="z-10">
                <Button
                  size="sm"
                  variant="secondary"
                  className="font-bold rounded-full px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:scale-105 active:scale-95 transition-transform"
                >
                  View My Projects
                </Button>
              </a>
              {/* Decorative glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
