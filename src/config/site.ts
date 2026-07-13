export const siteConfig = {
  name: "Abid Safi",
  initials: "AS",
  title:
    "Full-Stack MERN Developer, AI Application Developer & Automation Engineer",
  shortTitle: "MERN Developer · AI Engineer · Automation Engineer",
  roles: [
    "Full-Stack MERN Developer",
    "AI Application Developer",
    "Automation Engineer",
  ],
  description:
    "I build modern AI-powered applications, scalable web platforms, and intelligent automation systems that solve real-world problems.",
  url: "https://abidsafivercel.com",
  email: "abidkhansafimd1002@gmail.com",
  phone: "+92 313 9594547",
  location: "Peshawar, Pakistan",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/abidsafi123",
    linkedin: "https://www.linkedin.com/in/abid-khan",
    facebook: "https://www.facebook.com/abid.safi.98284",
    whatsapp: "https://wa.me/923139594547",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
