import { AlertTriangle } from "lucide-react";

interface UnassignedAlertBannerProps {
  count: number;
  onViewAll?: () => void;
}

export default function UnassignedAlertBanner({
  count,
  onViewAll,
}: UnassignedAlertBannerProps) {
  if (count === 0) return null;

  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
      <AlertTriangle
        size={18}
        className="shrink-0 text-orange-500"
      />

      <div className="flex-1">
        <span className="text-sm font-semibold text-orange-800">
          {count} case{count !== 1 ? "s" : ""} pending assignment
        </span>

        <span className="text-sm text-orange-600">
          {" "}
          — assign to an incident manager below to begin handling.
        </span>
      </div>

      <button
        onClick={onViewAll}
        className="whitespace-nowrap text-sm font-semibold text-orange-700 hover:text-orange-900"
      >
        View all →
      </button>
    </div>
  );
}