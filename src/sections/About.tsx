"use client";

import { User, Target, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/common/Reveal";

const highlights = [
  {
    title: "Journey",
    icon: User,
    description: "From curious tinkerer to high-performance Full Stack Developer.",
    color: "text-accent-brand",
    bg: "bg-accent-brand/10",
  },

  {
    title: "Interests",
    icon: Sparkles,
    description: "Passionate about modern UI/UX, AI integration, and app scalability.",
    color: "text-green-vibrant",
    bg: "bg-green-vibrant/10",
  },

  {
    title: "Goals",
    icon: Target,
    description: "Building production-grade tools that solve real-world problems.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-section overflow-hidden">


      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm">
              <span className="h-0.5 w-10 bg-accent-brand" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Crafting Digital <span className="text-accent-brand">Experiences</span>
            </h2>
          </div>
        </Reveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <Reveal horizontal delay={0.3}>
            <div className="space-y-8">
              <div className="prose prose-lg text-text-body space-y-6">
                <p>
                  Hello! I&apos;m <strong>Md Abu Bakar Siddique</strong>, a results-oriented Full Stack Developer with a deep love for building exceptionally clean, fast, and feature-rich web applications. My journey into development began with a fascination for how things work under the hood, and it has since evolved into a professional career focused on modern technologies and user-centric design.
                </p>
                <p>
                  Whether it&apos;s architecting a robust backend with <strong>Next.js</strong> and <strong>PostgreSQL</strong> or crafting a pixel-perfect, interactive interface with <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong>, I bring a meticulous and innovative approach to every project.
                </p>
                <p>
                  Beyond the code, I value clean architecture, collaborative problem-solving, and continuous learning. I&apos;m always exploring the latest trends in the developer ecosystem to stay at the forefront of the industry.
                </p>
              </div>

              {/* Quote / Highlight */}
              <div className="p-6 bg-card/40 border-l-4 border-accent-brand rounded-r-2xl italic text-foreground font-medium text-lg shadow-sm">
                &quot;Building great software is not just about writing code; it&apos;s about solving human problems through technology.&quot;
              </div>


              
              <div className="flex gap-4 items-center text-text-body">
                 <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                 <p className="text-sm">Driven by passion, fueled by coffee, and inspired by innovation.</p>
              </div>
            </div>
          </Reveal>

          {/* Highlights Section */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Reveal key={item.title} horizontal delay={0.4 + index * 0.1} className="w-full">
                <Card className="bg-card border-2 border-border/40 shadow-sm shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-8 flex gap-6 items-start">
                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} flex-shrink-0 transition-transform group-hover:scale-110`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-xl font-heading font-bold text-foreground">{item.title}</h3>
                       <p className="text-text-body leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            
            <Reveal delay={0.6} className="w-full">
              <div className="mt-4 p-8 rounded-[2rem] bg-primary text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-2xl shadow-accent-brand/10">
                <div className="z-10 text-center md:text-left">
                  <p className="text-primary-foreground/70 font-bold text-[10px] tracking-widest uppercase mb-1">Status</p>
                  <p className="text-2xl font-heading font-extrabold">Open for Collaboration</p>
                </div>
                <Button size="lg" variant="secondary" className="font-bold rounded-full px-8 z-10 whitespace-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:scale-105 active:scale-95 transition-transform">
                  Check My Projects
                </Button>

                {/* Decorative glows */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
