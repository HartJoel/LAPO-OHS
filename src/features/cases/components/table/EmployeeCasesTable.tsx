import { ChevronRight, FolderOpen } from "lucide-react";
import {
  SeverityBadge,
  StatusBadge,
} from "../../../../components/ui/badges";

import type {
  CaseStatus,
  CaseType,
  Severity,
} from "../../../../types/case.types";

interface Case {
  id: string;
  type: string;
  category: string;
  branch: string;
  status: CaseStatus;
  severity: Severity;
  submittedDate: string;
  sla: string;
}

// interface SLAStatus {
//   label: string;
//   color: "red" | "amber" | "green" | "gray";
// }

interface EmployeeCasesTableProps {
  cases: Case[];
  openCase: (id: string) => void;
}

const headers = [
  "Case ID",
  "Type",
  "Category",
  "Branch",
  "Status",
  "Severity",
  "SLA",
  "Submitted",
  "",
];

const EmployeeCasesTable = ({ cases, openCase }: EmployeeCasesTableProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {cases.length === 0 ? (
        <div className="py-12 text-center">
          <FolderOpen size={36} className="mx-auto mb-3 text-gray-300" />
          <div className="text-gray-500 text-sm">
            No cases match your filters.
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {cases.map((c) => {
                return (
                  <tr
                    key={c.id}
                    onClick={() => openCase(c.id)}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-5 py-4">
                      <span className="font-mono text-sm font-semibold text-gray-800">
                        {c.id}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
                        {c.type}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-700">
                      {c.category}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-500">
                      {c.branch}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={c.status} />
                    </td>

                    <td className="px-5 py-4">
                      <SeverityBadge severity={c.severity} />
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`text-xs font-medium ${
                          c.sla === "SLA Breached"
                            ? "text-red-600"
                            : c.sla === "Approaching SLA"
                              ? "text-amber-600"
                              : c.sla === "Within SLA"
                                ? "text-green-600"
                                : "text-gray-400"
                        }`}
                      >
                        {c.sla}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-500">
                      {c.submittedDate}
                    </td>

                    <td className="px-5 py-4">
                      <ChevronRight size={16} className="text-gray-300" />
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
};

export default EmployeeCasesTable;
