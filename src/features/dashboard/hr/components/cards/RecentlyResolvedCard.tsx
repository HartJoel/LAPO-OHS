import { CheckCircle2, ChevronRight } from "lucide-react";

import type { Case } from "../../../../shared/types";
import { getStatusBadge } from "../../../../shared/components/badges";

interface RecentlyResolvedCardProps {
  cases: Case[];
  onCaseClick: (id: string) => void;
}

export default function RecentlyResolvedCard({
  cases,
  onCaseClick,
}: RecentlyResolvedCardProps) {
  if (cases.length === 0) return null;

  return (
    <div className="mt-5 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-900 text-[15px]">
          Recently Resolved
        </h2>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-50">
        {cases.slice(0, 5).map((item) => (
          <div
            key={item.id}
            onClick={() => onCaseClick(item.id)}
            className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <CheckCircle2
              size={14}
              className="text-green-500 shrink-0"
            />

            <span className="font-mono text-xs text-gray-500">
              {item.id}
            </span>

            <span className="flex-1 truncate text-sm text-gray-600">
              {item.category}
            </span>

            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                item.status
              )}`}
            >
              {item.status}
            </span>

            <ChevronRight
              size={14}
              className="text-gray-300 shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}