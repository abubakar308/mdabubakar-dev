"use client";

import { GraduationCap, Calendar, Award, Languages } from "lucide-react";
import { motion } from "framer-motion";

const educationItems = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "City University, Bangladesh",
    period: "2022 – 2026",
    description:
      "Specializing in software engineering, system architecture, and modern web technologies. Focus on building scalable digital solutions.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Khalilganj School and College, Kurigram",
    period: "2018 – 2020",
    description:
      "Core focus on advanced mathematics and physics, building a strong analytical foundation for engineering.",
  },
  {
    degree: "Secondary School Certificate (SSC / Dakhil)",
    institution: "Chor Holokhana Emdadia Alim Madrasah",
    period: "2016 – 2018",
    description:
      "Completed secondary education with a strong academic record and early interest in technology and problem-solving.",
  }
];

const certifications = [
  {
    title: "Next Level Web Development – Level 2",
    issuer: "Programming Hero",
    period: "April 2026",
  }
];

const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" }
];

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-8 bg-accent-brand" />
              Academic Background
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
              My <span className="text-accent-brand">Education</span>
            </h2>
            <p className="text-text-body text-sm sm:text-base leading-relaxed max-w-2xl">
              A timeline of my academic foundation that shaped my engineering mindset.
            </p>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative before:absolute before:left-[1.1rem] md:before:left-[1.2rem] before:top-4 before:bottom-4 before:w-0.5 before:bg-border/60">
          <div className="space-y-8 md:space-y-10">
            {educationItems.map((item, index) => (
              <motion.div 
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-14 group"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 w-9 h-9 md:w-10 md:h-10 rounded-2xl border border-border/60 bg-card flex items-center justify-center z-10 group-hover:border-accent-brand group-hover:bg-accent-brand transition-all duration-300">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-white transition-colors" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 bg-card/40 border border-border/60 rounded-2xl md:rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-brand/5 hover:border-accent-brand/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-heading font-extrabold text-foreground tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-bold text-foreground/60 mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-text-body/60 bg-background px-3 py-1 rounded-full border border-border/50 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-text-body/90 text-sm leading-relaxed mt-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}