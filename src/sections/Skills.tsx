"use client";

import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/common/Reveal";

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
  skills: SkillItem[];
  tier: "primary" | "secondary";
  animation: "left" | "right" | "float" | "none";
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI engineering for fast, polished user experiences.",
    tier: "primary",
    animation: "left",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "API and server-side foundations focused on performance and scale.",
    tier: "primary",
    animation: "right",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Database",
    description: "Reliable data-layer design with relational and document databases.",
    tier: "secondary",
    animation: "float",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    description: "Professional workflows for collaboration, testing, and design.",
    tier: "secondary",
    animation: "none",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function Skills() {
  const animationClass = (type: SkillCategory["animation"]) => {
    if (type === "left") return "motion-safe:animate-skill-slide-right";
    if (type === "right") return "motion-safe:animate-skill-slide-left";
    if (type === "float") return "motion-safe:animate-skill-float";
    return "";
  };

  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-section to-transparent" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <Reveal className="mx-auto" width="100%">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm mb-2">
              <span className="h-0.5 w-10 bg-accent-brand" />
              Technical Arsenal
              <span className="h-0.5 w-10 bg-accent-brand" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Professional <span className="text-accent-brand">Skillset</span>
            </h2>
            <p className="text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
              A recruiter-friendly overview of the core technologies I use to build
              robust, modern products.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={category.title}
              delay={0.1 * idx}
              className="h-full w-full lg:col-span-6"
              width="100%"
            >
              <Card
                className="group h-full border-2 border-border/40 bg-card shadow-sm shadow-black/5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 hover:border-accent-brand/40"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3
                      className={`font-heading font-extrabold text-foreground ${
                        category.tier === "primary" ? "text-2xl md:text-[1.75rem]" : "text-xl md:text-2xl"
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-sm text-text-body/75 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div
                    className={`grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-3.5 max-md:animate-none ${animationClass(category.animation)} group-hover:[animation-play-state:paused]`}
                  >
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="h-full rounded-2xl border border-border/70 bg-background/40 dark:bg-background/20 p-4 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 group-hover/skill:border-accent-brand/40 group-hover/skill:bg-accent-brand/5 group-hover/skill:shadow-lg group-hover/skill:shadow-accent-brand/10">
                          <skill.icon className="w-8 h-8 text-foreground/75 group-hover/skill:text-accent-brand transition-colors" />
                          <p className="text-xs font-bold uppercase tracking-wider text-text-body/90 group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
