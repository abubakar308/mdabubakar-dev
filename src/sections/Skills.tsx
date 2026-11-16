"use client";

import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbShieldLock, TbUserShield } from "react-icons/tb";
import Reveal from "@/components/common/Reveal";

type SkillItem = {
  name: string;
  icon: IconType | any; // Fallback for non-si icons
  highlight?: boolean;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP (Learning)", icon: SiPhp },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "JWT Auth", icon: TbShieldLock },
      { name: "RBAC", icon: TbUserShield },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma, highlight: true },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute left-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-accent-brand/[0.04] blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="space-y-4 max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-8 bg-accent-brand" />
              Technical Skills
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
              Tech Stack & <br className="hidden sm:block" />
              <span className="text-accent-brand">Capabilities</span>
            </h2>
            <p className="text-text-body text-sm sm:text-base leading-relaxed max-w-2xl">
              A structured overview of the technologies I use to build full-stack applications.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10 md:space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-5">
              <Reveal delay={catIndex * 0.05}>
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {category.skills.map((skill, index) => (
                  <Reveal key={skill.name} delay={catIndex * 0.05 + index * 0.03}>
                    <div className={`
                      h-full flex items-center gap-3 p-3 md:p-4 rounded-2xl border transition-all duration-300
                      ${skill.highlight
                        ? "bg-accent-brand/[0.08] border-accent-brand/40 shadow-md shadow-accent-brand/5"
                        : "bg-card/60 border-border/60 hover:border-accent-brand/30 hover:bg-card hover:-translate-y-1 hover:shadow-lg"
                      }
                    `}>
                      <div className={`
                        flex items-center justify-center p-2 rounded-xl transition-transform duration-300
                        ${skill.highlight ? "bg-accent-brand/10 text-accent-brand" : "bg-background text-foreground/60"}
                      `}>
                        <skill.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-xs md:text-sm font-bold tracking-wide ${skill.highlight ? "text-foreground" : "text-text-body"}`}>
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}