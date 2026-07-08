import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { hoverAnimation } from "../../../shared/animations";

interface StatusChartData {
  name: string;
  value: number;
  fill: string;
}

interface StatusChartProps {
  title: string;
  data: StatusChartData[];
}

const ReportChart = ({ title, data }: StatusChartProps) => {
  return (
    <motion.div
      {...hoverAnimation}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
    >
      <div className="text-sm font-semibold text-gray-900 mb-4">{title}</div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          barSize={28}
          margin={{
            top: 5,
            right: 5,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />

          <XAxis dataKey="name" tick={{ fontSize: 9 }} />

          <YAxis tick={{ fontSize: 10 }} />

          <Tooltip />

          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ReportChart;
