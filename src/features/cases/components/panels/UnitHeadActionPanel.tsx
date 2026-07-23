import { useState } from "react";
import {
  Users,
  MessageSquare,
  ArrowUpCircle,
  CheckCircle2,
} from "lucide-react";
import type { Case } from "../../../shared/types";

const LAPO_ORANGE = "#EC8020";

interface IncidentManager {
  id: string;
  name: string;
  unit: string;
}

interface Props {
  caseData: Case;
  incidentManagers: IncidentManager[];

  onAssign: (managerId: string) => void;
  onEscalate: (reason: string) => void;
  onAddNote: (note: string) => void;

  workingDays: number;
  isOverdue: boolean;
}
export default function UnitHeadActionPanel({
  caseData,
  incidentManagers,
  onAssign,
  onEscalate,
  onAddNote,
  workingDays,
  isOverdue,
}: Props) {
  const [showAssignForm, setShowAssignForm] = useState(false);
  const [showEscalateForm, setShowEscalateForm] = useState(false);

  const [selectedManager, setSelectedManager] = useState("");
  const [noteText, setNoteText] = useState("");
  const [escalationNote, setEscalationNote] = useState("");

  const [assigned, setAssigned] = useState(false);
  const [noteAdded, setNoteAdded] = useState(false);

  const handleAssign = () => {
    if (!selectedManager) return;

    onAssign(selectedManager);

    setAssigned(true);
    setShowAssignForm(false);
  };

  const handleNote = () => {
    if (!noteText.trim()) return;

    onAddNote(noteText);

    setNoteAdded(true);
    setNoteText("");

    setTimeout(() => setNoteAdded(false), 2000);
  };

  const handleEscalate = () => {
    if (!escalationNote.trim()) return;

    onEscalate(escalationNote);

    setShowEscalateForm(false);
    setEscalationNote("");
  };

  if (caseData.status === "Closed") {
    return null;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-5">
      {/* Header */}

      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-semibold text-gray-900">
          Unit Head Actions
        </div>

        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">
          Supervisor
        </span>
      </div>

      <p className="text-xs text-gray-400 mb-4">
        Assign cases to an Incident Manager, leave supervisor notes or escalate
        serious cases.
      </p>

      <div className="space-y-4">
        {/* Assignment */}

        {!["Resolved", "Closed"].includes(caseData.status) && (
          <>
            {assigned ? (
              <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-xs text-green-700">
                <CheckCircle2 size={14} />
                Case assigned successfully.
              </div>
            ) : showAssignForm ? (
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 space-y-3">
                <div className="font-semibold text-blue-800 flex items-center gap-2">
                  <Users size={15} />
                  Assign Incident Manager
                </div>

                <select
                  value={selectedManager}
                  onChange={(e) => setSelectedManager(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                  <option value="">Select Incident Manager</option>

                  {incidentManagers.map((manager) => (
                    <option key={manager.id} value={manager.id}>
                      {manager.name} — {manager.unit}
                    </option>
                  ))}
                </select>

                <div className="flex gap-2">
                  <button
                    className="border rounded-lg px-3 py-2 text-sm"
                    onClick={() => setShowAssignForm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    disabled={!selectedManager}
                    onClick={handleAssign}
                    className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white disabled:opacity-50"
                  >
                    Assign
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAssignForm(true)}
                className="w-full rounded-lg py-2.5 text-sm font-semibold text-white flex items-center justify-center gap-2"
                style={{ background: LAPO_ORANGE }}
              >
                <Users size={15} />
                {caseData.handlerName
                  ? `Reassign (${caseData.handlerName})`
                  : "Assign Incident Manager"}
              </button>
            )}
          </>
        )}

        {/* Notes */}

        <div className="border-t pt-4">
          <label className="text-xs font-medium text-gray-600">
            Supervisor Note
          </label>

          <div className="flex gap-2 mt-2">
            <input
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Add supervisor note..."
              className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
            />

            <button
              disabled={!noteText.trim()}
              onClick={handleNote}
              className="rounded-lg px-4 py-2 text-white text-sm disabled:opacity-50"
              style={{ background: LAPO_ORANGE }}
            >
              {noteAdded ? "✓ Added" : "Add"}
            </button>
          </div>
        </div>

        {/* Escalation */}

        {!caseData.escalated &&
          !["Resolved", "Closed"].includes(caseData.status) &&
          (isOverdue || ["Critical", "High"].includes(caseData.severity)) && (
            <>
              {showEscalateForm ? (
                <div className="rounded-xl border border-red-100 bg-red-50 p-4 space-y-3">
                  <textarea
                    rows={3}
                    value={escalationNote}
                    onChange={(e) => setEscalationNote(e.target.value)}
                    placeholder="Reason for escalation..."
                    className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm"
                  />

                  <div className="flex gap-2">
                    <button
                      className="border rounded-lg px-3 py-2 text-sm"
                      onClick={() => setShowEscalateForm(false)}
                    >
                      Cancel
                    </button>

                    <button
                      disabled={!escalationNote.trim()}
                      onClick={handleEscalate}
                      className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-semibold text-white disabled:opacity-50"
                    >
                      Confirm Escalation
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowEscalateForm(true)}
                  className="w-full rounded-lg border-2 border-red-600 py-2.5 text-red-600 text-sm font-semibold flex justify-center items-center gap-2"
                >
                  <ArrowUpCircle size={15} />

                  {isOverdue ? `Escalate (${workingDays} days)` : "Escalate"}
                </button>
              )}
            </>
          )}

        <div className="text-xs text-gray-400 flex gap-1 items-center">
          <MessageSquare size={11} />
          Reporters communicate with the assigned Incident Manager.
        </div>
      </div>
    </div>
  );
}
