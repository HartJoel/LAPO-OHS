import { ArrowRight } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

interface BranchCases {
  name: string;
  open: number;
  resolved: number;
}

interface CasesByBranchChartProps {
  title: string;
  data: BranchCases[];
  onViewAll: () => void;
}

export default function CasesByBranchChart({
  title,
  data,
  onViewAll,
}: CasesByBranchChartProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-gray-900">
          {title}
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-medium hover:opacity-80"
          style={{ color: LAPO_ORANGE }}
        >
          View all cases
          <ArrowRight size={12} />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data}
          barSize={20}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
          />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
          />

          <YAxis
            tick={{ fontSize: 10 }}
            allowDecimals={false}
          />

          <Tooltip />

          <Bar
            dataKey="open"
            name="Open"
            fill={LAPO_ORANGE}
            radius={[3, 3, 0, 0]}
          />

          <Bar
            dataKey="resolved"
            name="Resolved"
            fill={LAPO_GREEN}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-center items-center gap-4 mt-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: LAPO_ORANGE }}
          />
          Open
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: LAPO_GREEN }}
          />
          Resolved
        </div>
      </div>
    </div>
  );
}