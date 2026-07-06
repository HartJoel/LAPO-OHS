import type { LucideIcon } from "lucide-react";

export interface StatCardData {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface AlertItem {
  id: string;
  primary: string;
  secondary?: string;
  tertiary?: string;
}

export interface AlertCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: "red" | "amber";
  items: AlertItem[];
  route: string;
}
