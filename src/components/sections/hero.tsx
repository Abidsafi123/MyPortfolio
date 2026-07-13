"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroScene } from "@/components/three/hero-scene";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % siteConfig.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] min-w-0 items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={siteConfig.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="gradient-text-animated whitespace-nowrap font-semibold"
        >
          {siteConfig.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-blue" />
            Open to freelance &amp; full-time opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <RotatingRole />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <MagneticButton
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={siteConfig.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/25"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 pt-6 text-xs text-muted-foreground"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">20+</span>
              Projects
            </div>
            <div className="h-8 w-px bg-foreground/10" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">15+</span>
              Clients
            </div>
            <div className="h-8 w-px bg-foreground/10" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">10+</span>
              AI Integrations
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-80 sm:h-[26rem] lg:h-[32rem]"
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <div className="flex h-8 w-5 justify-center rounded-full border border-foreground/15 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent-blue"
          />
        </div>
      </motion.div>
    </section>
  );
}
