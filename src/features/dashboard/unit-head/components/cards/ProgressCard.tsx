import type { ReactNode } from "react";
const LAPO_GREEN = "#009D4C";

interface ProgressCardProps {
  title: string;
  subtitle: string;
  value: number;
  target: number;
  successColor?: string;
  dangerColor?: string;
  icon: ReactNode;
}

const ProgressCard = ({
  title,
  subtitle,
  value,
  target,
  successColor,
  dangerColor,
  icon,
}: ProgressCardProps) => {
  const progressColor =
    value >= target
      ? successColor ?? LAPO_GREEN
      : dangerColor ?? "#DC2626";

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-gray-900">
            {title}
          </div>

          <div className="text-xs text-gray-400">
            {subtitle}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="text-2xl font-bold"
            style={{ color: progressColor }}
          >
            {value}%
          </span>

          <span style={{ color: progressColor }}>
            {icon}
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-3">
        <div
          className="h-3 rounded-full transition-all duration-500"
          style={{
            width: `${value}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>0%</span>
        <span>Target: {target}%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default ProgressCard;