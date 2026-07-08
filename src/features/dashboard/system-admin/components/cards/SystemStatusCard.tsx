import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { hoverAnimation } from "../../../shared/animations";

const LAPO_GREEN = "#009D4C";

interface SystemStatusItem {
  label: string;
  value: string;
}

interface SystemStatusCardProps {
  title: string;
  status: string;
  items: SystemStatusItem[];
}

export default function SystemStatusCard({
  title,
  status,
  items,
}: SystemStatusCardProps) {
  return (
    <motion.div
      {...hoverAnimation}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity size={14} style={{ color: LAPO_GREEN }} />

        <span className="text-sm font-semibold text-gray-900">{title}</span>

        <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-green-600">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
          >
            <span className="text-xs text-gray-500">{item.label}</span>

            <span className="text-xs font-bold text-gray-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
