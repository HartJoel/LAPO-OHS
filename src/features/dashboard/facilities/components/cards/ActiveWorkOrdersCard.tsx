import { ChevronRight, MapPin, Wrench } from "lucide-react";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

const WO_STATUS_COLOR: Record<string, string> = {
  Pending: "#F59E0B",
  "In Progress": "#3B82F6",
  "Pending Parts": "#8B5CF6",
  "Pending Approval": "#EC4899",
  Completed: "#009D4C",
  Cancelled: "#9CA3AF",
};

const SEVERITY_COLOR: Record<string, string> = {
  Critical: "#DC2626",
  High: LAPO_ORANGE,
  Medium: "#F59E0B",
  Low: LAPO_GREEN,
};

interface WorkOrder {
  id: string;
  title: string;
  branch: string;
  scheduledDate: string;
  priority: keyof typeof SEVERITY_COLOR;
  status: keyof typeof WO_STATUS_COLOR;
}

interface ActiveWorkOrdersCardProps {
  workOrders: WorkOrder[];
  onViewAll: () => void;
  onOpenWorkOrder: (id: string) => void;
}

export default function ActiveWorkOrdersCard({
  workOrders,
  onViewAll,
  onOpenWorkOrder,
}: ActiveWorkOrdersCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="text-sm font-semibold text-gray-900">
          Active Work Orders
        </div>

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
        {workOrders.length > 0 ? (
          workOrders.slice(0, 5).map((wo) => (
            <div
              key={wo.id}
              onClick={() => onOpenWorkOrder(wo.id)}
              className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${SEVERITY_COLOR[wo.priority]}15`,
                }}
              >
                <Wrench
                  size={14}
                  style={{ color: SEVERITY_COLOR[wo.priority] }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {wo.title}
                </div>

                <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-mono">{wo.id}</span>

                  <span>·</span>

                  <MapPin size={10} />
                  <span>{wo.branch.split(" ")[0]}</span>

                  <span>·</span>

                  <span>
                    Due{" "}
                    {new Date(wo.scheduledDate).toLocaleDateString("en-NG", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
              </div>

              <span
                className="px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0"
                style={{
                  backgroundColor: `${WO_STATUS_COLOR[wo.status]}15`,
                  color: WO_STATUS_COLOR[wo.status],
                }}
              >
                {wo.status}
              </span>
            </div>
          ))
        ) : (
          <div className="px-5 py-8 text-center text-sm text-gray-400">
            No active work orders
          </div>
        )}
      </div>
    </div>
  );
}
