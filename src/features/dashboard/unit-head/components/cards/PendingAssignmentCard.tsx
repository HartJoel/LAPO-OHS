import { CheckCircle, ChevronRight } from "lucide-react";

import type { Case } from "../../../../shared/types";
import {
  getSeverityBadge,
  getTypeBadge,
  slaColors,
} from "../../../../shared/components/badges";

const LAPO_ORANGE = "#EC8020";

interface PendingAssignmentCardProps {
  cases: Case[];
  onCaseClick: (id: string) => void;
  onViewMore?: () => void;
}

export default function PendingAssignmentCard({
  cases,
  onCaseClick,
  onViewMore,
}: PendingAssignmentCardProps) {
  return (
    <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2
            className="font-semibold text-gray-900"
            style={{ fontSize: 15 }}
          >
            Pending Assignment
          </h2>

          <p className="text-xs text-gray-400 mt-0.5">
            Cases that have not yet been assigned to an incident manager
          </p>
        </div>

        {cases.length > 0 && (
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: LAPO_ORANGE }}
          >
            {cases.length}
          </span>
        )}
      </div>

      {/* Empty State */}
      {cases.length === 0 ? (
        <div className="py-10 text-center">
          <CheckCircle size={28} className="mx-auto mb-2 text-green-500" />
          <p className="text-sm text-gray-400">
            All cases are assigned — great work!
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-50">
          {cases.slice(0, 8).map((item) => {
            const slaColor = item.sla ? slaColors[item.sla] : "gray";

            const slaClass =
              slaColor === "red"
                ? "text-red-600"
                : slaColor === "amber"
                ? "text-amber-600"
                : slaColor === "green"
                ? "text-green-600"
                : "text-gray-500";

            return (
              <div
                key={item.id}
                onClick={() => onCaseClick(item.id)}
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {/* Type */}
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeBadge(
                    item.type
                  )}`}
                >
                  {item.type}
                </span>

                {/* Case Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-xs font-semibold text-gray-700">
                      {item.id}
                    </span>

                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-semibold ${getSeverityBadge(
                        item.severity
                      )}`}
                    >
                      {item.severity}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 truncate">
                    {item.category}
                  </div>

                  <div className="text-xs text-gray-400">{item.branch}</div>
                </div>

                {/* SLA */}
                <div className="text-right shrink-0">
                  <div className={`text-xs font-medium ${slaClass}`}>
                    {item.sla ?? "-"}
                  </div>

                  <div className="text-xs text-gray-400 mt-0.5">
                    {item.submittedDate
                      ? new Date(item.submittedDate).toLocaleDateString(
                          "en-NG",
                          {
                            day: "numeric",
                            month: "short",
                          }
                        )
                      : "-"}
                  </div>
                </div>

                <ChevronRight
                  size={14}
                  className="text-gray-300 shrink-0"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Footer */}
      {cases.length > 8 && (
        <div className="px-5 py-3 border-t border-gray-100">
          <button
            onClick={onViewMore}
            className="text-sm font-semibold"
            style={{ color: LAPO_ORANGE }}
          >
            View {cases.length - 8} more unassigned cases →
          </button>
        </div>
      )}
    </div>
  );
}