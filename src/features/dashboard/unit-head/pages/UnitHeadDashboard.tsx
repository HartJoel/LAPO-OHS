import type { User } from "../../../../types";
import StatCards from "../../shared";

import {
  pendingAssignments,
  recentlyAssignedCases,
  stats,
  workload,
} from "../data/data";

import { useNavigate } from "react-router-dom";
import PendingAssignmentCard from "../components/cards/PendingAssignmentCard";
import TeamWorkloadCard from "../components/cards/TeamWorkloadCard";
import RecentlyAssignedCard from "../components/cards/RecentlyAssignedCard";
import UnassignedAlertBanner from "../components/UnassignedAlertBanner";
interface Props {
  user: User;
}

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

      <UnassignedAlertBanner count={5} onViewAll={() => navigate("/cases")} />

      <StatCards stats={stats} className="mb-6" />
      <div className="grid grid-cols-3 gap-5">
        <PendingAssignmentCard
          cases={pendingAssignments.filter((c) => !c.assignedTo)}
          onCaseClick={(id) => navigate(`/cases/${id}`)}
          onViewMore={() => navigate("/team-cases")}
        />

        <div className="flex flex-col gap-4">
          <TeamWorkloadCard workload={workload} />

          <RecentlyAssignedCard
            cases={recentlyAssignedCases}
            onCaseClick={(id) => navigate(`/manager/cases/${id}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default UnitHeadDashboard;
