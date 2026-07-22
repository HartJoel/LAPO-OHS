import type { StatsRecording } from "framer-motion";
import type { CaseStatus, CaseType, Severity, SLAStatus } from "../../types";

// shared/types.ts — add missing fields, fix escalated type
export interface Case {
  id: string;
  token?: string;
  title?: string;
  type?: CaseType;
  category: string;
  branch: string;
  location?: string;
  incidentDate?: string;
  handlerName?: string | null;
  primaryUnit?: string;
  

  status: CaseStatus;
  severity: Severity;
  sla?: SLAStatus;

  submittedDate?: string;

  isAnonymous?: boolean;
  pendingAttestation?: boolean;

  description?: string;

  hasInjury?: boolean;
  injuryType?: string;
  affectedBodyArea?: string;
  injuryDate?: string;
  isRecurring?: boolean;

  resolutionNotes?: string;
  resolutionDisputed?: boolean;
  resolutionDisputeReason?: string;
  resolutionAttestedBy?: string;
  resolutionAttestedDate?: string;

  escalated?: boolean; // was `string`, used as boolean everywhere
  escalationReason?: string;
  escalatedTo?: string;
  escalatedDate?: string; // was `Date` — you're calling new Date() on it elsewhere, keep it a string from data

  reporterName?: string;
  reporterAttested?: boolean;

  auditTrail?: AuditEntry[]; // was missing entirely
  messages?: CaseMessage[]; // needed for correspondence tab
}

export interface AuditEntry {
  id: string;
  action: string;
  performedBy: string;
  timestamp: string;
}

export interface CaseMessage {
  id: string;
  from: "handler" | "reporter";
  senderName: string;
  content: string;
  timestamp: string;
}

export interface CaseStatusHistory {
  id: string;

  status: CaseStatus;

  title: string;
  description: string;
  timestamp: string;

  updatedBy: string;

  completed: boolean;
}
