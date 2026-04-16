"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const visibleStack = project.stack.slice(0, 4);
  const extraCount = project.stack.length - 4;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Card className="group relative h-full overflow-hidden flex flex-col border border-border/60 bg-card shadow-sm hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:border-accent-brand/40 transition-all duration-500">

          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden bg-muted flex-shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400/0F172A/06B6D4?text=${encodeURIComponent(project.name)}`;
              }}
            />
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>

          {/* Card Content */}
          <CardContent className="p-5 space-y-3 flex-grow">
            {/* Project Name */}
            <h3 className="text-base font-heading font-extrabold text-foreground group-hover:text-accent-brand transition-colors duration-300 leading-snug">
              {project.name}
            </h3>

            {/* Description — 2 lines max */}
            <p className="text-text-body/80 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {visibleStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-background/60 text-text-body/75 border-border/60 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
              {extraCount > 0 && (
                <Badge
                  variant="outline"
                  className="bg-accent-brand/8 text-accent-brand border-accent-brand/30 text-[10px] font-bold px-2 py-0.5"
                >
                  +{extraCount} more
                </Badge>
              )}
            </div>
          </CardContent>

          {/* Footer Buttons */}
          <CardFooter className="p-5 pt-0 flex flex-col gap-2">
            {/* Primary CTA */}
            <Button
              onClick={() => setModalOpen(true)}
              className="w-full h-10 bg-accent-brand text-white hover:bg-accent-brand/90 rounded-xl text-sm font-bold shadow-md shadow-accent-brand/20 hover:shadow-lg hover:shadow-accent-brand/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>

            {/* Secondary: Live Demo + GitHub */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-9 rounded-xl border-border/70 text-text-body hover:text-accent-brand hover:border-accent-brand/60 hover:bg-accent-brand/5 text-xs font-bold transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Live Demo
                </Button>
              </a>
              <a
                href={project.github_client}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-9 rounded-xl border-border/70 text-text-body hover:text-accent-brand hover:border-accent-brand/60 hover:bg-accent-brand/5 text-xs font-bold transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5 mr-1.5" />
                  GitHub
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Project Details Modal */}
      <ProjectModal
        project={modalOpen ? project : null}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
