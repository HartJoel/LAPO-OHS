import type { StatCardData } from "../types";

interface StatCardProps {
  stat: StatCardData;
}

const StatCard = ({ stat }: StatCardProps) => {
  const Icon = stat.icon;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: stat.bg }}
        >
          <Icon size={18} style={{ color: stat.color }} />
        </div>

        <span className="text-2xl font-bold text-gray-900">
          {stat.value}
        </span>
      </div>

      <p className="text-xs text-gray-500">{stat.label}</p>
    </div>
  );
};

export default StatCard;