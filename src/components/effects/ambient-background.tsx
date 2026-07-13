export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-40 dark:opacity-60" />

      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] animate-pulse-glow rounded-full bg-accent-blue/10 blur-[140px] dark:bg-accent-blue/25" />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] animate-pulse-glow rounded-full bg-accent-purple/10 blur-[150px] dark:bg-accent-purple/25"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/4 h-[28rem] w-[28rem] animate-pulse-glow rounded-full bg-cyan-500/8 blur-[140px] dark:bg-cyan-500/15"
        style={{ animationDelay: "3s" }}
      />

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
