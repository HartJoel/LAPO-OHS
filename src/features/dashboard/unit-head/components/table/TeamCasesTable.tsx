import { ChevronRight } from "lucide-react";
import {
  SeverityBadge,
  StatusBadge,
  SLABadge,
} from "../../../../../components/ui/badges";
import type { CaseStatus, Severity } from "../../../../../types";

export interface TeamCase {
  id: string;
  category: string;
  status: CaseStatus;
  severity: Severity;
  submittedDate: string;
}

interface SLAStatus {
  label: string;
  color: "red" | "amber" | "green" | "gray";
}

interface TeamCasesTableProps {
  title: string;
  cases: TeamCase[];
  viewAll: () => void;
  openCase: (id: string) => void;
  getSLAStatus: (
    submittedDate: string,
    severity: Severity,
    status: CaseStatus,
  ) => SLAStatus;
}

const headers = ["Case", "Category", "Status", "Severity", "SLA"];

const TeamCasesTable = ({
  title,
  cases,
  viewAll,
  openCase,
  getSLAStatus,
}: TeamCasesTableProps) => {
  return (
    <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="text-sm font-semibold text-gray-900">{title}</div>

        <button
          onClick={viewAll}
          className="text-sm font-medium flex items-center gap-1 text-orange-500 hover:opacity-80"
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
                  className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
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
                  className="cursor-pointer border-b border-gray-50 transition-colors hover:bg-gray-50 last:border-0"
                >
                  <td className="px-5 py-3 font-mono text-xs font-semibold text-gray-700">
                    {c.id}
                  </td>

                  <td className="px-5 py-3 text-xs text-gray-600">
                    {c.category}
                  </td>

                  <td className="px-5 py-3">
                    <StatusBadge status={c.status} />
                  </td>

                  <td className="px-5 py-3">
                    <SeverityBadge severity={c.severity} />
                  </td>

                  <td className="px-5 py-3">
                    <SLABadge color={sla.color} label={sla.label} />
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

export default TeamCasesTable;
