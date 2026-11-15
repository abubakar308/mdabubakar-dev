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
  SiVercel,
  SiDocker,
} from "react-icons/si";
import Reveal from "@/components/common/Reveal";

type SkillItem = {
  name: string;
  icon: IconType;
  highlight?: boolean;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma, highlight: true },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-section py-16 md:py-24">
      {/* Background Glows */}
      <div className="absolute left-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-accent-brand/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-8 bg-accent-brand" />
              Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
              Crafting with <br className="hidden sm:block" />
              <span className="text-accent-brand">Modern Tech</span>
            </h2>
            <p className="text-text-body text-sm sm:text-base leading-relaxed max-w-2xl">
              A recruiter-friendly overview of my core competencies, organized by
              specialization for efficient review.
            </p>
          </div>
        </Reveal>

        {/* Categories Wrapper */}
        <div className="space-y-10 md:space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-5">
              
              {/* Category Title */}
              <Reveal delay={catIndex * 0.05}>
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
              </Reveal>

              {/* Skill Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {category.skills.map((skill, index) => (
                  <Reveal
                    key={skill.name}
                    delay={catIndex * 0.05 + index * 0.03}
                  >
                    <div className={`
                      h-full flex items-center gap-3 p-3 md:p-4 rounded-2xl border transition-all duration-300
                      ${skill.highlight
                        ? "bg-accent-brand/[0.08] border-accent-brand/40 shadow-md shadow-accent-brand/5"
                        : "bg-card/60 border-border/60 hover:border-accent-brand/30 hover:bg-card hover:-translate-y-1 hover:shadow-lg"
                      }
                    `}>
                      {/* Icon */}
                      <div className={`
                        flex items-center justify-center p-2 rounded-xl transition-transform duration-300
                        ${skill.highlight ? "bg-accent-brand/10 text-accent-brand" : "bg-background text-foreground/60"}
                      `}>
                        <skill.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col">
                        <span className={`
                          text-xs md:text-sm font-bold tracking-wide transition-colors
                          ${skill.highlight ? "text-foreground" : "text-text-body"}
                        `}>
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[9px] font-extrabold text-accent-brand uppercase tracking-widest mt-0.5">
                            Primary
                          </span>
                        )}
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