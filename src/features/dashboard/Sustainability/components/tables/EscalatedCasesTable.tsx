import {
  CheckCircle,
  ShieldAlert,
} from "lucide-react";

import type { Case } from "../../../../shared/types";

import {
  getSeverityBadge,
  getStatusBadge,
  getTypeBadge,
  slaColors,
} from "../../../../shared/components/badges";

const LAPO_ORANGE = "#EC8020";

interface Props {
  cases: Case[];
  onCaseClick: (id: string) => void;
  onViewAll: () => void;
}

export default function EscalatedCasesTable({
  cases,
  onCaseClick,
  onViewAll,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}

      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldAlert
            size={15}
            className="text-red-500"
          />

          <div>
            <h2 className="font-semibold text-gray-900 text-[15px]">
              Escalated & High-Severity Cases
            </h2>

            <p className="text-xs text-gray-400 mt-0.5">
              Cases requiring Sustainability Department
              intervention
            </p>
          </div>
        </div>

        <button
          onClick={onViewAll}
          className="text-sm font-semibold"
          style={{ color: LAPO_ORANGE }}
        >
          View all cases →
        </button>
      </div>

      {/* Empty */}

      {cases.length === 0 ? (
        <div className="py-10 text-center">
          <CheckCircle
            size={28}
            className="mx-auto mb-2 text-green-500"
          />

          <p className="text-sm text-gray-400">
            No escalated or SLA-breached cases —
            all cases are on track.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {[
                  "Case ID",
                  "Type",
                  "Category",
                  "Branch",
                  "Status",
                  "Severity",
                  "SLA",
                  "Handler / Unit",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {cases.slice(0, 8).map((item) => {
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
                  <tr
                    key={item.id}
                    onClick={() => onCaseClick(item.id)}
                    className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-5 py-3 font-mono text-sm font-semibold text-gray-800 whitespace-nowrap">
                      {item.id}
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeBadge(
                          item.type
                        )}`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td className="px-5 py-3 text-sm text-gray-600 max-w-[180px] truncate">
                      {item.category}
                    </td>

                    <td className="px-5 py-3 text-xs text-gray-500 whitespace-nowrap">
                      {item.branch}
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-semibold ${getSeverityBadge(
                          item.severity
                        )}`}
                      >
                        {item.severity}
                      </span>
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`text-xs font-medium ${slaClass}`}
                      >
                        {item.sla}
                      </span>
                    </td>

                    <td className="px-5 py-3 text-xs text-gray-500 whitespace-nowrap">
                      {item.handlerName ? (
                        <>
                          {item.handlerName}

                          {item.primaryUnit && (
                            <div className="text-[10px] text-gray-400">
                              {item.primaryUnit}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <span className="font-medium text-orange-500">
                            Unassigned
                          </span>

                          {item.primaryUnit && (
                            <div className="text-[10px] text-gray-400">
                              {item.primaryUnit}
                            </div>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}