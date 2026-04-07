export interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  liveLink: string;
  github_client: string;
  github_server?: string;
  challenges?: string;
  featured?: boolean;
}

export const projects: Project[] = [
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
    image: "/images/projects/TutorByte online tutoring platform homepage.png",
    description:
      "A full-featured online tutor booking platform where students can find tutors, book sessions, manage availability, and leave reviews with secure authentication.",
    liveLink: "#",
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
    image: "/images/projects/FoodHub homepage with vibrant food display.png",
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
    name: "Certificate Management System",
    stack: [
      "React",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/images/projects/Certificate management dashboard overview.png",
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
    image: "/images/projects/Medicine delivery app interface design.png",
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
    image: "/images/projects/Learn Together platform homepage preview.png",
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
    name: "AllStar Equipment Store",
    image: "/images/projects/Allstar Equipment sports gear collection.png",
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
    image: "/images/projects/Career advice infographic redesign.png",
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
