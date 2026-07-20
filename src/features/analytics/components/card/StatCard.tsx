import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  sub: string;
  color: string;
  bg: string;
  icon: LucideIcon;
}

export default function StatCard({
  label,
  value,
  sub,
  color,
  bg,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: bg }}
        >
          <Icon size={18} style={{ color }} />
        </div>

        <span className="text-xl font-bold" style={{ color }}>
          {value}
        </span>
      </div>

      <div className="text-sm font-medium text-gray-700">
        {label}
      </div>

      <div className="mt-0.5 text-xs text-gray-400">
        {sub}
      </div>
    </div>
  );
}