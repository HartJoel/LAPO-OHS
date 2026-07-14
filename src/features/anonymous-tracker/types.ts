export interface AnonymousReport {
  trackingId: string;
  title: string;
  location: string;
  status:
    | "Pending Review"
    | "Assigned"
    | "Under Review"
    | "Investigating"
    | "In Progress"
    | "Resolved"
    | "Closed";

  severity: "Low" | "Medium" | "High" | "Critical";

  category:
    | "Health & Safety"
    | "Harassment & Conduct"
    | "Facilities"
    | "Fire Safety"
    | "Security";

  sla:
    | "Within SLA"
    | "Due Today"
    | "Due Tomorrow"
    | "Due in 2 Days"
    | "Resolved Within SLA"
    | "SLA Breached";
}