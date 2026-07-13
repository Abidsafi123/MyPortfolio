"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  strength = 0.35,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const motionProps = {
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.1 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn("inline-flex will-change-transform", className),
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
