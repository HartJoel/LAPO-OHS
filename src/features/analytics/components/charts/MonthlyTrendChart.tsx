import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface MonthlyTrend {
  month: string;
  safety: number;
  health: number;
  harassment: number;
  environmental: number;
}

interface Props {
  data: MonthlyTrend[];
}

const LAPO_GREEN = "#16A34A";

export default function MonthlyTrendChart({ data }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-5">
      <h3 className="text-sm font-semibold text-gray-900">
        Monthly Incident Trend
      </h3>

      <p className="text-xs text-gray-400 mb-4">January – April 2026</p>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          barSize={20}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />

          <XAxis dataKey="month" tick={{ fontSize: 11 }} />

          <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />

          <Tooltip />

          <Legend wrapperStyle={{ fontSize: 11 }} />

          <Bar
            dataKey="safety"
            name="Workplace Safety"
            fill="#DC2626"
            stackId="a"
            radius={[3, 3, 0, 0]}
          />

          <Bar
            dataKey="health"
            name="Health & Ergonomics"
            fill={LAPO_GREEN}
            stackId="a"
            radius={[3, 3, 0, 0]}
          />

          <Bar
            dataKey="harassment"
            name="Harassment & Conduct"
            fill="#7C3AED"
            stackId="a"
            radius={[3, 3, 0, 0]}
          />

          <Bar
            dataKey="environmental"
            name="Environmental"
            fill="#0369A1"
            stackId="a"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
