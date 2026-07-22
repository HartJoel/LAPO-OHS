import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FolderOpen,
  ShieldAlert,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCards from "../../shared";
import CasesByUnitCard from "../components/CasesByUnitCard";
import { escalatedCases, incidentTypeData, unitData } from "../mock/data";
import IncidentTypeDistributionCard from "../components/IncidentTypeDistributionCard";
import EscalatedCasesTable from "../components/tables/EscalatedCasesTable";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

const stats = [
  {
    label: "Total Cases",
    value: 20,
    icon: FolderOpen,
    color: "#6366f1",
    bg: "#EEF2FF",
  },
  {
    label: "Active Cases",
    value: 14,
    icon: Clock,
    color: LAPO_ORANGE,
    bg: "#EEF2FF",
  },
  {
    label: "Escalated",
    value: 1,
    icon: ShieldAlert,
    color: "#DC2626",
    bg: "#EEF2FF",
  },
  {
    label: "SLA Breached",
    value: 14,
    icon: AlertTriangle,
    color: "#F59E0B",
    bg: "#EEF2FF",
  },
  {
    label: "Resolved / Closed",
    value: 6,
    icon: CheckCircle,
    color: LAPO_GREEN,
    bg: "#EEF2FF",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

function SustainabilityDashboard({ user }: Props) {
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ background: LAPO_ORANGE }}
          >
            {getInitials(user.name)}
          </div>
          <div>
            <h1
              className="text-gray-900 leading-tight"
              style={{ fontSize: "22px", fontWeight: 700 }}
            >
              System-Wide OHS Oversight
            </h1>
            <p className="text-gray-500 text-sm">
              {user?.name} · {user?.jobTitle} · Sustainability & Escalation
              Authority
            </p>
          </div>
        </div>
      </div>

      <StatCards stats={stats} className="mb-6" />

      <div className="grid grid-cols-3 gap-5 mb-5">
        <CasesByUnitCard data={unitData} />

        <IncidentTypeDistributionCard data={incidentTypeData} />
      </div>

      <EscalatedCasesTable
        cases={escalatedCases}
        onCaseClick={(id) => navigate(`/cases/${id}`)}
        onViewAll={() => navigate("/cases")}
      />
    </div>
  );
}
export default SustainabilityDashboard;
