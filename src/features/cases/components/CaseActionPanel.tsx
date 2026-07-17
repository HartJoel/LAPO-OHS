import { useState } from "react";
import {
  ArrowUpCircle,
  CheckCircle,
  ClipboardList,
  RefreshCw,
} from "lucide-react";
import type { Case } from "../../shared/types";

const LAPO_GREEN = "#22C55E";
const LAPO_ORANGE = "#F97316";

type CaseStatus = Case["status"];

const NEXT_STATUS: Record<CaseStatus, CaseStatus | null> = {
  Logged: "Under Review",
  "Under Review": "Investigating",
  Investigating: "Resolved",
  Escalated: "Investigating",
  Resolved: "Closed",
  Closed: null,
};

// Exported in case you want a progress stepper elsewhere (case timeline, etc).
//  const STATUS_STEPS: CaseStatus[] = [
//   "Logged",
//   "Under Review",
//   "Investigating",
//   "Resolved",
//   "Closed",
// ];

interface Props {
  caseData: Case;
  onStatusChange?: (id: string, status: CaseStatus, note?: string) => void;
}

export default function CaseActionPanel({ caseData, onStatusChange }: Props) {
  const [showResolveForm, setShowResolveForm] = useState(false);
  const [showEscalateForm, setShowEscalateForm] = useState(false);

  const [resolutionText, setResolutionText] = useState("");
  const [escalationNote, setEscalationNote] = useState("");

  const [updatingStatus, setUpdatingStatus] = useState(false);

  const isClosed = caseData.status === "Closed";
  const isEscalated = caseData.status === "Escalated";

  const isPendingAttestation =
    caseData.status === "Resolved" && !caseData.reporterAttested;

  const nextStatus = NEXT_STATUS[caseData.status];

  if (isClosed || isPendingAttestation) return null;

  const updateStatus = (status: CaseStatus, note?: string) => {
    setUpdatingStatus(true);
    onStatusChange?.(caseData.id, status, note);
    setUpdatingStatus(false);
  };

  const handleStatusUpdate = () => {
    if (!nextStatus) return;
    updateStatus(nextStatus);
  };

  const handleResolve = () => {
    updateStatus("Resolved", resolutionText);
    setResolutionText("");
    setShowResolveForm(false);
  };

  const handleEscalate = () => {
    updateStatus("Escalated", escalationNote);
    setEscalationNote("");
    setShowEscalateForm(false);
  };

  const handleReopen = () => {
    updateStatus("Investigating", "Investigation reopened.");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-5">
      <div className="text-sm font-semibold text-gray-900 mb-3">
        Case Actions
      </div>

      {showEscalateForm ? (
        <div className="space-y-3">
          <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-xs text-red-800">
            <span className="font-semibold">Manual Escalation:</span> This will
            escalate the case to the Head of People & Culture and change the
            status to <strong>Escalated</strong>.
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Escalation Reason
            </label>
            <textarea
              rows={3}
              value={escalationNote}
              onChange={(e) => setEscalationNote(e.target.value)}
              placeholder="Explain why this case needs escalation..."
              className="w-full px-3 py-2 border rounded-lg bg-gray-50 text-sm"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowEscalateForm(false)}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button
              disabled={!escalationNote.trim()}
              onClick={handleEscalate}
              className="flex-1 bg-red-600 text-white rounded-lg py-2 flex justify-center items-center gap-2 disabled:opacity-50"
            >
              <ArrowUpCircle size={14} />
              Escalate Case
            </button>
          </div>
        </div>
      ) : showResolveForm ? (
        <div className="space-y-3">
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 text-xs">
            <span className="font-semibold">
              Resolution Attestation Required:
            </span>{" "}
            Reporter must confirm the resolution before the case can be closed.
          </div>

          <textarea
            rows={4}
            value={resolutionText}
            onChange={(e) => setResolutionText(e.target.value)}
            placeholder="Resolution summary..."
            className="w-full px-3 py-2 border rounded-lg bg-gray-50"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setShowResolveForm(false)}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button
              disabled={!resolutionText.trim()}
              onClick={handleResolve}
              className="flex-1 rounded-lg text-white py-2 flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ background: LAPO_GREEN }}
            >
              <CheckCircle size={14} />
              Submit Resolution
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {nextStatus &&
            nextStatus !== "Resolved" &&
            nextStatus !== "Closed" &&
            !isEscalated && (
              <button
                onClick={handleStatusUpdate}
                disabled={updatingStatus}
                className="px-4 py-2 rounded-lg text-white flex items-center gap-2"
                style={{ background: LAPO_ORANGE }}
              >
                Move to {nextStatus}
              </button>
            )}

          {isEscalated && (
            <button
              onClick={() =>
                updateStatus(
                  NEXT_STATUS["Escalated"]!,
                  "HR resumed investigation",
                )
              }
              className="px-4 py-2 rounded-lg text-white flex items-center gap-2"
              style={{ background: LAPO_ORANGE }}
            >
              <RefreshCw size={14} />
              Resume Investigation
            </button>
          )}

          {nextStatus === "Resolved" && !isEscalated && (
            <button
              onClick={() => setShowResolveForm(true)}
              className="px-4 py-2 rounded-lg text-white flex items-center gap-2"
              style={{ background: LAPO_GREEN }}
            >
              <CheckCircle size={14} />
              Submit Resolution
            </button>
          )}

          {caseData.resolutionDisputed &&
            caseData.status === "Investigating" && (
              <button
                onClick={handleReopen}
                className="px-4 py-2 border rounded-lg flex items-center gap-2"
              >
                <RefreshCw size={14} />
                Re-open Investigation
              </button>
            )}

          {!isEscalated &&
            !["Resolved", "Closed"].includes(caseData.status) && (
              <button
                onClick={() => setShowEscalateForm(true)}
                className="px-4 py-2 rounded-lg border-2 flex items-center gap-2"
                style={{ borderColor: "#DC2626", color: "#DC2626" }}
              >
                <ArrowUpCircle size={14} />
                Escalate to Senior Management
              </button>
            )}

          <div className="flex-1" />

          <div className="text-xs text-gray-400 flex items-center gap-1">
            <ClipboardList size={12} />
            Assigned to: {caseData.handlerName || "Unassigned"}
          </div>
        </div>
      )}
    </div>
  );
}