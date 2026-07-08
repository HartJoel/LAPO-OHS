import { ClipboardCheck, TriangleAlert, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCards from "../../shared";
import AlertCard from "../../shared/components/AlertCard";
import ActiveWorkOrdersCard from "../components/cards/ActiveWorkOrdersCard";
import UpcomingInspectionsCard from "../components/cards/UpcomingInspectionsCard";
import CasesByBranchChart from "../components/charts/CasesByBranchChart";
import RecentFacilityCasesTable from "../components/tables/RecentFacilityCasesTable";
import { activeWorkOrders, casesByBranch, recentFacilityCases, slaBreaches, stats, upcomingInspections } from "../data/dashboardData";

// const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

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
