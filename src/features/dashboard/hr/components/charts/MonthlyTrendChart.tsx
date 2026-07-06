import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { hoverAnimation } from "../../../shared/animations";

interface MonthlyTrendData {
  month: string;
  cases: number;
}

interface MonthlyTrendChartProps {
  title: string;
  subtitle?: string;
  data: MonthlyTrendData[];
  lineColor: string;
}

const MonthlyTrendChart = ({
  title,
  subtitle,
  data,
  lineColor,
}: MonthlyTrendChartProps) => {
  return (
    <motion.div
      {...hoverAnimation}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
    >
      <div className="text-sm font-semibold text-gray-900">{title}</div>

      {subtitle && <div className="text-xs text-gray-400 mb-4">{subtitle}</div>}

      <ResponsiveContainer width="100%" height={180}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />

          <XAxis dataKey="month" tick={{ fontSize: 11 }} />

          <YAxis tick={{ fontSize: 10 }} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cases"
            stroke={lineColor}
            strokeWidth={2.5}
            dot={{
              fill: lineColor,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default MonthlyTrendChart;
