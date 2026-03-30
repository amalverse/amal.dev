// ─────────────────────────────────────────────────────────────────────────────
//  Central project data — edit this file to add / update your projects
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectData {
  title: string;
  tagline: string;
  description: string;
  coverImage?: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  liveLink?: string;
  githubLink?: string;
  // used by the Projects grid on the homepage
  slug: string;
  image: string;        // same as coverImage — alias for the card component
  category: "Full-Stack" | "Frontend" | "Backend";
  tags: string[];
}

export const projects: ProjectData[] = [
  {
    title: "ShopVerse",
    tagline: "AI-powered full-stack e-commerce platform with secure payments.",
    description:
      "ShopVerse is a production-ready full-stack e-commerce platform built with the MERN stack and enhanced with Google Gemini AI. It delivers a complete shopping experience with real-time product discovery, secure Stripe payments, and an integrated AI assistant for intelligent customer interaction.",
    slug: "shopverse",
    image: "/image/shop-verse-full-stack-e-commerce-project.png",
    coverImage: "/image/shop-verse-full-stack-e-commerce-project.png",
    category: "Full-Stack",
    tags: ["Full-Stack", "E-commerce", "MERN", "AI", "Stripe", "JWT"],
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Stripe API",
      "Google Gemini API",
      "Swagger (OpenAPI)"
    ],
    features: [
      "Built full-stack e-commerce system with product browsing, cart, and order management",
      "Integrated Stripe payment gateway with secure checkout and webhook handling",
      "Implemented AI chatbot using Google Gemini for real-time customer assistance",
      "Developed role-based admin dashboard for product and order control",
      "Designed scalable REST API with Swagger documentation",
    ],
    challenges: [
      "Handling secure Stripe webhook events and payment verification",
      "Managing global state across cart, auth, and API layers",
      "Integrating AI chatbot with real-time product context",
    ],
    learnings: [
      "Deep understanding of full-stack architecture using MERN",
      "Hands-on experience with payment gateway integration (Stripe)",
      "Learned API design, documentation, and scalable backend patterns",
    ],
    liveLink: "https://shopverse-five-liard.vercel.app",
    githubLink: "https://github.com/amalverse/ShopVerse",
  },
  {
    title: "Mindora.ai",
    tagline: "AI-powered mental wellness platform with real-time analytics.",
    description:
      "Mindora.ai is a full-stack mental wellness platform that enables users to track moods, journal thoughts, and interact with an AI-powered assistant. It combines real-time analytics, secure authentication, and conversational AI to deliver personalized mental health insights.",
    slug: "mindora-ai",
    image: "/image/mindora-ai-project.png",
    coverImage: "/image/mindora-ai-project.png",
    category: "Full-Stack",
    tags: ["Full-Stack", "AI", "Mental Health", "Analytics", "OAuth", "Security"],
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "Recharts",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "OAuth 2.0 (Google)",
      "Passport.js",
      "Google Gemini API",
      "Nodemailer",
      "Helmet",
      "Express Rate Limit",
      "Swagger"
    ],
    features: [
      "Built AI chatbot with Google Gemini for real-time mental wellness conversations",
      "Implemented mood tracking, journaling, and analytics dashboard",
      "Integrated OAuth 2.0 (Google) with JWT-based authentication",
      "Developed secure REST APIs with rate limiting and validation",
      "Designed interactive charts for mood insights using Recharts",
    ],
    challenges: [
      "Handling real-time AI responses and maintaining conversation context",
      "Designing secure authentication with JWT and OAuth together",
      "Managing complex state across multiple features (chat, mood, journal)",
    ],
    learnings: [
      "Strong understanding of authentication systems (JWT + OAuth)",
      "Experience building AI-powered applications with real-world use cases",
      "Learned to design scalable and secure backend systems",
    ],
    liveLink: "https://mindora-ai.vercel.app/",
    githubLink: "https://github.com/amalverse/Mindora.ai",
  },
  {
    title: "BingeHub.app",
    tagline: "Movie discovery platform with authentication and watchlist.",
    description:
      "BingeHub is a full-stack entertainment platform that allows users to discover movies and TV shows using TMDB API, manage personalized watchlists, and authenticate securely using JWT and OAuth.",
    slug: "bingehub",
    image: "/image/bingehub-project.png",
    coverImage: "/image/bingehub-project.png",
    category: "Full-Stack",
    tags: ["Full-Stack", "Movies", "API Integration", "OAuth", "JWT"],
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Axios",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Google OAuth",
      "Nodemailer",
      "TMDB API"
    ],
    features: [
      "Integrated TMDB API for real-time movie and TV data",
      "Implemented JWT and OAuth authentication system",
      "Built watchlist/bookmark feature with persistent storage",
      "Developed responsive UI with smooth navigation",
      "Added email verification and password reset system",
    ],
    challenges: [
      "Handling third-party API data efficiently",
      "Managing authentication flows with JWT and OAuth",
      "Designing scalable bookmark system for users",
    ],
    learnings: [
      "Experience with external API integration (TMDB)",
      "Learned authentication flows including OAuth",
      "Improved frontend performance and UI design skills",
    ],
    liveLink: "https://entertainment-app-three-jet.vercel.app/",
    githubLink: "https://github.com/amalverse/BingeHub.app",
  },
  {
    title: "AI Document Orchestrator",
    tagline: "AI-driven document processing and automation pipeline.",
    description:
      "An AI-powered application that extracts structured data from documents using Groq (Llama 3), and automates workflows through n8n to trigger email notifications. Designed as an end-to-end automation pipeline from file upload to AI processing and delivery.",
    slug: "ai-powered-document-orchestrator",
    image: "/image/ai-powered-document-orchestrator-project.png",
    coverImage: "/image/ai-powered-document-orchestrator-project.png",
    category: "Full-Stack",
    tags: ["Full-Stack", "AI", "Automation", "n8n", "Document Processing"],
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "Multer",
      "pdf-parse",
      "Groq API (Llama 3)",
      "n8n",
      "Gmail API"
    ],
    features: [
      "Extracted structured data from PDF and text documents using AI",
      "Integrated Groq Llama 3 for fast document analysis",
      "Automated workflows using n8n webhooks",
      "Implemented email automation with Gmail integration",
      "Built end-to-end pipeline from upload → AI → automation",
    ],
    challenges: [
      "Handling file parsing for multiple document formats",
      "Ensuring structured AI output from unstructured data",
      "Integrating external automation tools (n8n) reliably",
    ],
    learnings: [
      "Learned real-world AI pipeline architecture",
      "Gained experience with workflow automation tools",
      "Improved backend integration with external services",
    ],
    liveLink: "https://ai-powered-document-orchestrator.vercel.app/",
    githubLink: "https://github.com/amalverse/AI-Powered-Document-Orchestrator",
  },
];

/** Keyed lookup used by the dynamic route */
export const projectsMap: Record<string, ProjectData> = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);
