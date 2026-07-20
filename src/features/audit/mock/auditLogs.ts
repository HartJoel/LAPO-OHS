export interface AuditLog {
  id: number;
  action: string;
  description: string;
  performedBy: string;
  caseId: string;
  timestamp: string;
}

export const auditLogs: AuditLog[] = [
  {
    id: 1,
    action: "System",
    description:
      "Cluster risk flag: 2 ergonomic reports from Lagos Island Branch in 30 days",
    performedBy: "System",
    caseId: "OHS-2026-003",
    timestamp: "2026-04-10T11:31:00",
  },
  {
    id: 2,
    action: "System",
    description: "Ergonomic assessment scheduled for April 12",
    performedBy: "Chidi Nwosu",
    caseId: "OHS-2026-006",
    timestamp: "2026-04-10T09:00:00",
  },
  {
    id: 3,
    action: "System",
    description:
      "Awaiting complainant attestation — case held pending reporter confirmation",
    performedBy: "System",
    caseId: "OHS-2026-020",
    timestamp: "2026-04-10T12:20:00",
  },
  {
    id: 4,
    action: "Case Created",
    description: "Case logged by Amaka Okafor",
    performedBy: "Amaka Okafor",
    caseId: "OHS-2026-012",
    timestamp: "2026-04-11T08:00:00",
  },
  {
    id: 5,
    action: "Case Created",
    description: "Case logged by Amaka Okafor",
    performedBy: "Amaka Okafor",
    caseId: "OHS-2026-003",
    timestamp: "2026-04-11T08:00:00",
  },
  {
    id: 6,
    action: "Assignment",
    description: "Case auto-routed to Facilities Management",
    performedBy: "System",
    caseId: "OHS-2026-012",
    timestamp: "2026-04-11T08:01:00",
  },
  {
    id: 7,
    action: "Assignment",
    description: "Case auto-routed to Facilities Management & HSE",
    performedBy: "System",
    caseId: "OHS-2026-003",
    timestamp: "2026-04-11T08:02:00",
  },
  {
    id: 8,
    action: "Resolution",
    description:
      "Status changed: Investigating → Resolved. Resolution notice sent to reporter (Bode Fashola) for attestation. Case cannot be closed until reporter confirms resolution.",
    performedBy: "Chidi Nwosu",
    caseId: "OHS-2026-020",
    timestamp: "2026-04-09T16:00:00",
  },
  {
    id: 9,
    action: "Resolution",
    description: "HSE officer safety inspection completed — area cleared",
    performedBy: "HSE Officer",
    caseId: "OHS-2026-020",
    timestamp: "2026-04-09T16:30:00",
  },
  {
    id: 10,
    action: "Escalation",
    description:
      "Critical severity auto-routing: Facilities, HSE, and Branch Management notified",
    performedBy: "System",
    caseId: "OHS-2026-007",
    timestamp: "2026-04-10T15:31:00",
  },
  {
    id: 11,
    action: "Escalation",
    description:
      "Critical severity: Facilities, HSE & Branch Management auto-notified",
    performedBy: "System",
    caseId: "OHS-2026-016",
    timestamp: "2026-04-10T15:40:00",
  },
  {
    id: 12,
    action: "Status Update",
    description: "Status changed: Under Review → Investigating",
    performedBy: "Chidi Nwosu",
    caseId: "OHS-2026-006",
    timestamp: "2026-04-09T16:00:00",
  },
  {
    id: 13,
    action: "Status Update",
    description:
      "Status changed: Logged → Under Review. Fire safety audit scheduled Apr 12.",
    performedBy: "Femi Oladele",
    caseId: "OHS-2026-017",
    timestamp: "2026-04-09T11:00:00",
  },
  {
    id: 14,
    action: "Status Update",
    description: "Status changed: Logged → Under Review",
    performedBy: "Chidi Nwosu",
    caseId: "OHS-2026-006",
    timestamp: "2026-04-09T10:30:00",
  },
];
