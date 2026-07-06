import StatCard from "./StatCard";
import type { StatCardData } from "../types";

interface StatCardsProps {
  stats: StatCardData[];
  className?: string;
}

const StatCards = ({ stats, className = "" }: StatCardsProps) => {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 ${className}`}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
};

export default StatCards;
