import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong px-6 py-14 sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent-blue/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent-purple/20 blur-[120px]" />

            <StaggerGroup className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {achievements.map((item) => (
                <StaggerItem key={item.label} className="text-center">
                  <div className="gradient-text text-4xl font-bold tabular-nums sm:text-5xl">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
