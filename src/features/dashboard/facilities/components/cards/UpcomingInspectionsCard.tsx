import {
  Building2,
  Calendar,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react";

const LAPO_ORANGE = "#EC8020";

interface Inspection {
  id: string;
  type: string;
  branch: string;
  scheduledDate: string;
  status: "Scheduled" | "Overdue";
}

interface UpcomingInspectionsCardProps {
  title: string;
  inspections: Inspection[];
  onViewAll: () => void;
  onOpenInspection: (id: string) => void;
}

export default function UpcomingInspectionsCard({
  title,
  inspections,
  onViewAll,
  onOpenInspection,
}: UpcomingInspectionsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="text-sm font-semibold text-gray-900">{title}</div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-medium hover:opacity-80"
          style={{ color: LAPO_ORANGE }}
        >
          View all
          <ChevronRight size={13} />
        </button>
      </div>

      <div className="divide-y divide-gray-50">
        {inspections.length > 0 ? (
          inspections.slice(0, 5).map((inspection) => (
            <div
              key={inspection.id}
              onClick={() => onOpenInspection(inspection.id)}
              className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor:
                    inspection.status === "Overdue" ? "#FEF2F2" : "#EFF6FF",
                }}
              >
                <ClipboardCheck
                  size={14}
                  style={{
                    color:
                      inspection.status === "Overdue" ? "#DC2626" : "#3B82F6",
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">
                  {inspection.type}
                </div>

                <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
                  <Building2 size={10} />
                  <span>{inspection.branch}</span>

                  <span>·</span>

                  <Calendar size={10} />
                  <span>
                    {new Date(inspection.scheduledDate).toLocaleDateString(
                      "en-NG",
                      {
                        day: "numeric",
                        month: "short",
                      },
                    )}
                  </span>
                </div>
              </div>

              {inspection.status === "Overdue" && (
                <span className="flex-shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-semibold text-red-700">
                  Overdue
                </span>
              )}
            </div>
          ))
        ) : (
          <div className="px-5 py-8 text-center text-sm text-gray-400">
            No upcoming inspections
          </div>
        )}
      </div>
    </div>
  );
}
