export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  gradient: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ai-financial-coach",
    title: "AI Financial Coach",
    category: "AI · FinTech",
    description:
      "AI-powered financial advisor that helps users track spending, analyze transactions, hit savings goals, and receive personalized financial recommendations.",
    highlights: [
      "Conversational insights over transaction history via LLM",
      "Automated spending categorization & savings-goal tracking",
      "Bank-account sync with real-time transaction analysis",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "OpenAI", "Plaid"],
    gradient: "from-blue-500 to-violet-500",
    featured: true,
  },
  {
    slug: "ai-news-analyzer",
    title: "AI News Analyzer",
    category: "AI · Media Intelligence",
    description:
      "Analyzes English and Urdu news articles to detect misinformation, classify credibility, identify political bias, and generate AI-written summaries.",
    highlights: [
      "Bilingual (English & Urdu) NLP pipeline",
      "Misinformation & credibility scoring",
      "Political bias classification with AI-generated summaries",
    ],
    tech: ["Next.js", "Python", "OpenAI", "LLMs", "MongoDB"],
    gradient: "from-violet-500 to-fuchsia-500",
    featured: true,
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "Full Stack · ERP",
    description:
      "Complete school ERP with dedicated Admin, Teacher, Student, Parent, Coordinator, and Computer Operator portals.",
    highlights: [
      "Attendance, results, fees & examinations in one platform",
      "Role-based access control across six distinct portals",
      "Automated report generation for staff and parents",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
    gradient: "from-cyan-500 to-blue-500",
    featured: true,
  },
  {
    slug: "workflow-automation-platform",
    title: "Workflow Automation Platform",
    category: "Automation",
    description:
      "Business workflow automation platform built on n8n, connecting email, WhatsApp, Google Sheets, CRMs, and AI agents into a single automated pipeline.",
    highlights: [
      "End-to-end automation across email, WhatsApp & CRM",
      "AI agents embedded directly into business workflows",
      "Webhook-driven triggers with Google Sheets sync",
    ],
    tech: ["n8n", "APIs", "Webhooks", "Docker", "AI Agents"],
    gradient: "from-emerald-500 to-cyan-500",
    featured: true,
  },
];
