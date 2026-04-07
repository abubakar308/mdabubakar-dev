"use client";

import { motion } from "framer-motion";
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
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI engineering for fast, polished user experiences.",
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
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Database",
    description: "Reliable data-layer design with relational and document databases.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    description: "Professional workflows for collaboration, testing, and design.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function Skills() {
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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={category.title}
              delay={0.1 * idx}
              className="h-full w-full"
              width="100%"
            >
              <Card className="h-full border-2 border-border/40 bg-card shadow-sm shadow-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-extrabold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-text-body/75 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="group/skill"
                      >
                        <div className="h-full rounded-2xl border border-border/70 bg-background/40 dark:bg-background/20 p-4 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 group-hover/skill:border-accent-brand/40 group-hover/skill:bg-accent-brand/5 group-hover/skill:shadow-lg group-hover/skill:shadow-accent-brand/10">
                          <skill.icon className="w-7 h-7 text-foreground/75 group-hover/skill:text-accent-brand transition-colors" />
                          <p className="text-xs font-bold uppercase tracking-wider text-text-body/90 group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                          </p>
                        </div>
                      </motion.div>
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
