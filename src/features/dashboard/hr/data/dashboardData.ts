import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FolderOpen,
} from "lucide-react";
import type { Case } from "../../../shared/types";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

export const stats = [
  {
    label: "Total Cases",
    value: 20,
    icon: FolderOpen,
    color: "#6366f1",
    bg: "#EEF2FF",
  },
  {
    label: "Active",
    value: 12,
    icon: Clock,
    color: LAPO_ORANGE,
    bg: "#FFF4EA",
  },
  {
    label: "Pending Attestation",
    value: 3,
    icon: AlertTriangle,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    label: "Resolved / Closed",
    value: 1,
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
    tertiary: "Lagos",
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
    tertiary: "Lagos",
  },
  {
    id: "OHS-2026-005",
    primary: "OHS-2026-005",
    secondary: "High",
    tertiary: "Ikeja",
  },
  {
    id: "OHS-2026-006",
    primary: "OHS-2026-006",
    secondary: "Medium",
    tertiary: "Lagos",
  },
  {
    id: "OHS-2026-007",
    primary: "OHS-2026-007",
    secondary: "Critical",
    tertiary: "Abuja",
  },
  {
    id: "OHS-2026-009",
    primary: "OHS-2026-009",
    secondary: "Medium",
    tertiary: "Abuja",
  },
  {
    id: "OHS-2026-011",
    primary: "OHS-2026-011",
    secondary: "High",
    tertiary: "Abuja",
  },
  {
    id: "OHS-2026-012",
    primary: "OHS-2026-012",
    secondary: "Medium",
    tertiary: "Lagos",
  },
  {
    id: "OHS-2026-014",
    primary: "OHS-2026-014",
    secondary: "Critical",
    tertiary: "Abuja",
  },
  {
    id: "OHS-2026-016",
    primary: "OHS-2026-016",
    secondary: "Critical",
    tertiary: "Port Harcourt",
  },
  {
    id: "OHS-2026-017",
    primary: "OHS-2026-017",
    secondary: "High",
    tertiary: "Kano",
  },
  {
    id: "OHS-2026-018",
    primary: "OHS-2026-018",
    secondary: "Medium",
    tertiary: "Head Office",
  },
  {
    id: "OHS-2026-019",
    primary: "OHS-2026-019",
    secondary: "High",
    tertiary: "Ibadan",
  },
];

export const byType = [
  {
    name: "Workplace Safety",
    value: 4,
    color: "#DC2626",
  },
  {
    name: "Health & Ergonomics",
    value: 7,
    color: LAPO_GREEN,
  },
  {
    name: "Harassment & Conduct",
    value: 5,
    color: "#7C3AED",
  },
  {
    name: "Environmental & Facility",
    value: 4,
    color: "#0369A1",
  },
  {
    name: "Security & Theft",
    value: 0,
    color: "#92400E",
  },
  {
    name: "Legal & Compliance",
    value: 0,
    color: "#065F46",
  },
  {
    name: "Client & Vendor",
    value: 2,
    color: "#BE185D",
  },
];

export const byStatus = [
  {
    name: "Logged",
    value: 5,
    fill: "#3B82F6",
  },
  {
    name: "Under Review",
    value: 5,
    fill: "#F59E0B",
  },
  {
    name: "Investigating",
    value: 3,
    fill: LAPO_ORANGE,
  },
  {
    name: "Escalated",
    value: 1,
    fill: "#DC2626",
  },
  {
    name: "Resolved",
    value: 4,
    fill: LAPO_GREEN,
  },
  {
    name: "Closed",
    value: 2,
    fill: "#9CA3AF",
  },
];

export const monthlyTrend = [
  { month: "Jan", cases: 10 },
  { month: "Feb", cases: 18 },
  { month: "Mar", cases: 12 },
  { month: "Apr", cases: 20 },
  { month: "May", cases: 15 },
  { month: "Jun", cases: 22 },
];

export const bySeverity = [
  {
    name: "Low",
    value: 3,
    fill: "#10B981",
  },
  {
    name: "Medium",
    value: 8,
    fill: "#F59E0B",
  },
  {
    name: "High",
    value: 9,
    fill: "#EF4444",
  },
  {
    name: "Critical",
    value: 0,
    fill: "#991B1B",
  },
];

export const kpiData = [
  {
    label: "SLA Compliance Rate",
    value: "100%",
    target: "> 85%",
    ok: true,
  },
  {
    label: "Avg Resolution Time",
    value: "8.2 days",
    target: "< 14 days",
    ok: true,
  },
  {
    label: "Anonymous Reports",
    value: "40%",
    target: "> 30%",
    ok: true,
  },
  {
    label: "Critical Cases Open",
    value: "50%",
    target: "< 3",
    ok: false,
  },
];


export const activeCases: Case[] = [
  {
    id: "OHS-2026-001",
    status: "Under Review",
    type: "Health & Ergonomics",
    severity: "High",
    category: "Poor office ventilation",
    branch: "Lagos Island Branch",
    reporterName: "Amaka Okafor",
    submittedDate: "2026-04-10",
    sla: "SLA Breached",
    messages: [
      {
        id: "1",
        from: "reporter",
        senderName: "Amaka Okafor",
        content: "Any update?",
        timestamp: "2026-04-11",
      },
    ],
  },
  {
    id: "OHS-2026-002",
    status: "Investigating",
    type: "Harassment & Conduct",
    severity: "High",
    category: "Verbal harassment",
    branch: "Surulere Branch",
    isAnonymous: true,
    submittedDate: "2026-04-10",
    sla: "SLA Breached",
    messages: [],
  },
];


export const resolvedCases: Case[] = [
  {
    id: "OHS-2026-004",
    status: "Resolved",
    type: "Environmental & Facility",
    severity: "Medium",
    category: "Faulty facility equipment",
    branch: "Abuja Main Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
  },
  {
    id: "OHS-2026-008",
    status: "Closed",
    type: "Harassment & Conduct",
    severity: "High",
    category: "Bullying",
    branch: "Lagos Island Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
  },
  {
    id: "OHS-2026-010",
    status: "Resolved",
    type: "Health & Ergonomics",
    severity: "Low",
    category: "Congested office space",
    branch: "Ibadan Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
  },
  {
    id: "OHS-2026-013",
    status: "Resolved",
    type: "Environmental & Facility",
    severity: "Medium",
    category: "Faulty office equipment",
    branch: "Port Harcourt Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
  },
  {
    id: "OHS-2026-015",
    status: "Closed",
    type: "Health & Ergonomics",
    severity: "Medium",
    category: "Poor office ventilation",
    branch: "Abuja Main Branch",
    submittedDate: "2026-04-12",
    sla: "Within SLA",
  },
];

export const pendingAttestationCases: Case[] = [
  {
    id: "OHS-2026-018",
    status: "Resolved",
    severity: "Medium",
    type: "Health & Ergonomics",
    category: "Back pain complaint",
    branch: "Lagos Island Branch",
    pendingAttestation: true,
    submittedDate: "2026-04-14",
    sla: "Within SLA",
  },
  {
    id: "OHS-2026-020",
    status: "Resolved",
    severity: "High",
    type: "Safety",
    category: "Chemical spill",
    branch: "Abuja Main Branch",
    pendingAttestation: true,
    submittedDate: "2026-04-14",
    sla: "Within SLA",
  },
];
