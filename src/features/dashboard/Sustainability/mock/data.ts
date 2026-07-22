import type { Case } from "../../../shared/types";

export interface UnitChartData {
  name: string;
  total: number;
  open: number;
}

export const unitData: UnitChartData[] = [
  {
    name: "Health & Ergonomics",
    total: 18,
    open: 7,
  },
  {
    name: "Safety",
    total: 14,
    open: 5,
  },
  {
    name: "Environmental",
    total: 11,
    open: 4,
  },
  {
    name: "Harassment",
    total: 9,
    open: 2,
  },
];

export interface IncidentTypeData {
  name: string;
  value: number;
  color: string;
}

export const incidentTypeData: IncidentTypeData[] = [
  {
    name: "Safety",
    value: 14,
    color: "#EF4444",
  },
  {
    name: "Health",
    value: 11,
    color: "#10B981",
  },
  {
    name: "Environmental",
    value: 8,
    color: "#3B82F6",
  },
  {
    name: "Conduct",
    value: 5,
    color: "#8B5CF6",
  },
];


export const escalatedCases: Case[] = [
  {
    id: "OHS-2026-019",
    type: "Health & Ergonomics",
    category: "Workload-related ailment",
    branch: "Ibadan Branch",
    status: "Escalated",
    severity: "High",
    sla: "SLA Breached",
    handlerName: "Chidi Nwosu",
    primaryUnit: "Operations / IT",
  },
  {
    id: "OHS-2026-001",
    type: "Health & Ergonomics",
    category: "Poor office ventilation",
    branch: "Lagos Island Branch",
    status: "Under Review",
    severity: "High",
    sla: "SLA Breached",
    handlerName: "Chidi Nwosu",
    primaryUnit: "General Services",
  },
  {
    id: "OHS-2026-002",
    type: "Harassment & Conduct",
    category: "Verbal harassment",
    branch: "Surulere Branch",
    status: "Investigating",
    severity: "High",
    sla: "SLA Breached",
    handlerName: "Chidi Nwosu",
    primaryUnit: "People & Culture",
  },
  {
    id: "OHS-2026-003",
    type: "Health & Ergonomics",
    category: "Chair-related body pain",
    branch: "Lagos Island Branch",
    status: "Logged",
    severity: "Medium",
    sla: "SLA Breached",
    primaryUnit: "General Services",
  },
  {
    id: "OHS-2026-007",
    type: "Environmental & Facility",
    category: "Chemical pollution",
    branch: "Abuja Main Branch",
    status: "Logged",
    severity: "Critical",
    sla: "SLA Breached",
    primaryUnit: "General Services",
  },
];