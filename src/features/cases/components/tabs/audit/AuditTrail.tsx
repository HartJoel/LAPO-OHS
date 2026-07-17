import type { Case } from "../../../../shared/types";

const LAPO_GREEN = "#22C55E";

interface Props {
  caseData: Case;
}

export default function AuditTrail({ caseData }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="text-sm font-semibold text-gray-900 mb-4">
        Full Audit Trail
        <span className="ml-2 text-xs font-normal text-gray-400">
          All system actions and officer activities are recorded
        </span>
      </div>

      <div className="space-y-0">
        {caseData.auditTrail.map((entry, index) => {
          const isEscalation =
            entry.action.includes("ESCALAT") ||
            entry.action.includes("🚨");

          const isCompleted =
            entry.action.includes("attested") ||
            entry.action.includes("Closed");

          const isSystem =
            entry.performedBy === "System";

          return (
            <div
              key={entry.id}
              className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{
                    backgroundColor: isEscalation
                      ? "#FEE2E2"
                      : isCompleted
                      ? "#EDFBF3"
                      : isSystem
                      ? "#F3F4F6"
                      : "#EDFBF3",

                    color: isEscalation
                      ? "#DC2626"
                      : isCompleted
                      ? LAPO_GREEN
                      : isSystem
                      ? "#6B7280"
                      : LAPO_GREEN,
                  }}
                >
                  {index + 1}
                </div>

                {index < caseData.auditTrail.length - 1 && (
                  <div className="w-px h-4 bg-gray-200 mt-1" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-800 whitespace-pre-line">
                  {entry.action}
                </div>

                <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                  <span>{entry.performedBy}</span>

                  <span>·</span>

                  <span>
                    {new Date(entry.timestamp).toLocaleString(
                      "en-NG",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}