import type { Case } from "../types";

export interface RoutingInfo {
  primary: string;
  auxiliary?: string;
}

/**
 * Maps case category -> handling unit(s).
 * `primary` is always accountable/owns resolution.
 * `auxiliary` is looped in for support/visibility but doesn't own the case.
 *
 * Keep this in sync with Case['category'] in shared/types.ts.
 */
const INCIDENT_ROUTING: Record<string, RoutingInfo> = {
  "Environmental & Facility": {
    primary: "General Services",
    auxiliary: "Operations",
  },
  "Health & Safety": {
    primary: "Occupational Health & Safety",
    auxiliary: "General Services",
  },
  "Harassment & Misconduct": {
    primary: "HR & Compliance",
    auxiliary: "Legal",
  },
  Discrimination: {
    primary: "HR & Compliance",
    auxiliary: "Legal",
  },
  "Workplace Conduct": {
    primary: "HR & Compliance",
  },
  "Fraud & Ethics": {
    primary: "Internal Audit",
    auxiliary: "Legal",
  },
  "Security Incident": {
    primary: "Facilities & Security",
    auxiliary: "IT",
  },
  "IT & Data": {
    primary: "IT",
    auxiliary: "Information Security",
  },
  "Equipment & Maintenance": {
    primary: "Facilities",
    auxiliary: "General Services",
  },
  Grievance: {
    primary: "HR & Compliance",
  },
};

const DEFAULT_ROUTING: RoutingInfo = { primary: "HR & Compliance" };

/**
 * Returns the routing (primary + optional auxiliary unit) for a case category.
 * Falls back to HR & Compliance for unmapped/unknown categories so every
 * case always has an owning unit.
 */
export function getRoutingLabel(
  category: Case["category"] | string,
): RoutingInfo {
  const routing = INCIDENT_ROUTING[category];
  if (!routing) return DEFAULT_ROUTING;
  return routing;
}
