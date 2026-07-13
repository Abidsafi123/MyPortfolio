import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Tech Stack"
          title="Tools I build with"
          description="A modern, production-tested toolkit spanning frontend, backend, AI, and automation."
        />

        <div className="mt-16 space-y-14">
          {techStack.map((group) => (
            <div key={group.category}>
              <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((item) => (
                  <StaggerItem key={item.name}>
                    <SpotlightCard className="flex h-full flex-col items-center justify-center gap-3 px-4 py-7 text-center transition-transform duration-300 hover:-translate-y-1">
                      <item.icon className="h-7 w-7 text-foreground/90 transition-colors group-hover:text-accent-blue" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.name}
                      </span>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
