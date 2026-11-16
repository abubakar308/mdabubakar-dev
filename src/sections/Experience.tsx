"use client";

import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/common/Reveal";

const experienceItems = [
  {
    role: "Full Stack Developer",
    company: "Digital Aid IT",
    type: "Full Stack Development", 
    period: "April 2026 – September 2026",
    description:
      "Developed full-stack features for a CRM and Multichannel Outreach platform, building scalable backend services and interactive frontend components.",
    achievements: [
      "Implemented authentication, Role-Based Access Control (RBAC), People, Companies, Lists, filtering, and search features.",
      "Built CSV/XLSX import/export, AI-assisted search, and email outreach functionality.",
      "Contributed to eComUp.ai admin dashboard, AI-powered social media features, API integration, and debugging."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">

        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-8 bg-accent-brand" />
              My Journey
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
              Development <span className="text-accent-brand">Experience</span>
            </h2>
            <p className="text-text-body text-sm sm:text-base leading-relaxed max-w-2xl">
              My hands-on experience building scalable, production-ready applications
              and contributing to real-world projects.
            </p>
          </div>
        </Reveal>

        {/* Experience Timeline */}
        <div className="space-y-8 md:space-y-10 relative before:absolute before:left-[1.1rem] md:before:left-[1.2rem] before:top-4 before:bottom-4 before:w-0.5 before:bg-border/60">
          {experienceItems.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.1}>
              <div className="relative pl-12 md:pl-14 group">
                
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 w-9 h-9 md:w-10 md:h-10 rounded-2xl border border-border/60 bg-card flex items-center justify-center z-10 group-hover:border-accent-brand group-hover:bg-accent-brand transition-all duration-300">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-white transition-colors" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 bg-card/40 border border-border/60 rounded-2xl md:rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-brand/5 hover:border-accent-brand/30">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-heading font-extrabold text-foreground tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm font-bold text-accent-brand">
                        {item.company} <span className="text-text-body/50 font-medium ml-1">• {item.type}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-text-body/60 bg-background px-3 py-1 rounded-full border border-border/50 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-text-body/90 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-body/80">
                        <CheckCircle2 className="w-4 h-4 text-accent-brand flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}