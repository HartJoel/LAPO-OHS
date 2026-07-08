import { ChevronRight } from "lucide-react";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

const SEVERITY_COLOR: Record<string, string> = {
  Critical: "#DC2626",
  High: LAPO_ORANGE,
  Medium: "#F59E0B",
  Low: LAPO_GREEN,
};

interface FacilityCase {
  id: string;
  type: string;
  typeColor: string;
  typeBg: string;
  category: string;
  branch: string;
  severity: keyof typeof SEVERITY_COLOR;
  status: string;
  workOrder: string | null;
}

interface RecentFacilityCasesTableProps {
  title: string;
  cases: FacilityCase[];
  onViewAll: () => void;
  onOpenCase: (id: string) => void;
}

export default function RecentFacilityCasesTable({
  title,
  cases,
  onViewAll,
  onOpenCase,
}: RecentFacilityCasesTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm mt-5">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
          style={{ color: LAPO_ORANGE }}
        >
          View all
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {[
                "Case ID",
                "Type",
                "Category",
                "Branch",
                "Severity",
                "Status",
                "Work Order",
                "",
              ].map((header) => (
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
            {cases.slice(0, 6).map((item) => (
              <tr
                key={item.id}
                onClick={() => onOpenCase(item.id)}
                className="cursor-pointer border-b border-gray-50 transition-colors hover:bg-gray-50 last:border-0"
              >
                <td className="px-5 py-3 font-mono text-sm font-semibold text-gray-800">
                  {item.id}
                </td>

                <td className="px-5 py-3">
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: item.typeBg,
                      color: item.typeColor,
                    }}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="px-5 py-3 text-sm text-gray-600">
                  {item.category}
                </td>

                <td className="px-5 py-3 text-sm text-gray-500">
                  {item.branch}
                </td>

                <td className="px-5 py-3">
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: SEVERITY_COLOR[item.severity],
                    }}
                  >
                    {item.severity}
                  </span>
                </td>

                <td className="px-5 py-3">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                    {item.status}
                  </span>
                </td>

                <td className="px-5 py-3">
                  {item.workOrder ? (
                    <span className="font-mono text-xs text-blue-600">
                      {item.workOrder}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">—</span>
                  )}
                </td>

                <td className="px-5 py-3">
                  <ChevronRight size={14} className="text-gray-300" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
