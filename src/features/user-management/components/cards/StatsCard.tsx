import type { StatItem } from "../../types/stats";

interface Props {
  stat: StatItem;
}

export default function StatsCard({ stat }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h2
        className="mb-1 text-2xl font-bold"
        style={{ color: stat.color }}
      >
        {stat.value}
      </h2>

      <p className="text-xs text-gray-500">
        {stat.label}
      </p>
    </div>
  );
}