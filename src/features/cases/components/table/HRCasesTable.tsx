import { ChevronRight, FolderOpen } from "lucide-react";

import type { Case } from "../../../shared/types";
import {
    getSeverityBadge,
  getStatusBadge,
  getTypeBadge,
} from "../../../shared/components/badges";

interface HRCasesTableProps {
  cases: Case[];
  openCase: (id: string) => void;
}

const headers = [
  "Case ID",
  "Type",
  "Category",
  "Branch",
  "Reporter",
  "Submitted",
  "Status",
  "Severity",
  "SLA",
  "Handler",
  "",
];

// Simple local SLA status helper to avoid missing import
function getSLAStatus(
  submittedDate: string | undefined | null,
  severity: string,
  status: string,
) {
  if (!submittedDate) return { label: "—", color: "gray" };

  if (status === "Closed" || status === "Resolved") {
    return { label: "Closed", color: "green" };
  }

  const submitted = new Date(submittedDate);
  const now = new Date();
  const days = Math.floor(
    (now.getTime() - submitted.getTime()) / (1000 * 60 * 60 * 24),
  );

  // thresholds (days) by severity
  const thresholds: Record<string, number> = {
    Critical: 1,
    High: 2,
    Medium: 5,
    Low: 10,
  };

  const t = thresholds[severity] ?? 5;

  if (days > t) return { label: `Overdue (${days}d)`, color: "red" };
  if (days >= Math.floor(t * 0.7))
    return { label: `Due soon (${days}d)`, color: "amber" };
  return { label: `OK (${days}d)`, color: "green" };
}

export default function HRCasesTable({ cases, openCase }: HRCasesTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {cases.length === 0 ? (
        <div className="py-12 text-center">
          <FolderOpen size={36} className="mx-auto mb-3 text-gray-300" />
          <p className="text-sm text-gray-500">
            No cases match your current filters.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {cases.map((c) => {
                const sla = getSLAStatus(c.submittedDate, c.severity, c.status);
                const submittedLabel = c.submittedDate
                  ? new Date(c.submittedDate).toLocaleDateString("en-NG", {
                      day: "numeric",
                      month: "short",
                    })
                  : "—";

                return (
                  <tr
                    key={c.id}
                    onClick={() => openCase(c.id)}
                    className="cursor-pointer border-b border-gray-50 transition-colors last:border-0 hover:bg-gray-50"
                  >
                    {/* Case ID */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="font-mono text-sm font-semibold text-gray-800">
                        {c.id}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${getTypeBadge(
                          c.type,
                        )}`}
                      >
                        {c.type}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="max-w-40 px-4 py-3 text-sm text-gray-600">
                      <div className="truncate">{c.category}</div>
                    </td>

                    {/* Branch */}
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">
                      {c.branch.replace(" Branch", "")}
                    </td>

                    {/* Reporter */}
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">
                      {c.isAnonymous ? (
                        <span className="flex items-center gap-1">
                          <span>🔒</span>
                          <span>Anonymous</span>
                        </span>
                      ) : (
                        c.reporterName
                      )}
                    </td>

                    {/* Submitted */}
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">
                      {submittedLabel}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getStatusBadge(
                            c.status,
                          )}`}
                        >
                          {c.status}
                        </span>
                        {c.pendingAttestation && (
                          <span className="text-[9px] font-medium text-amber-700">
                            ⏳ Awaiting Attestation
                          </span>
                        )}

                        {c.escalated && c.status !== "Escalated" && (
                          <span className="text-[9px] font-medium text-red-600">
                            🚨 Escalated
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Severity */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${getSeverityBadge(
                          c.severity,
                        )}`}
                      >
                        {c.severity}
                      </span>
                    </td>

                    {/* SLA */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <span
                        className={`text-xs font-medium ${
                          sla.color === "red"
                            ? "text-red-600"
                            : sla.color === "amber"
                              ? "text-amber-600"
                              : sla.color === "green"
                                ? "text-green-600"
                                : "text-gray-400"
                        }`}
                      >
                        {sla.label}
                      </span>
                    </td>

                    {/* Handler */}
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">
                      {c.handlerName || "—"}
                    </td>

                    {/* Arrow */}
                    <td className="px-4 py-3">
                      <ChevronRight size={15} className="text-gray-300" />
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
