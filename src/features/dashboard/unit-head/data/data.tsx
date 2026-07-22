import { AlertTriangle, CheckCircle, Clock, FolderOpen } from "lucide-react";
import type { TeamCase } from "../components/table/TeamCasesTable";

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

export const slaBreaches = [
  {
    id: "OHS-2026-001",
    primary: "OHS-2026-001",
    secondary: "High",
  },
  {
    id: "OHS-2026-002",
    primary: "OHS-2026-002",
    secondary: "High",
    tertiary: "Surulere",
  },
  {
    id: "OHS-2026-003",
    primary: "OHS-2026-003",
    secondary: "Medium",
  },
  {
    id: "OHS-2026-005",
    primary: "OHS-2026-005",
    secondary: "High",
  },
  {
    id: "OHS-2026-006",
    primary: "OHS-2026-006",
    secondary: "Medium",
  },
  {
    id: "OHS-2026-007",
    primary: "OHS-2026-007",
    secondary: "Critical",
  },
  {
    id: "OHS-2026-009",
    primary: "OHS-2026-009",
    secondary: "Medium",
  },
];

export const bySeverity = [
  { name: "Critical", value: 5, fill: "#DC2626" },
  { name: "High", value: 8, fill: LAPO_ORANGE },
  { name: "Medium", value: 7, fill: "#F59E0B" },
  { name: "Low", value: 9, fill: LAPO_GREEN },
];

export const agingData = [
  {
    id: "OHS-2026-001",
    days: 12,
  },
  {
    id: "OHS-2026-005",
    days: 8,
  },
  {
    id: "OHS-2026-003",
    days: 2,
  },
  {
    id: "OHS-2026-003",
    days: 2,
  },
  {
    id: "OHS-2026-005",
    days: 4,
  },
  {
    id: "OHS-2026-009",
    days: 4,
  },
  {
    id: "OHS-2026-004",
    days: 2,
  },
];

export const teamMembers = [
  {
    name: "Amaka Okafor",
    role: "Operations Officer",
    cases: 4,
  },
  {
    name: "Ngozi Adebayo",
    role: "Senior Operations Officer",
    cases: 4,
  },
];

export const teamCases: TeamCase[] = [
  {
    id: "OHS-2026-021",
    category: "Poor office ventilation",
    status: "Under Review",
    severity: "High",
    submittedDate: "2026-04-14",
  },
  {
    id: "OHS-2026-022",
    category: "Verbal harassment",
    status: "Investigating",
    severity: "Critical",
    submittedDate: "2026-04-13",
  },
  {
    id: "OHS-2026-023",
    category: "Faulty facility equipment",
    status: "Logged",
    severity: "Medium",
    submittedDate: "2026-04-12",
  },
  {
    id: "OHS-2026-024",
    category: "Chair-related body pain",
    status: "Resolved",
    severity: "Low",
    submittedDate: "2026-04-10",
  },
  {
    id: "OHS-2026-025",
    category: "Chemical pollution",
    status: "Escalated",
    severity: "Critical",
    submittedDate: "2026-04-09",
  },
];
