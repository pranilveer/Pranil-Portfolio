export const siteUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
})();

export const siteConfig = {
  name: "Pranil Veer",
  title: "Pranil Veer | Full Stack Software Developer",
  description:
    "Portfolio of Pranil Veer, a Full Stack Software Developer building production-grade React, Next.js, Node.js and AI-powered applications.",
  jobTitle: "Full Stack Software Developer",
  location: "Kolhapur, Maharashtra, India",
  email: "veerpranil@gmail.com",
  phone: "+91 7559155588",
  twitterHandle: "@pranilveer",
  keywords: [
    "Pranil Veer",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "AI Developer",
    "AI Integration",
    "MERN Stack",
    "Web Development",
    "Portfolio",
    "Kolhapur",
    "India",
  ],
  socials: [
    "https://github.com/pranilveer",
    "https://linkedin.com/in/pranilveer",
    "https://x.com/pranilveer",
    "https://www.instagram.com/veerpranil",
    "https://www.youtube.com/@veerpranil",
    "https://leetcode.com/pranilveer",
  ],
} as const;
