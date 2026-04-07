"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Server } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasServerRepo = project.github_server && project.github_server !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className="h-full border-2 border-border/40 shadow-sm shadow-black/5 hover:shadow-2xl overflow-hidden transition-all duration-500 bg-card flex flex-col relative">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-accent-brand text-primary-foreground border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent-brand/20">
              Featured
            </Badge>
          </div>
        )}

        {/* Project Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/600x400/0F172A/06B6D4?text=${encodeURIComponent(project.name)}`;
            }}
          />
          {/* Overlay with Quick Links */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm z-10">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" className="bg-foreground text-background hover:bg-accent-brand hover:text-primary-foreground rounded-full shadow-lg">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </motion.div>
            </a>
            <a href={project.github_client} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" className="bg-foreground text-background hover:bg-accent-brand hover:text-primary-foreground rounded-full shadow-lg">
                  <Github className="w-5 h-5" />
                </Button>
              </motion.div>
            </a>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 space-y-4 flex-grow">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="bg-background/50 text-text-body/80 border-border/60 text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 hover:bg-accent-brand hover:text-primary-foreground hover:border-accent-brand transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="outline" className="bg-background/50 text-text-body/60 border-border/40 text-[9px] font-bold px-2 py-0.5">
                +{project.stack.length - 4}
              </Badge>
            )}
          </div>

          <div>
            <h3 className="text-xl font-heading font-extrabold text-foreground group-hover:text-accent-brand transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-text-body/70 text-sm leading-relaxed mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>
        </CardContent>

        {/* Footer with Main Actions */}
        <CardFooter className="p-6 pt-0 grid grid-cols-2 gap-3">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="col-span-1">
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-accent-brand rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-accent-brand/20 hover:scale-[1.02] active:scale-[0.98]">
              Live Demo
            </Button>
          </a>
          
          <div className={cn("grid gap-2", hasServerRepo ? "grid-cols-2" : "grid-cols-1")}>
             <a href={project.github_client} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full border-border text-text-body hover:text-accent-brand hover:border-accent-brand rounded-full text-[10px] font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]" title="Client Repo">
                <Github className="w-3.5 h-3.5" />
                {!hasServerRepo && <span className="ml-2">Source</span>}
              </Button>
            </a>
            {hasServerRepo && (
              <a href={project.github_server} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full border-border text-text-body hover:text-accent-brand hover:border-accent-brand rounded-full text-[10px] font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]" title="Server Repo">
                  <Server className="w-3.5 h-3.5" />
                </Button>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
