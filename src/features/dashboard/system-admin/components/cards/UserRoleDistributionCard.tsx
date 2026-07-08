import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { hoverAnimation } from "../../../shared/animations";

interface RoleDistribution {
  name: string;
  value: number;
}

interface UserRoleDistributionCardProps {
  title: string;
  data: RoleDistribution[];
  colors: string[];
}

export default function UserRoleDistributionCard({
  title,
  data,
  colors,
}: UserRoleDistributionCardProps) {
  return (
    <motion.div
      {...hoverAnimation}
      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      <div className="mb-4 text-sm font-semibold text-gray-900">{title}</div>

      <div className="flex items-center gap-4">
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" outerRadius={55} dataKey="value">
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex-1 space-y-2">
          {data.map((role, index) => (
            <div
              key={role.name}
              className="flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: colors[index % colors.length],
                  }}
                />

                <span className="text-gray-600">{role.name}</span>
              </div>

              <span className="font-bold text-gray-900">{role.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
