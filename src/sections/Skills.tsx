"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Server, Settings, Terminal, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/common/Reveal";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Laptop,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "GSAP", "Framer Motion"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js (Server Actions)", "Prisma", "REST APIs", "GraphQL", "JWT Auth", "Cloudinary"],
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Database Solutions",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Prisma ORM"],
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Tools & DevOps",
    icon: Settings,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "Firebase", "Postman", "CI/CD", "ESLint"],
    color: "bg-purple-500/10 text-purple-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">


        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-section to-transparent" />


        
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {/* Header */}
          <Reveal className="mx-auto" width="100%">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm mb-2">
                <span className="h-0.5 w-10 bg-accent-brand" />
                Technical Arsenal
                <span className="h-0.5 w-10 bg-accent-brand" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
                Comprehensive <span className="text-accent-brand">Skillset</span>
              </h2>

              <p className="text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
                I leverage a range of cutting-edge technologies to build performant, user-centric web applications and robust architectures.
              </p>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <Reveal key={category.title} delay={0.1 * idx} className="h-full w-full" width="100%">
                <Card className="h-full border-2 border-border/40 shadow-sm shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-card group">


                  <CardContent className="p-8 space-y-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-2xl ${category.color} transition-transform group-hover:scale-110`}>
                        <category.icon className="w-8 h-8" />
                      </div>

                      <h3 className="text-xl font-heading font-bold text-foreground leading-tight">
                        {category.title}
                      </h3>

                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-background/50 text-text-body border-border hover:bg-accent-brand hover:text-primary-foreground hover:shadow-md transition-all duration-200 cursor-default px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Extra Highlights */}
          <Reveal delay={0.4} width="100%">
            <div className="p-10 rounded-3xl bg-card border border-border shadow-lg flex flex-wrap justify-center gap-12">
               <div className="flex items-center gap-4 group cursor-default">
                 <ShieldCheck className="w-10 h-10 text-accent-brand group-hover:scale-110 transition-transform" />

                 <div>
                    <p className="font-heading font-bold text-foreground">Security First</p>
                    <p className="text-muted-foreground text-sm">Focus on robust auth & data protection</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 group cursor-default">
                 <Terminal className="w-10 h-10 text-green-vibrant group-hover:scale-110 transition-transform" />
                 <div>
                    <p className="font-heading font-bold text-foreground">Optimized Code</p>
                    <p className="text-muted-foreground text-sm">Clean architectural patterns</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 group cursor-default">
                 <Laptop className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform" />
                 <div>
                    <p className="font-heading font-bold text-foreground">Responsive Design</p>
                    <p className="text-muted-foreground text-sm">Flawless UI on every device</p>
                 </div>
               </div>
            </div>
          </Reveal>
        </div>
    </section>
  );
}
