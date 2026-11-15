"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import ProjectModal from "@/components/common/ProjectModal";
import Reveal from "@/components/common/Reveal";
import { Project } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  // পেজ পরিবর্তন হলে যেন অটোমেটিকভাবে স্ক্রল হয়ে সেকশনের ওপরে আসে
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const section = document.getElementById("projects");
    if (section) {
      const yOffset = -90; 
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-14">

        {/* Header */}
        <Reveal>
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <span className="h-0.5 w-8 bg-accent-brand" />
              My Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
              My Completed <span className="text-accent-brand">Projects</span>
            </h2>
            <p className="text-text-body text-sm sm:text-base leading-relaxed max-w-xl">
              Real-world, full-stack applications built with modern technologies
              — from concept to production.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {paginatedProjects.map((project, idx) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              index={idx} 
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty State */}
        {paginatedProjects.length === 0 && (
          <div className="text-center py-20 text-text-body">
            No projects found.
          </div>
        )}

        {/* Pagination (Mobile Optimized) */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-border/40">
            <Button
              variant="outline"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-xl px-4 h-10 text-xs font-bold w-full sm:w-auto"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            
            <span className="text-sm font-semibold text-text-body">
              Page <span className="text-foreground">{currentPage}</span> of {totalPages}
            </span>

            <Button
              variant="outline"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-xl px-4 h-10 text-xs font-bold w-full sm:w-auto"
            >
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>

      {/* Shared Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}