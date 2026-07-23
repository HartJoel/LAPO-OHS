import {
  ArrowUpCircle,
  CheckCircle,
  ClipboardList,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

import type { Case } from "../../../shared/types";

interface SustainabilityActionPanelProps {
  caseData: Case;
}

const LAPO_GREEN = "#009D4C";
const LAPO_ORANGE = "#EC8020";

const statusFlow = [
  "Submitted",
  "Under Review",
  "Investigating",
  "Resolved",
  "Closed",
];

export default function SustainabilityActionPanel({
  caseData,
}: SustainabilityActionPanelProps) {
  const [status, setStatus] = useState(caseData.status);

  const [showResolveForm, setShowResolveForm] = useState(false);
  const [showEscalateForm, setShowEscalateForm] = useState(false);

  const [resolutionText, setResolutionText] = useState("");
  const [escalationNote, setEscalationNote] = useState("");

  const [updatingStatus, setUpdatingStatus] = useState(false);

  const isEscalated = status === "Escalated";
  const canResolve = !isEscalated && !["Resolved", "Closed"].includes(status);

  const handleResolve = () => {
    if (!resolutionText.trim()) return;

    console.log("Resolved:", resolutionText);

    setStatus("Closed");
    setResolutionText("");
    setShowResolveForm(false);
  };

  const currentIndex = statusFlow.indexOf(status);

  const nextStatus =
    currentIndex >= 0 && currentIndex < statusFlow.length - 1
      ? statusFlow[currentIndex + 1]
      : null;

  const handleEscalate = () => {
    if (!escalationNote.trim()) return;

    console.log("Escalated:", escalationNote);

    setStatus("Escalated");
    setEscalationNote("");
    setShowEscalateForm(false);
  };

  const handleStatusUpdate = () => {
    if (!nextStatus) return;

    setUpdatingStatus(true);

    setTimeout(() => {
      setStatus(nextStatus);
      setUpdatingStatus(false);
    }, 500);
  };

  const handleReopen = () => {
    setStatus("Investigating");
  };

  if (status === "Closed") {
    return null;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Case Actions</h3>

      {/* Quick Resolve */}
      {!showResolveForm && !showEscalateForm && canResolve && (
        <div className="mb-4 pb-4 border-b border-gray-100">
          <button
            onClick={() => setShowResolveForm(true)}
            className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
            style={{ backgroundColor: LAPO_GREEN }}
          >
            <CheckCircle size={15} />
            Mark as Resolved
          </button>

          <p className="mt-2 text-center text-xs text-gray-400">
            Reporter will be notified and must confirm resolution before the
            case is officially closed.
          </p>
        </div>
      )}

      {/* Escalation Form */}
      {showEscalateForm && (
        <div className="space-y-3">
          <div className="p-3 rounded-lg border border-red-100 bg-red-50 text-xs text-red-800">
            <span className="font-semibold">Manual Escalation:</span> This will
            escalate the case to the Head of People & Culture.
          </div>

          <textarea
            rows={3}
            value={escalationNote}
            onChange={(e) => setEscalationNote(e.target.value)}
            placeholder="Explain why this case needs escalation..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm resize-none focus:outline-none"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setShowEscalateForm(false)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
            >
              Cancel
            </button>

            <button
              disabled={!escalationNote.trim()}
              onClick={handleEscalate}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              <ArrowUpCircle size={14} />
              Escalate Case
            </button>
          </div>
        </div>
      )}

      {/* Resolution Form */}
      {showResolveForm && (
        <div className="space-y-3">
          <div className="rounded-lg border border-amber-100 bg-amber-50 p-3 text-xs text-amber-800">
            <span className="font-semibold">
              Resolution Attestation Required:
            </span>{" "}
            Reporter must confirm before the case can be closed.
          </div>

          <textarea
            rows={4}
            value={resolutionText}
            onChange={(e) => setResolutionText(e.target.value)}
            placeholder="Document the resolution..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm resize-none focus:outline-none"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setShowResolveForm(false)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
            >
              Cancel
            </button>

            <button
              disabled={!resolutionText.trim()}
              onClick={handleResolve}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold text-white disabled:opacity-50"
              style={{ backgroundColor: LAPO_GREEN }}
            >
              <CheckCircle size={14} />
              Submit Resolution
            </button>
          </div>
        </div>
      )}

      {/* Main Actions */}
      {!showResolveForm && !showEscalateForm && (
        <div className="flex flex-wrap gap-3">
          {nextStatus &&
            nextStatus !== "Resolved" &&
            nextStatus !== "Closed" &&
            !isEscalated && (
              <button
                onClick={handleStatusUpdate}
                disabled={updatingStatus}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-70"
                style={{ backgroundColor: LAPO_ORANGE }}
              >
                {updatingStatus && (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                )}
                Move to {nextStatus}
              </button>
            )}

          {isEscalated && (
            <button
              onClick={() => setStatus("Investigating")}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: LAPO_ORANGE }}
            >
              <RefreshCw size={14} />
              Resume Investigation
            </button>
          )}

          {nextStatus === "Resolved" && !isEscalated && (
            <button
              onClick={() => setShowResolveForm(true)}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: LAPO_GREEN }}
            >
              <CheckCircle size={14} />
              Submit Resolution
            </button>
          )}

          {caseData.resolutionDisputed && status === "Investigating" && (
            <button
              onClick={handleReopen}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              <RefreshCw size={14} />
              Re-open Investigation
            </button>
          )}

          {!isEscalated && !["Resolved", "Closed"].includes(status) && (
            <button
              onClick={() => setShowEscalateForm(true)}
              className="flex items-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold"
              style={{
                borderColor: "#DC2626",
                color: "#DC2626",
              }}
            >
              <ArrowUpCircle size={14} />
              Escalate to Senior Management
            </button>
          )}

          <div className="flex-1" />

          <div className="flex items-center gap-1 text-xs text-gray-400">
            <ClipboardList size={12} />
            Assigned to: {caseData.handlerName || "Unassigned"}
          </div>
        </div>
      )}
    </div>
  );
}
