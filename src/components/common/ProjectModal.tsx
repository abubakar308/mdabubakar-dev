"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Server,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const hasServerRepo = project?.github_server && project.github_server !== "#";

  // ESC key close & Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      
      // Focus Trap logic
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      // Modal open হলে body scroll lock
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            ref={modalRef}
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-background/80 border border-border/60 text-text-body hover:text-foreground hover:bg-card transition-all shadow-sm backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto flex-1 min-h-0" data-lenis-prevent>
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.src = "/images/project-fallback.jpg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white leading-tight drop-shadow-md">
                    {project.name}
                  </h2>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 md:p-7 space-y-6">
                <section>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent-brand mb-2">Overview</h3>
                  <p className="text-text-body text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </section>

                {project.highlights && project.highlights.length > 0 && (
                  <section>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent-brand mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-text-body">
                          <CheckCircle2 className="w-4 h-4 text-accent-brand flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent-brand mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-card border-border text-text-body text-xs px-2.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>

                {project.challenges && project.challenges.length > 0 && (
                  <section>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent-brand mb-3">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-text-body">
                          <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <div className="h-px bg-border/60" />

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full h-10 bg-accent-brand hover:bg-accent-brand/90 text-white rounded-xl font-bold text-xs shadow-sm">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                  </a>
                  <a href={project.github_client} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full h-10 rounded-xl font-bold text-xs border-border hover:border-accent-brand hover:text-accent-brand">
                      <Github className="w-4 h-4 mr-2" /> {hasServerRepo ? "Client Repo" : "GitHub"}
                    </Button>
                  </a>
                  {hasServerRepo && (
                    <a href={project.github_server} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full h-10 rounded-xl font-bold text-xs border-border hover:border-accent-brand hover:text-accent-brand">
                        <Server className="w-4 h-4 mr-2" /> Server Repo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}