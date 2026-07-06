import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { hoverAnimation } from "../../../shared/animations";

interface CaseTypeData {
  name: string;
  value: number;
  color: string;
}

interface CaseTypeChartProps {
  title: string;
  data: CaseTypeData[];
}

const CaseTypeChart = ({ title, data }: CaseTypeChartProps) => {
  return (
     <motion.div
      {...hoverAnimation}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
    >
      <div className="text-sm font-semibold text-gray-900 mb-4">{title}</div>

      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip formatter={(value, name) => [value, name]} />
        </PieChart>
      </ResponsiveContainer>

      <div className="space-y-1.5 mt-2">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-gray-600">{item.name}</span>
            </div>

            <span className="font-semibold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CaseTypeChart;
