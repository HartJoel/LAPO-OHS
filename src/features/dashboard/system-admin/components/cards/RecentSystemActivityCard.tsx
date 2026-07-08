import { Activity, ChevronRight } from "lucide-react";

const LAPO_ORANGE = "#EC8020";

interface AuditEntry {
  id: string;
  action: string;
  caseId: string;
  performedBy: string;
  timestamp: string;
}

interface RecentSystemActivityCardProps {
  title: string;
  activities: AuditEntry[];
  onViewAll: () => void;
}

export default function RecentSystemActivityCard({
  title,
  activities,
  onViewAll,
}: RecentSystemActivityCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="text-sm font-semibold text-gray-900">
          {title}
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-medium hover:opacity-80"
          style={{ color: LAPO_ORANGE }}
        >
          Full audit log
          <ChevronRight size={13} />
        </button>
      </div>

      <div className="divide-y divide-gray-50">
        {activities.slice(0, 8).map((entry) => (
          <div
            key={entry.id}
            className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-gray-50"
          >
            <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
              <Activity
                size={11}
                className="text-gray-500"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm text-gray-800">
                {entry.action}
              </div>

              <div className="mt-0.5 text-xs text-gray-400">
                <span className="font-mono text-gray-500">
                  {entry.caseId}
                </span>

                {" · "}
                {entry.performedBy}

                {" · "}
                {new Date(entry.timestamp).toLocaleString("en-NG", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}