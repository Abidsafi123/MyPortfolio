import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Featured Work"
          title="Products I've engineered"
          description="A selection of AI-powered platforms, business systems, and automation tools built end-to-end."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                <div
                  className={`mb-6 h-1 w-14 rounded-full bg-gradient-to-r ${project.gradient}`}
                />

                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-accent-blue">
                      {project.category}
                    </span>
                    <h3 className="mt-1.5 text-xl font-semibold text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass text-muted-foreground transition-colors group-hover:text-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full border border-foreground/10 bg-foreground/5 text-xs font-normal text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
