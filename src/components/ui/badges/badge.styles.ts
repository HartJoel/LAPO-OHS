import type { CaseStatus, CaseType, Severity } from "../../../types";

export const statusStyles: Record<
  CaseStatus,
  { bg: string; text: string; dot: string }
> = {
  Logged: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },
  "Under Review": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  Investigating: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    dot: "bg-orange-500",
  },
  Escalated: {
    bg: "bg-red-100",
    text: "text-red-800",
    dot: "bg-red-600",
  },
  Resolved: {
    bg: "bg-green-50",
    text: "text-green-700",
    dot: "bg-green-500",
  },
  Closed: {
    bg: "bg-gray-100",
    text: "text-gray-600",
    dot: "bg-gray-400",
  },
};

export const severityStyles: Record<
  Severity,
  { bg: string; text: string; border: string }
> = {
  Critical: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  High: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  Medium: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  Low: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
};

export const typeStyles: Record<
  CaseType,
  { bg: string; text: string; label: string }
> = {
  safety: {
    bg: "bg-red-50",
    text: "text-red-700",
    label: "Workplace Safety",
  },
  health: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    label: "Health & Ergonomics",
  },
  harassment: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    label: "Harassment & Conduct",
  },
  environmental: {
    bg: "bg-sky-50",
    text: "text-sky-700",
    label: "Environmental & Facility",
  },
  security: {
    bg: "bg-amber-50",
    text: "text-amber-800",
    label: "Security & Theft",
  },
  legal: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    label: "Legal & Compliance",
  },
  client: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    label: "Client & Vendor",
  },
};