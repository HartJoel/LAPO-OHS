import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import type { BranchPerformance } from "../../data/branchPerformance";


const LAPO_GREEN = "#22C55E";
const LAPO_ORANGE = "#F58220";

interface Props {
  branches: BranchPerformance[];
}

export default function BranchPerformanceOverview({
  branches,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-5">
      <div className="font-semibold text-gray-900 text-sm mb-4">
        Branch Performance Overview
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={branches}
          barSize={18}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
          <XAxis dataKey="name" tick={{ fontSize: 9 }} />
          <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "10px" }} />

          <Bar
            dataKey="resolved"
            name="Resolved"
            fill={LAPO_GREEN}
            radius={[3, 3, 0, 0]}
          />

          <Bar
            dataKey="open"
            name="Open"
            fill={LAPO_ORANGE}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      <table className="w-full mt-4">
        <thead>
          <tr className="border-b border-gray-100">
            {[
              "Branch",
              "Total Cases",
              "Open",
              "Resolved/Closed",
              "Compliance Score",
            ].map((header) => (
              <th
                key={header}
                className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {branches.map((branch) => {
            const score =
              branch.total > 0
                ? Math.round((branch.resolved / branch.total) * 100)
                : 100;

            return (
              <tr
                key={branch.name}
                className="border-b border-gray-50 last:border-0"
              >
                <td className="py-2.5 text-sm font-medium text-gray-900">
                  {branch.name}
                </td>

                <td className="py-2.5 text-sm text-gray-700">
                  {branch.total}
                </td>

                <td className="py-2.5">
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color:
                        branch.open > 0 ? LAPO_ORANGE : "#9CA3AF",
                    }}
                  >
                    {branch.open}
                  </span>
                </td>

                <td className="py-2.5 text-sm text-gray-700">
                  {branch.resolved}
                </td>

                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-20">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${score}%`,
                          backgroundColor:
                            score >= 70 ? LAPO_GREEN : "#DC2626",
                        }}
                      />
                    </div>

                    <span
                      className="text-xs font-bold"
                      style={{
                        color:
                          score >= 70 ? LAPO_GREEN : "#DC2626",
                      }}
                    >
                      {score}%
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}