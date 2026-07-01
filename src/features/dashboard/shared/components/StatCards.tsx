import StatCard from "./StatCard";
import type { StatCardData } from "../types";

interface StatCardsProps {
  stats: StatCardData[];
  className?: string;
}

const StatCards = ({ stats, className = "" }: StatCardsProps) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
};

export default StatCards;