import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { hoverAnimation } from "../../../shared/animations";

interface SeverityChartData {
  name: string;
  value: number;
  fill: string;
}

interface SeverityChartProps {
  title: string;
  data: SeverityChartData[];
}

const SeverityChart = ({ title, data }: SeverityChartProps) => {
  return (
    <motion.div
      {...hoverAnimation}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
    >
      <div className="text-sm font-semibold text-gray-900 mb-4">{title}</div>

      <ResponsiveContainer width="100%" height={140}>
        <BarChart
          data={data}
          layout="vertical"
          barSize={32}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis type="number" tick={{ fontSize: 10 }} />

          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11 }}
            width={65}
          />

          <Tooltip />

          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SeverityChart;
