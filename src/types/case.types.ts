export type CaseType =
  | "Safety"
  | "health"
  | "Harassment & Conduct"
  | "Environmental"
  | "security"
  | "legal"
  | "client"
  | "Health & Ergonomics"
  | "Environmental & Facility";

export type CaseStatus =
  | "Logged"
  | "Under Review"
  | "Investigating"
  | "Escalated"
  | "Resolved"
  | "Closed";

export type Severity = "Critical" | "High" | "Medium" | "Low";

export type SLAStatus = "Within SLA" | "SLA Breached";
