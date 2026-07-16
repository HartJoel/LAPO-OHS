import type { Case } from "../shared/types";
import type { AuditTrailEntry } from "./components/CaseAuditTrail";
import type { CaseMessage } from "./components/table/CaseCorrespondence";

// mockCases.ts
export const cases: Case[] = [
  {
    id: "OHS-2026-001",
    type: "Health & Ergonomics",
    category: "Poor office ventilation",
    branch: "Lagos Island Branch",
    location: "Operations Floor, 2nd Level",
    incidentDate: "2026-04-07",
    handlerName: "Chidi Nwosu",
    status: "Under Review",
    severity: "High",
    sla: "SLA Breached",
    submittedDate: "8 Apr 2026",
  },
  {
    id: "OHS-2026-002",
    type: "Safety",
    category: "Wet floor near reception",
    branch: "Victoria Island Branch",
    location: "Ground Floor Reception",
    incidentDate: "2026-04-09",
    handlerName: "Ifeanyi Okeke",
    status: "Logged",
    severity: "Medium",
    sla: "Within SLA",
    submittedDate: "9 Apr 2026",
  },
  {
    id: "OHS-2026-003",
    type: "Environmental & Facility",
    category: "Faulty air conditioning",
    branch: "Ikeja Branch",
    location: "Customer Service Hall",
    incidentDate: "2026-04-10",
    handlerName: "Amina Bello",
    status: "Investigating",
    severity: "Medium",
    sla: "Within SLA",
    submittedDate: "10 Apr 2026",
  },
  {
    id: "OHS-2026-004",
    type: "Harassment & Conduct",
    category: "Verbal harassment by supervisor",
    branch: "Abuja Central Branch",
    location: "Operations Unit",
    incidentDate: "2026-04-11",
    handlerName: "Grace Eze",
    status: "Escalated",
    severity: "Critical",
    sla: "SLA Breached",
    submittedDate: "11 Apr 2026",
  },
  {
    id: "OHS-2026-005",
    type: "Safety",
    category: "Blocked emergency exit",
    branch: "Port Harcourt Branch",
    location: "Rear Exit Corridor",
    incidentDate: "2026-04-12",
    handlerName: "Samuel Adeyemi",
    status: "Resolved",
    severity: "High",
    sla: "Within SLA",
    submittedDate: "12 Apr 2026",
  },
];

// mockAuditTrail.ts
export const mockAuditTrail: AuditTrailEntry[] = [
  {
    id: "1",
    action: "Case logged by Amaka Okafor",
    performedBy: "Amaka Okafor",
    timestamp: "2026-04-08T09:15:00",
  },
  {
    id: "2",
    action: "Case auto-routed to HSE & Facilities team",
    performedBy: "System",
    timestamp: "2026-04-08T10:30:00",
  },
  {
    id: "3",
    action: "Case assigned to Chidi Nwosu (HR)",
    performedBy: "System",
    timestamp: "2026-04-08T10:35:00",
  },
  {
    id: "4",
    action: "Status changed: Logged → Under Review",
    performedBy: "Chidi Nwosu",
    timestamp: "2026-04-08T14:00:00",
  },
  {
    id: "5",
    action: "Response message sent to reporter",
    performedBy: "Chidi Nwosu",
    timestamp: "2026-04-08T14:30:00",
  },
  {
    id: "6",
    action: "Facilities team escalation noted. Technicians dispatched.",
    performedBy: "Chidi Nwosu",
    timestamp: "2026-04-09T11:45:00",
  },
];

export const description: Case = {
  id: "OHS-2026-003",
  type: "Health & Ergonomics",
  category: "Chair-related body pain",
  branch: "Lagos Island Branch",
  location: "Operations Floor, 2nd Level",
  incidentDate: "2026-03-20",
  handlerName: "Chidi Nwosu",
  status: "Investigating",
  severity: "Medium",
  sla: "Within SLA",
  submittedDate: "21 Mar 2026",

  description:
    "The ergonomic chair assigned to my workstation has a damaged lumbar support and a faulty height adjustment lever. As a result, I have been forced to work in an uncomfortable posture for several weeks. This has caused persistent lower back pain and neck strain, especially after prolonged computer use. I previously reported the issue verbally, but it has not yet been replaced.",

  hasInjury: true,
  injuryType: "Lower back pain / Musculoskeletal strain",
  affectedBodyArea: "Lower Back",
  injuryDate: "2026-03-20",
  isRecurring: true,
};

export const mockMessages: CaseMessage[] = [
  {
    id: "1",
    from: "handler",
    senderName: "Chidi Nwosu",
    content:
      "An ergonomic assessment has been scheduled for your workstation. A Facilities officer will visit on April 12. In the meantime, please use the temporary cushioned wrist rest available from the storeroom.",
    timestamp: "2026-04-10T09:00:00",
  },
  {
    id: "2",
    from: "reporter",
    senderName: "Amaka Okafor",
    content:
      "Thank you. I will be available on the scheduled date.",
    timestamp: "2026-04-10T10:15:00",
  },
];