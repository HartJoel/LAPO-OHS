import {
  CheckCircle,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

import type { Case } from "../../../../shared/types";
import {
  getSeverityBadge,
  getStatusBadge,
  getTypeBadge,
  slaColors,
} from "../../../../shared/components/badges";

const LAPO_ORANGE = "#EC8020";

interface ActiveCasesCardProps {
  cases: Case[];
  onCaseClick: (id: string) => void;
  onViewAll: () => void;
}

export default function ActiveCasesCard({
  cases,
  onCaseClick,
  onViewAll,
}: ActiveCasesCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-900 text-[15px]">
            Active Cases
          </h2>

          <p className="text-xs text-gray-400 mt-0.5">
            Cases currently assigned to you for handling
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="text-sm font-semibold"
          style={{ color: LAPO_ORANGE }}
        >
          View all my cases →
        </button>
      </div>

      {/* Empty State */}
      {cases.length === 0 ? (
        <div className="py-12 text-center">
          <CheckCircle
            size={28}
            className="mx-auto mb-2 text-green-500"
          />

          <p className="text-sm text-gray-400">
            No active cases — you're all caught up!
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-50">
          {cases.map((item) => {
            const unreadMessages =
              item.messages?.filter(
                (message) => message.from === "reporter"
              ).length ?? 0;

            const slaColor = item.sla
              ? slaColors[item.sla]
              : "gray";

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
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {/* Type */}
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeBadge(
                    item.type
                  )}`}
                >
                  {item.type}
                </span>

                {/* Info */}
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

                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-gray-700 truncate">
                    {item.category}
                  </div>

                  <div className="text-xs text-gray-400">
                    {item.branch} ·{" "}
                    {item.isAnonymous
                      ? "🔒 Anonymous"
                      : item.reporterName}
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className={`text-xs font-medium ${slaClass}`}>
                    {item.sla ?? "-"}
                  </span>

                  {unreadMessages > 0 && (
                    <span className="flex items-center gap-1 text-xs font-medium text-blue-600">
                      <MessageSquare size={11} />
                      {unreadMessages} msg
                      {unreadMessages > 1 ? "s" : ""}
                    </span>
                  )}
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
    </div>
  );
}