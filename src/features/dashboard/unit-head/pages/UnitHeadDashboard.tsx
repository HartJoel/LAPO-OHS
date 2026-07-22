import { TrendingUp, TriangleAlert, Users } from "lucide-react";
import type { CaseStatus, Severity, User } from "../../../../types";
import StatCards from "../../shared";
import ProgressCard from "../components/cards/ProgressCard";
import AlertCard from "../../shared/components/AlertCard";
import CaseTypeChart from "../components/charts/CaseTypeChart";
import { byStatus, byType } from "../../hr/data/dashboardData";
import ReportChart from "../components/charts/ReportChart";
import {
  agingData,
  bySeverity,
  slaBreaches,
  stats,
  teamCases,
  teamMembers,
} from "../data/data";
import CaseAgingCard from "../components/cards/CaseAgingCard";
import TeamMembersCard from "../components/cards/TeamMembersCard";
import TeamCasesTable from "../components/table/TeamCasesTable";
import { useNavigate } from "react-router-dom";

interface Props {
  user: User;
}

const getSLAStatus = (
  submittedDate: string,
  severity: Severity,
  status: CaseStatus,
) => {
  if (status === "Resolved" || status === "Closed") {
    return {
      label: "Completed",
      color: "green" as const,
    };
  }

  if (status === "Escalated") {
    return {
      label: "Escalated",
      color: "amber" as const,
    };
  }

  return {
    label: "SLA Breached",
    color: "red" as const,
  };
};

const LAPO_ORANGE = "#EC8020";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

function UnitHeadDashboard({ user }: Props) {
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
              {user.department} — Case Assignment Queue
            </h1>
            <p className="text-sm text-gray-500">
              {user.name} · {user.jobTitle} · {user.branch}
            </p>
          </div>
        </div>
      </div>

      <StatCards stats={stats} className="mb-6" />

      <ProgressCard
        title="SLA Compliance Rate"
        subtitle="Target: > 85%"
        value={70}
        target={85}
        icon={<TrendingUp size={18} />}
      />

      <AlertCard
        title="SLA Breaches in Your Team"
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

      {/* Charts Row 1 */}
      <div className="grid md:grid-cols-3 gap-5 mt-6 mb-5">
        <ReportChart title="Cases by Status" data={bySeverity} />
        <CaseTypeChart title="Cases by Report Type" data={byType} />
        <CaseAgingCard title="Aging Open Cases" data={agingData} />
      </div>

      {/* Team Summary + Recent Cases */}
      <div className="grid md:grid-cols-3 gap-5">
        <TeamMembersCard title="Team Members" members={teamMembers} />

        <TeamCasesTable
          title="Recent Team Cases"
          cases={teamCases}
          viewAll={() => navigate("/manager/team-cases")}
          openCase={(id) => navigate(`/manager/cases/${id}`)}
          getSLAStatus={getSLAStatus}
        />
      </div>
    </div>
  );
}

export default UnitHeadDashboard;
