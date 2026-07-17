import type { StatItem } from "../../types/stats";
import StatsCard from "./StatsCard";

interface Props {
  stats: StatItem[];
}

export default function StatsGrid({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {stats.map((stat) => (
        <StatsCard
          key={stat.label}
          stat={stat}
        />
      ))}
    </div>
  );
}