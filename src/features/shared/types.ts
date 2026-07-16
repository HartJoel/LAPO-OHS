import type { CaseStatus, CaseType, Severity, SLAStatus } from "../../types";

export interface Case {
  id: string;
  token?: string;
  title?: string;
  type: CaseType;
  category: string;
  branch: string;
  location: string;
  incidentDate?: string;
  handlerName?: string;

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