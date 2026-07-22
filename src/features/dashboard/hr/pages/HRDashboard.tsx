import type { User } from "../../../../types/auth.types";
import StatCards from "../../shared";

import { useNavigate } from "react-router-dom";
import type { CaseStatus, CaseType, Severity } from "../../../../types";
import {
  activeCases,
  pendingAttestationCases,
  resolvedCases,
  stats,
} from "../data/dashboardData";
import ActiveCasesCard from "../components/cards/ActiveCasesCard";
import RecentlyResolvedCard from "../components/cards/RecentlyResolvedCard";
import PendingAttestationBanner from "../../../shared/components/banners/PendingAttestationBanner";

interface Props {
  user: User;
}

const LAPO_ORANGE = "#EC8020";
// const LAPO_GREEN = "#009D4C";

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

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function HRDashboard({ user }: Props) {
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
              My Cases
            </h1>
            <p className="text-gray-500 text-sm">
              {user.name} · {user.jobTitle} · {user.department}
            </p>
          </div>
        </div>
      </div>

      <PendingAttestationBanner cases={pendingAttestationCases} />

      <StatCards stats={stats} className="mb-6" />

      <ActiveCasesCard
        cases={activeCases}
        onCaseClick={(id) => navigate(`/hr/cases/${id}`)}
        onViewAll={() => navigate("/hr/cases")}
      />

      <RecentlyResolvedCard
        cases={resolvedCases}
        onCaseClick={(id) => navigate(`/hr/cases/${id}`)}
      />
    </div>
  );
}
