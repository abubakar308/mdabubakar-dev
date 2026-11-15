"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const visibleStack = project.stack.slice(0, 3);
  const extraCount = project.stack.length - 3;
  const isLive = project.liveLink && project.liveLink !== "#";

  // ইমেজ স্লাইডার লজিক
  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // অটো স্লাইডিং (মাউস হোভার করলে থেমে যাবে)
  useEffect(() => {
    if (projectImages.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 3000); // প্রতি ৩ সেকেন্ডে পরিবর্তন হবে
    
    return () => clearInterval(interval);
  }, [projectImages.length, isHovered]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card 
        className="group relative h-full flex flex-col border border-border/60 bg-card shadow-sm hover:shadow-xl hover:border-accent-brand/30 transition-all duration-300 rounded-[1.5rem] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Project Image Slider */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted flex-shrink-0 border-b border-border/40 group/slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={projectImages[currentImageIndex]}
                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  e.currentTarget.src = "/images/project-fallback.jpg"; 
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Live/Source Badge */}
          <div className="absolute top-3 left-3 z-10 flex gap-2 pointer-events-none">
            {isLive ? (
              <Badge className="bg-accent-brand/90 backdrop-blur-md text-white border-none text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                Live
              </Badge>
            ) : (
              <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                Source Code
              </Badge>
            )}
          </div>

          {/* Slider Controls (শুধুমাত্র একাধিক ছবি থাকলে দেখাবে) */}
          {projectImages.length > 1 && (
            <>
              {/* Prev/Next Buttons (Hover করলে দেখা যাবে) */}
              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 pointer-events-none">
                <button onClick={prevImage} className="p-1.5 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition-all pointer-events-auto">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextImage} className="p-1.5 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition-all pointer-events-auto">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                {projectImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentImageIndex ? "bg-white w-4" : "bg-white/50 w-1.5"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Content */}
        <CardContent className="p-5 flex flex-col flex-grow space-y-3">
          <div className="space-y-1.5">
            <h3 className="text-lg font-heading font-extrabold text-foreground group-hover:text-accent-brand transition-colors tracking-tight leading-tight">
              {project.name}
            </h3>
            <p className="text-text-body/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            {visibleStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-background text-text-body/70 font-semibold text-[10px] px-2 py-0.5 rounded-md border-border/50"
              >
                {tech}
              </Badge>
            ))}
            {extraCount > 0 && (
              <Badge
                variant="outline"
                className="bg-accent-brand/5 text-accent-brand border-accent-brand/20 text-[10px] font-bold px-2 py-0.5 rounded-md"
              >
                +{extraCount}
              </Badge>
            )}
          </div>
        </CardContent>

        {/* Footer Actions */}
        <CardFooter className="p-5 pt-0 flex flex-col gap-2">
          <button
            onClick={onOpen}
            className="w-full h-10 bg-accent-brand/10 text-accent-brand hover:bg-accent-brand hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>

          <div className="grid grid-cols-2 gap-2 w-full">
            <a 
              href={isLive ? project.liveLink : "#"} 
              target={isLive ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center h-9 rounded-xl border border-border/60 text-[11px] font-bold transition-all ${
                isLive 
                  ? "text-text-body hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-brand/5" 
                  : "opacity-50 cursor-not-allowed text-text-body/50"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              {isLive ? "Live Demo" : "Not Live"}
            </a>
            
            <a 
              href={project.github_client} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 rounded-xl border border-border/60 text-text-body text-[11px] font-bold hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-brand/5 transition-all"
            >
              <Github className="w-3.5 h-3.5 mr-1.5" />
              Code
            </a>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}