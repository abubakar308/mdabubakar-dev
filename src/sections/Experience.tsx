"use client";

import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/common/Reveal";

const educations = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Your University Name",
    year: "2019 - 2023",
    description: "Focused on software engineering, data structures, and web technologies.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Your College Name",
    year: "2017 - 2019",
    description: "Science background with strong focus on mathematics and physics.",
  },
];

const experiences = [
  {
    title: "Full Stack Developer (Learning & Projects)",
    company: "Self-Employed / Growth Journey",
    year: "2023 - Present",
    description: "Building production-grade applications using Next.js, TypeScript, and Prisma. Focusing on performance optimization and scalable architecture.",
  },
  {
    title: "Frontend Developer Trainee",
    company: "Dev Training Institute",
    year: "2022 - 2023",
    description: "Mastered React.js, Tailwind CSS, and modern UI design principles. Contributed to various open-source mini-projects.",
  },
];

export default function Experience() {
  return (
    <section id="education" className="py-24 px-6 bg-section relative overflow-hidden">


      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <Reveal width="100%">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm mb-2">
              <span className="h-0.5 w-10 bg-accent-brand" />
              My Journey
              <span className="h-0.5 w-10 bg-accent-brand" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
               Education & <span className="text-accent-brand">Experience</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <Reveal horizontal>
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-accent-brand/10 text-accent-brand rounded-xl">
                   <GraduationCap className="w-8 h-8" />
                 </div>

                 <h3 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wider">Education</h3>
              </div>
            </Reveal>

            {educations.map((edu, idx) => (
              <Reveal key={edu.degree} horizontal delay={0.2 + idx * 0.1} width="100%">
                <Card className="border-2 border-border/40 shadow-sm bg-card relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-brand scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                   <CardContent className="p-8 space-y-4">
                      <div className="flex justify-between items-start gap-4">
                         <div className="space-y-1">
                             <h4 className="text-xl font-heading font-bold text-foreground">{edu.degree}</h4>
                             <p className="text-accent-brand font-bold text-sm tracking-wide">{edu.institution}</p>

                         </div>
                          <Badge variant="outline" className="text-text-body/70 border-border bg-background px-4 py-1 flex-shrink-0 font-bold uppercase tracking-widest text-[10px]">
                             <Calendar className="w-3.5 h-3.5 mr-2 opacity-60" />
                             {edu.year}
                          </Badge>

                      </div>
                       <p className="text-text-body leading-relaxed text-sm italic opacity-80">
                         {edu.description}
                       </p>

                   </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Experience Column */}
          <div className="space-y-8">
            <Reveal horizontal delay={0.3}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-green-vibrant/10 text-green-vibrant rounded-xl">
                   <BookOpen className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wider">Experience & Growth</h3>
              </div>
            </Reveal>

            {experiences.map((exp, idx) => (
              <Reveal key={exp.title} horizontal delay={0.4 + idx * 0.1} width="100%">
                <Card className="border-2 border-border/40 shadow-sm bg-card relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="absolute top-0 left-0 w-1.5 h-full bg-green-vibrant scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                   <CardContent className="p-8 space-y-4">
                      <div className="flex justify-between items-start gap-4">
                         <div className="space-y-1">
                            <h4 className="text-xl font-heading font-bold text-foreground">{exp.title}</h4>
                            <p className="text-green-vibrant font-semibold text-sm">{exp.company}</p>
                         </div>
                          <Badge variant="outline" className="text-text-body/70 border-border bg-background px-4 py-1 flex-shrink-0 font-bold uppercase tracking-widest text-[10px]">
                             <Calendar className="w-3.5 h-3.5 mr-2 opacity-60" />
                             {exp.year}
                          </Badge>

                      </div>
                       <p className="text-text-body leading-relaxed text-sm italic opacity-80">
                         {exp.description}
                       </p>

                   </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
