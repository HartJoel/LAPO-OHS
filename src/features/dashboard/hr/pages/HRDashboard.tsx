import {
  Clock,
  TriangleAlert,
} from "lucide-react";
import type { User } from "../../../../types/auth.types";
import StatCards from "../../shared";

import AlertCard from "../../shared/components/AlertCard";
import CaseTypeChart from "../components/charts/CaseTypeChart";
import StatusChart from "../components/charts/StatusChart";
import MonthlyTrendChart from "../components/charts/MonthlyTrendChart";
import SeverityChart from "../components/charts/SeverityChart";
import KpiSummary from "../components/cards/KpiSummary";
import RecentCasesTable from "../components/tables/RecentCasesTable";
import { useNavigate } from "react-router-dom";
import type { CaseStatus, CaseType, Severity } from "../../../../types";
import { bySeverity, byStatus, byType, kpiData, monthlyTrend, slaBreaches, stats } from "../data/dashboardData";

interface Props {
  user: User;
}

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";



interface Case {
  id: string;
  type: CaseType;
  category: string;
  branch: string;
  reporterName: string;
  isAnonymous: boolean;
  status: CaseStatus;
  severity: Severity;
  submittedDate: string;
}
const recentCases: Case[] = [
  {
    id: "OHS-2026-001",
    type: "health",
    category: "Poor office ventilation",
    branch: "Lagos",
    reporterName: "Amaka Okafor",
    isAnonymous: false,
    status: "Under Review",
    severity: "High",
    submittedDate: "2026-04-11",
  },
  {
    id: "OHS-2026-001",
    type: "health",
    category: "Poor office ventilation",
    branch: "Lagos",
    reporterName: "Amaka Okafor",
    isAnonymous: false,
    status: "Under Review",
    severity: "High",
    submittedDate: "2026-04-11",
  },
  {
    id: "OHS-2026-002",
    type: "health",
    category: "Poor office ventilation",
    branch: "Lagos",
    reporterName: "Amaka Okafor",
    isAnonymous: false,
    status: "Under Review",
    severity: "High",
    submittedDate: "2026-04-11",
  },
  {
    id: "OHS-2026-003",
    type: "health",
    category: "Poor office ventilation",
    branch: "Lagos",
    reporterName: "Amaka Okafor",
    isAnonymous: false,
    status: "Under Review",
    severity: "Low",
    submittedDate: "2026-04-11",
  },
];

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

export default function HRDashboard({ user }: Props) {
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
          Incident Manager Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          System-wide OHS case overview · {formattedDate}
        </p>
      </div>

      <StatCards stats={stats} className="mb-6" />

      <div className="space-y-3 mb-6">
        <AlertCard
          title="Escalated Case — Senior Management Review Required"
          count={1}
          color="red"
          icon={<TriangleAlert size={16} />}
          route="/cases"
          items={[
            {
              id: "OHS-2026-019",
              primary: "OHS-2026-019",
              secondary: "Workload-related ailment",
            },
          ]}
        />

        <AlertCard
          title="Case Awaiting Complainant Attestation"
          count={1}
          color="amber"
          icon={<Clock size={14} />}
          route="/cases"
          items={[
            {
              id: "OHS-2026-020",
              primary: "OHS-2026-020",
              secondary: "Bode Fashola",
            },
          ]}
        />

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
      </div>

      {/* Charts Row 1 */}
      <div className="grid md:grid-cols-3 gap-5 mb-5">
        <CaseTypeChart title="Cases by Type" data={byType} />
        <StatusChart title="Cases by Status" data={byStatus} />
        <MonthlyTrendChart
          title="Monthly Report Trend"
          subtitle="2026"
          data={monthlyTrend}
          lineColor={LAPO_ORANGE}
        />
      </div>

      {/* Severity + SLA KPIs */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <SeverityChart title="Cases by Severity" data={bySeverity} />
        <KpiSummary title="KPI Summary" data={kpiData} />
      </div>

      <RecentCasesTable
        title="Recent Cases"
        cases={recentCases}
        viewAll={() => navigate("/hr/cases")}
        openCase={(id) => navigate(`/hr/cases/${id}`)}
        getSLAStatus={getSLAStatus}
      />
    </div>
  );
}
