"use client";

import dynamic from "next/dynamic";
import { WebglErrorBoundary } from "@/components/three/webgl-error-boundary";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HeroOrb = dynamic(
  () => import("@/components/three/hero-orb").then((mod) => mod.HeroOrb),
  { ssr: false, loading: () => <FallbackOrb /> }
);

function FallbackOrb() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-64 w-64 sm:h-80 sm:w-80">
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-blue-500 to-violet-500 blur-2xl opacity-70" />
        <div className="absolute inset-6 animate-float rounded-full bg-gradient-to-br from-blue-500/80 to-violet-500/80 backdrop-blur-sm" />
      </div>
    </div>
  );
}

export function HeroScene() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <FallbackOrb />;
  }

  return (
    <WebglErrorBoundary fallback={<FallbackOrb />}>
      <div className="h-full w-full">
        <HeroOrb />
      </div>
    </WebglErrorBoundary>
  );
}
