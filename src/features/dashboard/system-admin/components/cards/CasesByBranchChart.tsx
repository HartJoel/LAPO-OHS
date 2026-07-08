import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import { hoverAnimation } from "../../../shared/animations";

const LAPO_ORANGE = "#EC8020";

interface BranchCase {
  name: string;
  cases: number;
  open: number;
}

interface CasesByBranchChartProps {
  title: string;
  data: BranchCase[];
}

export default function CasesByBranchChart({
  title,
  data,
}: CasesByBranchChartProps) {
  return (
    <motion.div
      {...hoverAnimation}
      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      <div className="mb-4 text-sm font-semibold text-gray-900">{title}</div>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={data}
          barSize={18}
          margin={{
            top: 5,
            right: 5,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />

          <XAxis dataKey="name" tick={{ fontSize: 9 }} />

          <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />

          <Tooltip />

          <Bar
            dataKey="cases"
            name="Total"
            fill={`${LAPO_ORANGE}80`}
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
    </motion.div>
  );
}
