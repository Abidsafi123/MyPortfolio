"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-accent-blue/40">
            <Image
              src="/profile.jpeg"
              alt={siteConfig.name}
              fill
              sizes="28px"
              className="object-cover"
            />
          </span>
          <span>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer noopener" : undefined}
              aria-label={social.label}
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              style={
                {
                  "--hover-color": social.color,
                } as CSSProperties
              }
              className="group flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground transition-colors duration-300 hover:text-[var(--hover-color)] hover:shadow-[0_0_18px_-2px_var(--hover-color)]"
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
