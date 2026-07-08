import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCards from "../../shared";
import AlertCard from "../../shared/components/AlertCard";
import ActiveWorkOrdersCard from "../components/cards/ActiveWorkOrdersCard";
import UpcomingInspectionsCard from "../components/cards/UpcomingInspectionsCard";
import CasesByBranchChart from "../components/charts/CasesByBranchChart";
import RecentFacilityCasesTable from "../components/tables/RecentFacilityCasesTable";

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

const slaBreaches = [
  {
    id: "OHS-2026-001",
    primary: "OHS-2026-001",
    secondary: "High",
    tertiary: "Poor office ventilation",
  },
  {
    id: "OHS-2026-002",
    primary: "OHS-2026-002",
    secondary: "High",
    tertiary: "Poor office ventilation",
  },
  {
    id: "OHS-2026-003",
    primary: "OHS-2026-003",
    secondary: "Medium",
    tertiary: "Poor office ventilation",
  },
  {
    id: "OHS-2026-005",
    primary: "OHS-2026-005",
    secondary: "High",
    tertiary: "Poor office ventilation",
  },
  {
    id: "OHS-2026-006",
    primary: "OHS-2026-006",
    secondary: "Medium",
    tertiary: "Poor office ventilation",
  },
];

const activeWorkOrders = [
  {
    id: "WO-2026-001",
    title: "HVAC System Service & Generator Duct Sealing",
    branch: "Lagos",
    scheduledDate: "2026-04-09",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "WO-2026-002",
    title: "Ergonomic Chair Replacement – Workstation 12",
    branch: "Lagos",
    scheduledDate: "2026-04-14",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "WO-2026-003",
    title: "Monitor Arm & Wrist Rest Installation – Workstation 7",
    branch: "Lagos",
    scheduledDate: "2026-04-12",
    priority: "Medium",
    status: "Pending Parts",
  },
  {
    id: "WO-2026-004",
    title: "Chemical Fumes Investigation & Emergency Ventilation",
    branch: "Abuja",
    scheduledDate: "2026-04-10",
    priority: "Critical",
    status: "In Progress",
  },
];

const casesByBranch = [
  {
    name: "Lagos Island Branch",
    open: 4,
    resolved: 3,
  },
  {
    name: "Surulere Branch",
    open: 2,
    resolved: 5,
  },
  {
    name: "Ikeja Branch",
    open: 5,
    resolved: 4,
  },
  {
    name: "Abuja Main Branch",
    open: 1,
    resolved: 2,
  },
  {
    name: "Port Harcourt Branch",
    open: 3,
    resolved: 1,
  },
  {
    name: "Kano Branch",
    open: 0,
    resolved: 4,
  },
  {
    name: "Head Office – Lagos",
    open: 2,
    resolved: 5,
  },
];

const recentFacilityCases = [
  {
    id: "OHS-2026-001",
    type: "Health & Ergonomics",
    typeColor: "#059669",
    typeBg: "#ECFDF5",
    category: "Poor office ventilation",
    branch: "Lagos",
    severity: "High",
    status: "Under Review",
    workOrder: "WO-2026-001",
  },
  {
    id: "OHS-2026-003",
    type: "Health & Ergonomics",
    typeColor: "#059669",
    typeBg: "#ECFDF5",
    category: "Chair-related body pain",
    branch: "Lagos",
    severity: "Medium",
    status: "Logged",
    workOrder: "WO-2026-002",
  },
  {
    id: "OHS-2026-004",
    type: "Environmental & Facility Hazards",
    typeColor: "#0369A1",
    typeBg: "#EFF6FF",
    category: "Faulty facility equipment",
    branch: "Surulere",
    severity: "Medium",
    status: "Resolved",
    workOrder: null,
  },
  {
    id: "OHS-2026-006",
    type: "Health & Ergonomics",
    typeColor: "#059669",
    typeBg: "#ECFDF5",
    category: "Computer-related strain",
    branch: "Lagos",
    severity: "Medium",
    status: "Investigating",
    workOrder: "WO-2026-003",
  },
  {
    id: "OHS-2026-007",
    type: "Environmental & Facility Hazards",
    typeColor: "#0369A1",
    typeBg: "#EFF6FF",
    category: "Chemical pollution",
    branch: "Abuja",
    severity: "Critical",
    status: "Logged",
    workOrder: "WO-2026-004",
  },
  {
    id: "OHS-2026-009",
    type: "Environmental & Facility Hazards",
    typeColor: "#0369A1",
    typeBg: "#EFF6FF",
    category: "Faulty facility equipment",
    branch: "Abuja",
    severity: "Medium",
    status: "Under Review",
    workOrder: "WO-2026-005",
  },
];

const upcomingInspections: {
  id: string;
  type: string;
  branch: string;
  scheduledDate: string;
  status: "Overdue" | "Scheduled";
}[] = [
  {
    id: "INS-2026-001",
    type: "Routine Safety",
    branch: "Lagos",
    scheduledDate: "2026-04-12",
    status: "Scheduled",
  },
  {
    id: "INS-2026-002",
    type: "Fire Safety",
    branch: "Kano",
    scheduledDate: "2026-04-12",
    status: "Scheduled",
  },
  {
    id: "INS-2026-003",
    type: "Ergonomic Assessment",
    branch: "Lagos",
    scheduledDate: "2026-04-12",
    status: "Scheduled",
  },
  {
    id: "INS-2026-004",
    type: "Emergency Preparedness",
    branch: "Ibadan",
    scheduledDate: "2026-04-15",
    status: "Scheduled",
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

      <AlertCard
        title="SLA Breaches — Immediate Attention Required"
        count={slaBreaches.length}
        color="red"
        icon={<TriangleAlert size={16} />}
        route="/cases"
        items={slaBreaches.map((breach) => ({
          id: breach.id,
          primary: breach.primary,
          secondary: breach.secondary,
          tertiary: breach.tertiary,
        }))}
      />

      <div className="grid md:grid-cols-2 gap-5 mt-6 mb-5">
        <ActiveWorkOrdersCard
          workOrders={activeWorkOrders}
          onViewAll={() => navigate("/facilities/workorders")}
          onOpenWorkOrder={(id) => navigate(`/facilities/workorders/${id}`)}
        />

        <UpcomingInspectionsCard
          title="Upcoming Inspections"
          inspections={upcomingInspections}
          onViewAll={() => navigate("/facilities/inspections")}
          onOpenInspection={(id) => navigate(`/facilities/inspections/${id}`)}
        />
      </div>

      <CasesByBranchChart
        title="Facility Cases by Branch"
        data={casesByBranch}
        onViewAll={() => navigate("/facilities/cases")}
      />

      <RecentFacilityCasesTable
        title="Recent Facility Cases"
        cases={recentFacilityCases}
        onViewAll={() => navigate("/facilities/cases")}
        onOpenCase={(id) => navigate(`/facilities/cases/${id}`)}
      />
    </div>
  );
}

export default FacilitiesDashboard;
