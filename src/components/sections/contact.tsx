"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/social-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact"
          title="Let's build something great"
          description="Have a project in mind, or just want to talk shop? My inbox is always open."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer noopener" : undefined}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ "--hover-color": social.color } as CSSProperties}
                  className="group flex items-center gap-4 rounded-2xl glass p-5 transition-colors duration-300 hover:border-foreground/20"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-blue transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                  >
                    <social.icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {social.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {social.value}
                    </span>
                  </span>
                </motion.a>
              ))}

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 rounded-2xl glass p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-blue">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Location
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {siteConfig.location}
                  </span>
                </span>
              </motion.div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.18}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-5 rounded-2xl glass-strong p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent-blue"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent-blue"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="flex-1 resize-none rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent-blue"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                {status === "sent" ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-accent-blue"
                  >
                    Opening your email client...
                  </motion.p>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Opens your email client with this message pre-filled.
                  </span>
                )}
                <MagneticButton
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
                >
                  <span className="pointer-events-none flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </span>
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
