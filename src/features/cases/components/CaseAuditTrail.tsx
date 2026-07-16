import React from "react";

export interface AuditTrailEntry {
  id: string;
  action: string;
  performedBy: string;
  timestamp: string;
}

interface Props {
  entries: AuditTrailEntry[];
}

const getDotColor = (action: string) => {
  const text = action.toLowerCase();

  if (text.includes("escalat")) {
    return "bg-red-500";
  }

  if (text.includes("resolved") || text.includes("closed")) {
    return "bg-green-500";
  }

  if (text.includes("dispute")) {
    return "bg-orange-500";
  }

  return "bg-gray-300";
};

export default function CaseAuditTrail({ entries }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">
        Case Audit Trail
      </h2>

      <div className="space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-b-0"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${getDotColor(
                entry.action
              )}`}
            />

            <div className="flex-1">
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {entry.action}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {entry.performedBy} ·{" "}
                {new Date(entry.timestamp).toLocaleString("en-NG", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}