"use client";

import { motion } from "framer-motion";
import { ExternalLink, GithubIcon as Github, Info, Layers } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const projects = [
  {
    name: "TutorByte",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Better Auth",
    ],
    image: "/images/projects/tutorbyte.png",
    description:
      "A full-featured online tutor booking platform where students can find tutors, book sessions, manage availability, and leave reviews with secure authentication.",
    liveLink: "#", // add deployed link
    github_client: "https://github.com/abubakar308/tutorbyte-client",
    github_server: "https://github.com/abubakar308/tutorbyte-server",
    challenges:
      "Designed a scalable booking system with time-slot availability, role-based access (student, tutor, admin), and secure session handling using Better Auth and Prisma.",
  },
  {
    name: "FoodHub",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/images/projects/foodhub.png",
    description:
      "A multi-vendor meal ordering platform where users can browse meals, place orders, and track delivery while providers manage menus and orders through a dashboard.",
    liveLink: "https://foodhub-client-six.vercel.app/",
    github_client: "https://github.com/abubakar308/foodhub-client",
    github_server: "https://github.com/abubakar308/foodhub-server",
    challenges:
      "Handled complex relational data with Prisma, including provider-user mapping, order lifecycle management, and secure JWT-based authentication.",
    featured: true,
  },
  {
    name: "Certificate Application Management System",
    stack: [
      "React",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/images/projects/certificate.png",
    description:
      "A secure, role-based academic portal designed to automate certificate request workflows and approval processes for students and faculty.",
    liveLink:
      "https://certificate-management-system-front.vercel.app/",
    github_client:
      "https://github.com/City-University-BD/certificate-management-system-front-end",
    github_server:
      "https://github.com/City-University-BD/certificate-management-system-back-end",
    challenges:
      "Built a multi-level approval workflow system handling state transitions (Pending, Approved, Rejected) across different roles while maintaining data integrity.",
    featured: true,
  },
  {
    name: "MediVendor",
    stack: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
    image: "/images/projects/medivendor.png",
    description:
      "A medical e-commerce platform with secure payment integration, inventory tracking, and real-time order management.",
    liveLink: "https://medivendor-2b953.web.app/",
    github_client: "https://github.com/abubakar308/medivendor-client",
    github_server: "https://github.com/abubakar308/medivendor-server",
    challenges:
      "Implemented advanced product filtering and an admin dashboard with real-time stock synchronization using MongoDB.",
  },
  {
    name: "Learn Together",
    image: "/images/projects/learntogether.png",
    stack: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Firebase",
    ],
    description:
      "A tutor booking platform allowing users to explore tutors, book sessions, and manage learning progress with authentication.",
    liveLink: "https://online-tutor-booking-pla-5a98e.web.app",
    github_client:
      "https://github.com/abubakar308/learn-together-client",
    github_server:
      "https://github.com/abubakar308/learn-together-server",
    challenges:
      "Implemented protected routes and booking logic using React Router guards and authentication control.",
  },
  {
    name: "AllStar Equipment Online Store",
    image: "/images/projects/allstar.png",
    stack: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
    ],
    description:
      "A sports equipment marketplace with authentication, category filtering, and optimized checkout experience.",
    liveLink: "https://sport-equipment-online-store.web.app",
    github_client:
      "https://github.com/abubakar308/AllStar-Equipment-client",
    github_server:
      "https://github.com/abubakar308/AllStar-Equipment-server",
    challenges:
      "Optimized cart state management and authentication flow for consistent UI across devices.",
  },
  {
    name: "Career Advice",
    image: "/images/projects/career.png",
    stack: [
      "React",
      "React Router",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
      "Context API",
    ],
    description:
      "A platform for career growth offering resume tools, interview preparation, and coaching session booking.",
    liveLink: "https://career-advice-3eaf3.firebaseapp.com/",
    github_client:
      "https://github.com/abubakar308/career-addvice",
    github_server: "#",
    challenges:
      "Developed centralized state management using Context API for handling user data and booking sessions across multiple routes.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="space-y-4 max-w-2xl"
        >
          <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm">
            <span className="h-0.5 w-10 bg-accent-brand" />
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            Featured <span className="text-accent-brand">Projects</span>
          </h2>


          <p className="text-lg text-text-body leading-relaxed max-w-2xl">
            A selection of my recent works where I've balanced high-performance code with exceptional user experiences.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-2 border-border/40 shadow-sm shadow-black/5 hover:shadow-2xl overflow-hidden transition-all duration-500 bg-card">


                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">

                    <Button size="icon" className="bg-foreground text-background hover:bg-accent-brand hover:text-primary-foreground rounded-full shadow-lg">
                       <ExternalLink className="w-5 h-5" />
                    </Button>
                    <Button size="icon" className="bg-foreground text-background hover:bg-accent-brand hover:text-primary-foreground rounded-full shadow-lg">
                       <Github className="w-5 h-5" />
                    </Button>

                  </div>
                </div>
                
                <CardContent className="p-8 space-y-4">
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                         <Badge key={tag} variant="outline" className="bg-background/50 text-text-body border-border text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                           {tag}
                         </Badge>
                     ))}
                   </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-accent-brand transition-colors">
                     {project.title}
                   </h3>
                    <p className="text-text-body/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                </CardContent>

                <CardFooter className="p-8 pt-0 flex gap-4">
                    <Button variant="outline" size="sm" className="flex-1 border-border text-text-body hover:text-accent-brand hover:border-accent-brand rounded-full text-xs font-bold transition-all shadow-sm">
                      Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-accent-brand rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-accent-brand/20">
                      Live Demo
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center pt-8"
        >
          <Button variant="ghost" className="text-text-body hover:text-foreground group text-lg font-bold transition-all hover:bg-accent-brand/5 rounded-full px-8">
            Explore All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="w-5 h-5 ml-2" />
            </motion.span>
          </Button>

        </motion.div>
      </div>
    </section>
  );
}
