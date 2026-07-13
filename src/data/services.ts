import {
  Code2,
  BrainCircuit,
  Workflow,
  Plug,
  Database,
  Gauge,
  LayoutDashboard,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web applications built on the MERN stack — from data modeling to polished, production-ready UI.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Embedding LLMs, RAG pipelines, and intelligent agents directly into your product to create real user value.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "n8n-powered workflows that connect your tools and eliminate repetitive manual work across your business.",
  },
  {
    icon: Plug,
    title: "REST APIs",
    description:
      "Secure, well-documented, and scalable APIs designed to power web, mobile, and third-party integrations.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient MongoDB schemas and data architecture that stay fast and maintainable as your product grows.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Profiling and tuning frontend and backend systems for speed, Core Web Vitals, and a smoother user experience.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    description:
      "Data-rich admin panels and analytics dashboards with role-based access and real-time insights.",
  },
  {
    icon: Rocket,
    title: "SaaS Development",
    description:
      "Taking a SaaS idea from zero to a deployed, billable product — architecture, auth, payments, and UI included.",
  },
];
