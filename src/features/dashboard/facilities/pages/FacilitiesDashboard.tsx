import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCards from "../../shared";

const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

const stats = [
  {
    label: "Active Work Orders",
    value: 4,
    icon: Wrench,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    label: "Overdue WOs",
    value: 2,
    icon: Clock,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    label: "Critical Cases",
    value: 2,
    icon: AlertTriangle,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    label: "Inspections Due",
    value: 4,
    icon: ClipboardCheck,
    color: LAPO_ORANGE,
    bg: "#FFF4EA",
  },
  {
    label: "WOs Completed",
    value: 2,
    icon: CheckCircle2,
    color: LAPO_GREEN,
    bg: "#EDFBF3",
  },
];

function FacilitiesDashboard() {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: "22px", fontWeight: 700 }}
          >
            Facilities & HSE Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            OHS case management — Facilities, Safety & Health · {formattedDate}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Wrench size={15} />
            Work Orders
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-colors hover:opacity-90"
            style={{ backgroundColor: LAPO_GREEN }}
          >
            <ClipboardCheck size={15} />
            Inspections
          </button>
        </div>
      </div>

      <StatCards stats={stats} className="mb-6" />
    </div>
  );
}

export default FacilitiesDashboard;
