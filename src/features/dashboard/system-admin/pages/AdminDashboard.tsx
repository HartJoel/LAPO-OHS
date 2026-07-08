import { useNavigate } from "react-router-dom";
import StatCards from "../../shared";
import {
  AlertTriangle,
  Clock,
  FileText,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

const stats = [
  {
    label: "Total Users",
    value: 8,
    icon: Users,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    label: "Total Cases",
    value: 20,
    icon: FileText,
    color: "#374151",
    bg: "#F3F4F6",
  },
  {
    label: "Open Cases",
    value: 14,
    icon: AlertTriangle,
    color: LAPO_ORANGE,
    bg: "#FFF4EA",
  },
  {
    label: "Critical Open",
    value: 3,
    icon: AlertTriangle,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    label: "SLA Compliance",
    value: "30%",
    icon: ShieldCheck,
    color: LAPO_GREEN,
    bg: "#EDFBF3",
  },
  {
    label: "Active WOs",
    value: 4,
    icon: Wrench,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    label: "Inspections Overdue",
    value: 0,
    icon: Clock,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1
          className="text-gray-900 mb-1"
          style={{ fontSize: "22px", fontWeight: 700 }}
        >
          System Administration
        </h1>
        <p className="text-gray-500 text-sm">
          OHS-WCMS full system overview · {formattedDate}
        </p>
      </div>

      <StatCards stats={stats} className="mb-6" />
    </div>
  );
}

export default AdminDashboard;
