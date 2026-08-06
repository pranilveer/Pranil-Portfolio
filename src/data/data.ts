import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  location: string;
  highlights: string[];
  dotColor: string;
}

export interface Stat {
  title: string;
  label: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
  tags: string[];
  liveDemo: string;
  github: string;
  caseStudy: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  description: string;
  tech: string[];
}

export const contact = {
  email: "veerpranil@gmail.com",
  phone: "+91 7559155588",
  location: "Kolhapur, Maharashtra",
  github: "https://github.com/pranilveer",
  linkedin: "https://linkedin.com/in/pranilveer",
  resume: "/resume.pdf",
};

export const navItems: string[] = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export const hero = {
  badge: "Hello 👋",
  prefix: "I'm",
  name: "Pranil",
  lastName: "Veer,",
  headline: "Full Stack Software Developer",
  intro:
    "Full Stack Software Developer with experience building scalable web applications using React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL and AWS. Passionate about creating high-performance products with clean architecture and exceptional user experiences.",
  quoteLine1: "I don't just write code.",
  quoteLine2: "I build products that people actually use.",
  years: "2+ Years",
  experienceLabel: "Experience",
};

export const servicesData: CardData[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible and high-performance interfaces with a modern React ecosystem.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable REST APIs with robust authentication, authorization and clean business logic.",
    tech: ["Node.js", "Express", "REST APIs", "Authentication", "Authorization"],
  },
  {
    title: "Database Design",
    description:
      "Modeling reliable data layers with MongoDB and PostgreSQL, including geospatial queries with PostGIS.",
    tech: ["MongoDB", "PostgreSQL", "PostGIS"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying and scaling applications on AWS with Docker, CI/CD pipelines and Vercel.",
    tech: ["AWS", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "AI Integration",
    description:
      "Shipping intelligent features powered by OpenAI APIs, OCR, vector search and semantic search.",
    tech: ["OpenAI API", "OCR", "Vector Search", "Semantic Search"],
  },
  {
    title: "Performance Optimization",
    description:
      "Tuning APIs, databases and frontends for speed, Core Web Vitals and maintainable architecture.",
    tech: [
      "API optimization",
      "Database optimization",
      "Core Web Vitals",
      "Clean Architecture",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Walstar Technologies Pvt. Ltd",
    duration: "April 2025 – Present",
    role: "Jr. Software Developer",
    location: "Kolhapur",
    highlights: [
      "Built production-grade web applications using React, Next.js and TypeScript.",
      "Developed scalable backend APIs using Node.js and Express.",
      "Optimized databases and backend performance.",
      "Worked in Agile teams using GitHub, Bitbucket and Jira.",
      "Built reusable UI components using MUI and Tailwind CSS.",
    ],
    dotColor: "bg-[#FD853A]",
  },
];

export const stats: Stat[] = [
  { title: "5+", label: "Production Applications" },
  { title: "2+", label: "Years Experience" },
  { title: "Modern", label: "Full Stack Technologies" },
  { title: "AI", label: "Powered Solutions" },
];

export const buttons: string[] = [
  "All",
  "AI",
  "Full Stack",
  "Cloud",
  "Web Apps",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Mail,
    name: "veerpranil@gmail.com",
  },
  {
    icon: Phone,
    name: "+91 7559155588",
  },
  {
    icon: MapPin,
    name: "Kolhapur, Maharashtra",
  },
];

export const skills: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "OpenAI",
  "REST APIs",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "GitHub",
  "CI/CD",
  "OCR",
  "Vector Search",
  "Semantic Search",
  "System Design",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "Read More",
    name: "Pranil Veer",
    date: "12 Jan, 2026",
    title: "Building Scalable React Applications",
  },
  {
    image: "/Frame 60.svg",
    button: "Read More",
    name: "Pranil Veer",
    date: "08 Feb, 2026",
    title: "Next.js Performance Optimization",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Read More",
    name: "Pranil Veer",
    date: "15 Mar, 2026",
    title: "How AI is Changing Full Stack Development",
  },
  {
    image: "/Frame 26.svg",
    button: "Read More",
    name: "Pranil Veer",
    date: "20 Apr, 2026",
    title: "Building Production REST APIs with Node.js",
  },
  {
    image: "/Frame 68.svg",
    button: "Read More",
    name: "Pranil Veer",
    date: "02 Jun, 2026",
    title: "Docker for Modern Web Developers",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/Frame 26.svg",
    title: "Bynaus AI",
    href: "#",
    desc: "AI-powered construction management platform featuring OCR, vector search, voice reporting and a microservices architecture.",
    tags: ["React", "Node.js", "AWS", "Docker", "MongoDB", "PostGIS", "FastAPI"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#",
  },
  {
    image: "/Frame 60.svg",
    title: "Lerbee",
    href: "#",
    desc: "Global shopping platform with automation features, product management and Telegram integration.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Telegram Bot"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#",
  },
  {
    image: "/Rectangle 6.svg",
    title: "Granulr",
    href: "#",
    desc: "AI-powered habit tracking application integrating physical notebooks with intelligent digital tracking.",
    tags: ["React", "TypeScript", "Node", "MongoDB", "OpenAI"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#",
  },
];

export const reviews: Review[] = [
  {
    name: "Rajesh Kulkarni",
    role: "Product Manager",
    rating: 5,
    text: "Pranil transformed our construction management workflows with an AI-powered platform. The OCR and vector search features he built saved our teams hours every single day.",
  },
  {
    name: "Sarah Mitchell",
    role: "Startup Founder",
    rating: 5,
    text: "Pranil built our global shopping platform from the ground up. Reliable, scalable APIs and an intuitive storefront — our users love the experience.",
  },
  {
    name: "Aditya Deshmukh",
    role: "Engineering Lead",
    rating: 5,
    text: "The AI-powered habit tracking app he developed is beautifully engineered. Clean code, thoughtful architecture and a fast, responsive UI throughout.",
  },
];
