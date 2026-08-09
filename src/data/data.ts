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
  imageSrc?: string;
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
    "Full Stack Developer building scalable web apps with React, Next.js, Node.js and AWS focused on clean architecture and great user experiences.",
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
    imageSrc: "/frontend_development.svg",
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable REST APIs with robust authentication, authorization and clean business logic.",
    tech: ["Node.js", "Express", "REST APIs", "Authentication", "Authorization"],
    imageSrc: "/backend_development.svg",
  },
  {
    title: "Database Design",
    description:
      "Modeling reliable data layers with MongoDB and PostgreSQL, including geospatial queries with PostGIS.",
    tech: ["MongoDB", "PostgreSQL", "PostGIS"],
    imageSrc: "/database_design.svg",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying and scaling applications on AWS with Docker, CI/CD pipelines and Vercel.",
    tech: ["AWS", "Docker", "CI/CD", "Vercel"],
    imageSrc: "/cloud_devops.svg",
  },
  {
    title: "AI Integration",
    description:
      "Shipping intelligent features powered by OpenAI APIs, OCR, vector search and semantic search.",
    tech: ["OpenAI API", "OCR", "Vector Search", "Semantic Search"],
    imageSrc: "/ai_integration.svg",
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
    imageSrc: "/performance_optimization.svg",
  },
];

export const experiences: Experience[] = [
  {
    company: "Walstar Technologies Pvt. Ltd",
    duration: "Apr 2025 – Present",
    role: "Junior Software Engineer",
    location: "Kolhapur, Maharashtra",
    highlights: [
      "Develop and maintain scalable full-stack web applications using React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL.",
      "Build responsive and user-friendly interfaces using Material UI, Tailwind CSS, HTML, and CSS.",
      "Contribute to AI-powered products by integrating LLM-based features and intelligent automation workflows.",
      "Collaborate in Agile environments using GitHub, Bitbucket, and Jira, with cloud deployment and monitoring on AWS, Vercel, and Sentry.",
      "Work on microservices-based architectures and optimize performance, database queries, and user experience across web platforms.",
    ],
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Franchise World",
    duration: "Aug 2024 – Mar 2025",
    role: "Frontend Developer Intern",
    location: "Pune",
    highlights: [
      "Developed and deployed full-stack web applications using React.js, Node.js and Flutter.",
      "Led a team of developers, managing task distribution to meet project deadlines consistently.",
      "Implemented web design best practices, resulting in a 25% increase in user engagement.",
    ],
    dotColor: "bg-[#344054]",
  },
  {
    company: "Cuvette Tech Pvt. Ltd.",
    duration: "Aug 2023 – Apr 2024",
    role: "Fullstack Web Development + DSA Intern",
    location: "Bengaluru",
    highlights: [
      "Completed a 6-month Fullstack Web Development + DSA Internship Training Program at Cuvette Tech Pvt. Ltd.",
      "Trained under top alumni from IIT Kharagpur, Amazon, Myntra and Google.",
      "Built fullstack web applications while strengthening data structures and algorithms skills.",
    ],
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "EPAM Systems",
    duration: "Jan 2023 – Apr 2023",
    role: "Frontend Industry Internship",
    location: "Punjab, India",
    highlights: [
      "Completed a frontend developer industry training internship at EPAM Systems.",
      "Learned the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built multiple MERN stack projects as part of the internship.",
    ],
    dotColor: "bg-[#344054]",
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
    image: "/bynaus_dashboard.svg",
    title: "Bynaus AI",
    href: "#",
    desc: "AI-powered construction management platform featuring OCR, vector search, voice reporting and a microservices architecture.",
    tags: ["React", "Node.js", "AWS", "Docker", "MongoDB", "PostGIS", "FastAPI"],
    liveDemo: "https://app.bynaus.ai/",
    github: "#",
    caseStudy: "#",
  },
  {
    image: "/lerbee_live_shopping.svg",
    title: "Lerbee",
    href: "#",
    desc: "Global shopping platform with automation features, product management and Telegram integration.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Telegram Bot"],
    liveDemo: "https://www.lerbee.com/",
    github: "#",
    caseStudy: "#",
  },
  {
    image: "/granulr_homepage.svg",
    title: "Granulr",
    href: "#",
    desc: "AI-powered habit tracking application integrating physical notebooks with intelligent digital tracking.",
    tags: ["React", "TypeScript", "Node", "MongoDB", "OpenAI"],
    liveDemo: "https://www.livegranulr.com/",
    github: "#",
    caseStudy: "#",
  },
];

export const reviews: Review[] = [
  {
    name: "Vishal Randive",
    role: "Manager, Walstar Technologies",
    rating: 5,
    text: "Pranil consistently delivers high-quality full-stack solutions. His work on React, Next.js and Node.js applications has been reliable, well-architected and production-ready.",
  },
  {
    name: "Prathamesh Patil",
    role: "QA Engineer",
    rating: 5,
    text: "Having worked closely with Pranil, I can say he writes clean, testable code with great attention to edge cases. He is a fantastic teammate and my best friend in the industry.",
  },
  {
    name: "Corey Cawthron",
    role: "Startup Founder, Granulr",
    rating: 5,
    text: "Pranil built our AI-powered habit tracking platform beautifully. Clean code, thoughtful architecture and a fast, responsive UI throughout. He is a joy to work with.",
  },
  {
    name: "Vikas Vitekari",
    role: "Team Lead",
    rating: 5,
    text: "Pranil is a dependable developer who tackles complex features with confidence. His strong grasp of the full stack and performance optimization made our sprints smoother.",
  },
  {
    name: "Sana Jamadar",
    role: "Assistant Manager, Walstar Technologies",
    rating: 5,
    text: "Pranil is proactive, detail-oriented and technically sharp. He consistently meets deadlines and elevates the quality of every project he contributes to.",
  },
];
