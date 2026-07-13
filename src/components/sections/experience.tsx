import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience"
          title="How I got here"
          description="A track record of building real products for real clients — and the automation that keeps them running."
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent sm:left-6" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.08}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass-strong sm:h-12 sm:w-12">
                    <Briefcase className="h-4 w-4 text-accent-blue sm:h-5 sm:w-5" />
                  </div>

                  <div className="glass -mt-1 flex-1 rounded-2xl p-6 sm:p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">
                        {item.role}
                      </h3>
                      <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-accent-blue">
                        {item.type}
                      </span>
                    </div>
                    <div className="mb-4 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                      <span>{item.organization}</span>
                      <span className="text-foreground/20">&bull;</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
