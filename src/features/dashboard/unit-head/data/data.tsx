import { AlertTriangle, CheckCircle, Clock, FolderOpen } from "lucide-react";
import type { TeamCase } from "../components/table/TeamCasesTable";
import type { Case } from "../../../shared/types";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

export const stats = [
  {
    label: "Total Cases",
    value: 10,
    icon: FolderOpen,
    color: "#6366f1",
    bg: "#EEF2FF",
  },
  {
    label: "Awaiting Assignment",
    value: 8,
    icon: AlertTriangle,
    color: LAPO_ORANGE,
    bg: "#FFF4EA",
  },
  {
    label: "Assigned & Active",
    value: 2,
    icon: Clock,
    color: LAPO_GREEN,
    bg: "#EDFBF3",
  },
  {
    label: "Resolved / Closed",
    value: 8,
    icon: CheckCircle,
    color: "LAPO_GREEN",
    bg: "#FEF2F2",
  },
];



export const pendingAssignments: Case[] = [
  {
    id: "OHS-2026-003",
    type: "Health & Ergonomics",
    severity: "Medium",
    category: "Chair-related body pain",
    branch: "Lagos Island Branch",
    submittedDate: "2026-04-10",
    status: "Logged",
    sla: "SLA Breached",
  },
  {
    id: "OHS-2026-007",
    type: "Environmental & Facility",
    severity: "Critical",
    category: "Chemical pollution",
    branch: "Abuja Main Branch",
    submittedDate: "2026-04-10",
    status: "Logged",
    sla: "SLA Breached",
  },
  {
    id: "OHS-2026-012",
    type: "Environmental & Facility",
    severity: "Medium",
    category: "Faulty facility equipment",
    branch: "Lagos Island Branch",
    submittedDate: "2026-04-11",
    status: "Logged",
    sla: "SLA Breached",
  },
  {
    id: "OHS-2026-016",
    type: "Safety",
    severity: "Critical",
    category: "Slips, trips, and falls",
    branch: "Port Harcourt Branch",
    submittedDate: "2026-04-10",
    status: "Logged",
    sla: "SLA Breached",
  },
];




export interface IncidentManagerWorkload {
  id: string;
  name: string;
  initials: string;
  active: number;
  total: number;
}

export const workload: IncidentManagerWorkload[] = [
  {
    id: "im-1",
    name: "Sarah Johnson",
    initials: "SJ",
    active: 8,
    total: 21,
  },
  {
    id: "im-2",
    name: "Michael Obi",
    initials: "MO",
    active: 5,
    total: 18,
  },
  {
    id: "im-3",
    name: "Grace Eze",
    initials: "GE",
    active: 6,
    total: 14,
  },
];

export const recentlyAssignedCases: Case[] = [
  {
    id: "OHS-2026-021",
    status: "Logged",
    type: "Safety",
    severity: "Critical",
    category: "Electrical fire",
    branch: "Abuja Main Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
    handlerName: "Sarah Johnson",
  },
  {
    id: "OHS-2026-022",
    status: "Logged",
    type: "Health & Ergonomics",
    severity: "Medium",
    category: "Back pain complaint",
    branch: "Lagos Island Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
    handlerName: "Grace Eze",
  },
];