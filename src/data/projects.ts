export interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  liveLink: string;
  github_client: string;
  github_server?: string;
  challenges?: string[];
  highlights?: string[];
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
    liveLink: "https://tutorbyte.vercel.app/",
    github_client: "https://github.com/abubakar308/TutorByte-Frontend",
    github_server: "https://github.com/abubakar308/TutorByte-Backend",
    challenges: [
      "Implemented role-based auth (student, tutor, admin) with protected routes.",
      "Designed conflict-free time-slot booking logic with transactional safety.",
    ],
    highlights: [
      "End-to-end tutor discovery, booking, and review workflow.",
      "Availability management dashboard for tutors.",
    ],
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
    github_client: "https://github.com/abubakar308/FoodHub-Client",
    github_server: "https://github.com/abubakar308/FoodHub-server",
    challenges: [
      "Modeled multi-vendor order lifecycle and provider-user relations in Prisma.",
      "Secured API access with JWT and role-aware authorization.",
    ],
    highlights: [
      "Vendor dashboard for menu and order management.",
      "Real-time order progress tracking for customers.",
    ],
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
    challenges: [
      "Built a multi-level approval workflow across admin and faculty roles.",
      "Ensured consistent certificate state transitions with validation checks.",
    ],
    highlights: [
      "Automated certificate request and approval pipeline.",
      "Role-based access controls for secure operations.",
    ],
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
    challenges: [
      "Implemented inventory synchronization to keep stock states accurate.",
      "Optimized query-based filtering for large medicine catalogs.",
    ],
    highlights: [
      "Secure checkout and payment-ready purchase flow.",
      "Admin controls for product and order operations.",
    ],
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
    challenges: [
      "Protected booking routes with authentication-aware guards.",
      "Handled session-based tutor booking and schedule validation.",
    ],
    highlights: [
      "Tutor browsing with streamlined booking journey.",
      "Student-friendly flow for session and progress management.",
    ],
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
    challenges: [
      "Stabilized cart state across refresh and auth changes.",
      "Maintained consistent filtering and checkout behavior across devices.",
    ],
    highlights: [
      "Category-based shopping with responsive UX.",
      "Authentication-enabled personalized user flow.",
    ],
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
    challenges: [
      "Managed shared booking and user state across route transitions.",
      "Integrated auth-protected actions with client-side route guards.",
    ],
    highlights: [
      "Career resources for resume, interview, and coaching.",
      "Simple booking experience with clear call-to-actions.",
    ],
  },
];
