export interface Achievement {
  label: string;
  value: number;
  suffix: string;
}

export const achievements: Achievement[] = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
  { label: "AI Integrations", value: 10, suffix: "+" },
  { label: "Automations Built", value: 25, suffix: "+" },
];
