"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
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
        <div className="absolute inset-3 animate-float overflow-hidden rounded-full border border-white/20 shadow-2xl">
          <Image
            src="/profile.jpeg"
            alt={siteConfig.name}
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
        </div>
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
