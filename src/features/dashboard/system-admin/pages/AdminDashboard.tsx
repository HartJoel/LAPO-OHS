import { useNavigate } from "react-router-dom";
import StatCards from "../../shared";
import {
  AlertTriangle,
  Clock,
  FileText,
  ShieldCheck,
  Users,
  Wrench,
  ClipboardList,
  ClipboardCheck,
  BarChart3,
  Settings,
} from "lucide-react";
import SystemStatusCard from "../components/cards/SystemStatusCard";
import QuickLinksGrid from "../components/QuickLinksGrid";
import UserRoleDistributionCard from "../components/cards/UserRoleDistributionCard";
import CasesByBranchChart from "../components/cards/CasesByBranchChart";
import RecentSystemActivityCard from "../components/cards/RecentSystemActivityCard";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

const quickLinks = [
  {
    label: "Facility Cases",
    desc: "View and manage reported cases",
    path: "/facilities/cases",
    icon: ClipboardList,
    color: "#EC8020",
    bg: "#FFF7ED",
  },
  {
    label: "Work Orders",
    desc: "Track maintenance work orders",
    path: "/facilities/workorders",
    icon: Wrench,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    label: "Inspections",
    desc: "Manage scheduled inspections",
    path: "/facilities/inspections",
    icon: ClipboardCheck,
    color: "#009D4C",
    bg: "#ECFDF5",
  },
  {
    label: "Reports",
    desc: "Facility analytics and reports",
    path: "/facilities/reports",
    icon: BarChart3,
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    label: "Settings",
    desc: "Configure facility settings",
    path: "/facilities/settings",
    icon: Settings,
    color: "#6B7280",
    bg: "#F3F4F6",
  },
  {
    label: "Documentation",
    desc: "Policies and procedures",
    path: "/facilities/docs",
    icon: FileText,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

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

const systemStatus = {
  title: "System Status",
  status: "All Systems Operational",
  items: [
    {
      label: "System Uptime",
      value: "99.7%",
    },
    {
      label: "Last Backup",
      value: "11 Apr 2026, 02:00",
    },
    {
      label: "Active Sessions",
      value: "8",
    },
    {
      label: "Avg Response Time",
      value: "1.2s",
    },
  ],
};

const userRoleDistribution = [
  {
    name: "Employee",
    value: 4,
  },
  {
    name: "HR & Compliance",
    value: 1,
  },
  {
    name: "Unit Head",
    value: 1,
  },
  {
    name: "Facilities & HSE",
    value: 1,
  },
  {
    name: "System Admin",
    value: 1,
  },
];

const casesByBranch = [
  {
    name: "Lagos",
    cases: 18,
    open: 6,
  },
  {
    name: "Surulere",
    cases: 12,
    open: 4,
  },
  {
    name: "Ikeja",
    cases: 15,
    open: 5,
  },
  {
    name: "Abuja",
    cases: 10,
    open: 3,
  },
  {
    name: "Port",
    cases: 8,
    open: 2,
  },
  {
    name: "Kano",
    cases: 6,
    open: 1,
  },
];

const ROLE_COLORS = ["#EC8020", "#009D4C", "#3B82F6", "#8B5CF6", "#DC2626"];

const recentSystemActivities = [
  {
    id: "AUD-001",
    action: "Case auto-routed to Facilities Management",
    caseId: "OHS-2026-012",
    performedBy: "System",
    timestamp: "2026-04-11T08:01:00",
  },
  {
    id: "AUD-002",
    action:
      "SLA BREACH ALERT: Critical case approaching 24hr SLA. Escalation triggered to Head of People & HSE Director.",
    caseId: "OHS-2026-007",
    performedBy: "System",
    timestamp: "2026-04-11T08:00:00",
  },
  {
    id: "AUD-003",
    action: "Case logged by Amaka Okafor",
    caseId: "OHS-2026-012",
    performedBy: "Amaka Okafor",
    timestamp: "2026-04-11T08:00:00",
  },
  {
    id: "AUD-004",
    action:
      "SLA BREACH ALERT: Critical case approaching 24hr SLA — Escalation triggered",
    caseId: "OHS-2026-016",
    performedBy: "System",
    timestamp: "2026-04-11T08:00:00",
  },
  {
    id: "AUD-005",
    action:
      "Critical severity auto-routing: Facilities, HSE, and Branch Management notified",
    caseId: "OHS-2026-007",
    performedBy: "System",
    timestamp: "2026-04-10T15:31:00",
  },
  {
    id: "AUD-006",
    action: "Anonymous case logged. Reference token issued: BZ3M-7R4S-T8UV",
    caseId: "OHS-2026-007",
    performedBy: "System (Anonymous)",
    timestamp: "2026-04-10T15:30:00",
  },
  {
    id: "AUD-007",
    action:
      "Critical severity: Facilities, HSE & Branch Management auto-notified",
    caseId: "OHS-2026-016",
    performedBy: "System",
    timestamp: "2026-04-10T14:01:00",
  },
  {
    id: "AUD-008",
    action: "Anonymous case logged. Reference token: PH9K-4L6N-Q2WR",
    caseId: "OHS-2026-016",
    performedBy: "System (Anonymous)",
    timestamp: "2026-04-10T14:00:00",
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

      <SystemStatusCard
        title={systemStatus.title}
        status={systemStatus.status}
        items={systemStatus.items}
      />

      <QuickLinksGrid
        links={quickLinks}
        onNavigate={(path) => navigate(path)}
      />

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <UserRoleDistributionCard
          title="User Role Distribution"
          data={userRoleDistribution}
          colors={ROLE_COLORS}
        />

        <CasesByBranchChart title="Cases by Branch" data={casesByBranch} />
      </div>

      <RecentSystemActivityCard
        title="Recent System Activity"
        activities={recentSystemActivities}
        onViewAll={() => navigate("/admin/audit")}
      />
    </div>
  );
}

export default AdminDashboard;
