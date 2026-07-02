export type CaseType =
  | "safety"
  | "health"
  | "harassment"
  | "environmental"
  | "security"
  | "legal"
  | "client";

export type CaseStatus =
  | "Logged"
  | "Under Review"
  | "Investigating"
  | "Escalated"
  | "Resolved"
  | "Closed";

export type Severity =
  | "Critical"
  | "High"
  | "Medium"
  | "Low";