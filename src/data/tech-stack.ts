import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiLangchain,
  SiN8N,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { Boxes, Zap, Webhook, KeyRound, Brain, Database } from "lucide-react";

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    icon: IconType | typeof Boxes;
  }[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    description: "Crafting fast, accessible, pixel-perfect interfaces.",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    description: "Building reliable, scalable server-side systems.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: Boxes },
      { name: "Authentication", icon: SiJsonwebtokens },
    ],
  },
  {
    category: "AI",
    description: "Shipping products powered by LLMs and retrieval.",
    items: [
      { name: "OpenAI API", icon: Brain },
      { name: "LLMs", icon: SiLangchain },
      { name: "RAG", icon: KeyRound },
      { name: "Vector Databases", icon: Database },
      { name: "Prompt Engineering", icon: Zap },
    ],
  },
  {
    category: "Automation",
    description: "Wiring systems together so businesses run themselves.",
    items: [
      { name: "n8n", icon: SiN8N },
      { name: "APIs", icon: Boxes },
      { name: "Webhooks", icon: Webhook },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Deployment", icon: SiVercel },
    ],
  },
];
