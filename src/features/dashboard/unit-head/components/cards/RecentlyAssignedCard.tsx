import { UserCheck } from "lucide-react";

import type { Case } from "../../../../shared/types";
import { getSeverityBadge } from "../../../../shared/components/badges";

interface Props {
  cases: Case[];
  onCaseClick: (id: string) => void;
}

export default function RecentlyAssignedCard({
  cases,
  onCaseClick,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <UserCheck size={15} className="text-gray-400" />

        <h2 className="font-semibold text-gray-900 text-[15px]">
          Recently Assigned
        </h2>
      </div>

      <div className="divide-y divide-gray-50">
        {cases.length === 0 ? (
          <div className="py-5 text-center text-xs text-gray-400">
            No assigned cases yet
          </div>
        ) : (
          cases.slice(0, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => onCaseClick(item.id)}
              className="px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-mono text-xs font-semibold text-gray-600">
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

              <div className="text-xs text-gray-500 truncate">
                {item.category}
              </div>

              <div className="text-xs text-gray-400 mt-0.5">
                → {item.handlerName ?? "Unassigned"}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}