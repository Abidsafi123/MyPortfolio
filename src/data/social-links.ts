import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    color: "#3b82f6",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: siteConfig.links.linkedin,
    icon: FaLinkedin,
    color: "#0A66C2",
    external: true,
  },
  {
    label: "GitHub",
    value: "See my work",
    href: siteConfig.links.github,
    icon: FaGithub,
    color: "#ffffff",
    external: true,
  },
  {
    label: "Facebook",
    value: "Follow me",
    href: siteConfig.links.facebook,
    icon: FaFacebook,
    color: "#1877F2",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "Message me",
    href: siteConfig.links.whatsapp,
    icon: FaWhatsapp,
    color: "#25D366",
    external: true,
  },
];
