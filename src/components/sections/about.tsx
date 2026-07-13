import Image from "next/image";
import { Bot, Sparkles, Target, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { siteConfig } from "@/config/site";

const pillars = [
  {
    icon: Wrench,
    title: "Problem-Solving Mindset",
    description:
      "I approach every project as a system to be understood before it's a feature to be built — root causes over quick patches.",
  },
  {
    icon: Bot,
    title: "AI-Native Engineering",
    description:
      "LLMs, RAG, and intelligent agents aren't add-ons for me — they're part of how I design products from the first sketch.",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description:
      "Code is a means to an end. I care about the business outcome and the user's experience as much as the architecture.",
  },
  {
    icon: Sparkles,
    title: "Automation-First",
    description:
      "If a workflow repeats itself, I automate it — for my own process and for the businesses I build software for.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About Me"
          title="Engineering products, not just code"
          description="A full stack developer's foundation, an AI engineer's curiosity, and an automation engineer's obsession with efficiency — combined into one builder."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="group relative mb-8 w-fit">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative overflow-hidden rounded-3xl border border-border glass-strong p-1.5">
                <div className="relative aspect-3/4 w-44 overflow-hidden rounded-[1.35rem] sm:w-52">
                  <Image
                    src="/profile.jpeg"
                    alt={siteConfig.name}
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              <span className="absolute -bottom-3 -right-3 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
                Available for work
              </span>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                My journey started with a simple fascination: watching an idea
                turn into something people could actually click, use, and
                depend on. That fascination grew into a full stack discipline —
                building with the MERN stack, designing APIs, and shaping
                databases that hold up under real usage.
              </p>
              <p>
                Along the way, AI stopped being a buzzword and became a core
                part of how I build. Integrating LLMs, retrieval pipelines, and
                intelligent agents into products isn&apos;t a side quest for
                me — it&apos;s where I spend most of my energy today.
              </p>
              <p>
                In parallel, I fell in love with automation: wiring systems
                together with n8n, webhooks, and APIs so that businesses stop
                repeating manual work. My mission is simple —{" "}
                <span className="text-foreground">
                  build software and systems that create measurable, real-world
                  impact
                </span>
                , with the judgment of someone who thinks like a founder, not
                just an engineer.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <SpotlightCard className="h-full p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-blue">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
