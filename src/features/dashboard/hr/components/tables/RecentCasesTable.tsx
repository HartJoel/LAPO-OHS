import { ChevronRight } from "lucide-react";
import {
  SeverityBadge,
  StatusBadge,
  TypeBadge,
} from "../../../../../components/ui/badges";
import type { CaseStatus, CaseType, Severity } from "../../../../../types";

interface Case {
  id: string;
  type: CaseType;
  category: string;
  branch: string;
  reporterName: string;
  isAnonymous: boolean;
  status: CaseStatus;
  severity: Severity;
  submittedDate: string;
}

interface SLAStatus {
  label: string;
  color: "red" | "amber" | "green" | "gray";
}

interface RecentCasesTableProps {
  title: string;
  cases: Case[];
  viewAll: () => void;
  openCase: (id: string) => void;
  getSLAStatus: (
    submittedDate: string,
    severity: Severity,
    status: CaseStatus,
  ) => SLAStatus;
}

const headers = [
  "Case ID",
  "Type",
  "Category",
  "Branch",
  "Reporter",
  "Status",
  "Severity",
  "SLA",
  "",
];

const RecentCasesTable = ({
  title,
  cases,
  viewAll,
  openCase,
  getSLAStatus,
}: RecentCasesTableProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="text-sm font-semibold text-gray-900">{title}</div>

        <button
          onClick={viewAll}
          className="text-sm font-medium flex items-center gap-1 hover:opacity-80 text-orange-500"
        >
          View all
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
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
              const sla = getSLAStatus(c.submittedDate, c.severity, c.status);

              return (
                <tr
                  key={c.id}
                  onClick={() => openCase(c.id)}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-3 font-mono text-sm font-semibold text-gray-800">
                    {c.id}
                  </td>

                  <td className="px-5 py-3">
                    <TypeBadge type={c.type} />
                  </td>

                  <td className="px-5 py-3 text-sm text-gray-600">
                    {c.category}
                  </td>

                  <td className="px-5 py-3 text-xs text-gray-500">
                    {c.branch}
                  </td>

                  <td className="px-5 py-3 text-xs text-gray-500">
                    {c.isAnonymous ? "🔒 Anonymous" : c.reporterName}
                  </td>

                  <td className="px-5 py-3">
                    <StatusBadge status={c.status} />
                  </td>

                  <td className="px-5 py-3">
                    <SeverityBadge severity={c.severity} />
                  </td>

                  <td className="px-5 py-3">
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

                  <td className="px-5 py-3">
                    <ChevronRight size={14} className="text-gray-300" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCasesTable;
