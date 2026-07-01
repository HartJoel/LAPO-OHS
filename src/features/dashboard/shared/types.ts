import type { LucideIcon } from "lucide-react";

export interface StatCardData {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  bg: string;
}