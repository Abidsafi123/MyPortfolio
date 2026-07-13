export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: "Full-time" | "Freelance" | "Contract";
  description: string;
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack MERN Developer & AI Engineer",
    organization: "Freelance / Independent Contractor",
    period: "2023 — Present",
    type: "Freelance",
    description:
      "Designing and shipping full-stack products end-to-end for startups and small businesses — from data model to deployed UI — with AI features baked in from day one.",
    achievements: [
      "Delivered AI-powered SaaS features (chat, RAG, summarization) for multiple client products",
      "Built REST APIs and MongoDB data layers handling production traffic",
      "Owned deployment pipelines end-to-end on Vercel and Docker-based hosts",
    ],
  },
  {
    role: "Automation Engineer",
    organization: "Independent / Client Projects",
    period: "2023 — Present",
    type: "Freelance",
    description:
      "Designing n8n-based automation systems that connect CRMs, messaging platforms, spreadsheets, and AI agents into workflows that run without manual intervention.",
    achievements: [
      "Automated lead intake, notification, and reporting workflows across WhatsApp, email & Sheets",
      "Integrated AI agents into business processes to handle repetitive decision-making",
      "Reduced manual operational work for clients through webhook-driven pipelines",
    ],
  },
  {
    role: "Software Engineering Foundations",
    organization: "Self-Directed & Project-Based Learning",
    period: "2021 — 2023",
    type: "Contract",
    description:
      "Built a strong foundation across the MERN stack, authentication systems, and API design through progressively larger real-world projects.",
    achievements: [
      "Built role-based, multi-portal systems with secure authentication",
      "Developed a systematic approach to problem solving and production-quality code",
      "Cultivated a deep interest in AI systems and applied machine learning",
    ],
  },
];
