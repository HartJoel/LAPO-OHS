import { Download } from "lucide-react";

import { BarChart2, ShieldCheck, Clock, TrendingUp } from "lucide-react";
import StatCard from "../components/card/StatCard";
import MonthlyTrendChart from "../components/charts/MonthlyTrendChart";
import { monthlyTrend } from "../data/monthlyTrend";
import TopReportedCategories from "../components/card/TopReportedCategories";
import { topCategories } from "../data/topCategories";
import BranchPerformanceOverview from "../components/charts/BranchPerformanceOverview";
import { byBranch } from "../data/branchPerformance";
const LAPO_ORANGE = "#F97316";

const stats = [
  {
    label: "Total Cases",
    value: 20,
    sub: `4 open . 6 closed`,
    color: "#4F46E5",
    bg: "#EEF2FF",
    icon: BarChart2,
  },
  {
    label: "SLA Compliance",
    value: "30%",
    sub: "14 breaches",
    color: "#DC2626",
    bg: "#FEF2F2",
    icon: ShieldCheck,
  },
  {
    label: "Avg Resolution",
    value: "8.2 days",
    sub: "target < 14 days",
    color: LAPO_ORANGE,
    bg: "#FFF4EA",
    icon: Clock,
  },
  {
    label: "Anonymous Rate",
    value: "20%",
    sub: "4 of 20 reports",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: TrendingUp,
  },
];

function SystemAnalytis() {
  const year = new Date().getFullYear();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: "22px", fontWeight: 700 }}
          >
            System Analytics
          </h1>
          <p className="text-gray-500 text-sm">
            {`Comprehensive OHS-WCMS performance report · Q1-Q2 ${year}`}
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <Download size={15} />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <MonthlyTrendChart data={monthlyTrend} />

        <BranchPerformanceOverview branches={byBranch} />
        
      <TopReportedCategories categories={topCategories} />
    </div>
  );
}

export default SystemAnalytis;
