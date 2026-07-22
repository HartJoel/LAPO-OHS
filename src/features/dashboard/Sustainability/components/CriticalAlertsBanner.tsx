import { AlertTriangle, ShieldAlert } from "lucide-react";

interface CriticalAlertsBannerProps {
  escalatedCount: number;
  breachedCount: number;
  onReviewEscalated?: () => void;
  onViewBreached?: () => void;
}

export default function CriticalAlertsBanner({
  escalatedCount,
  breachedCount,
  onReviewEscalated,
  onViewBreached,
}: CriticalAlertsBannerProps) {
  if (escalatedCount === 0 && breachedCount === 0) {
    return null;
  }

  return (
    <div className="mb-5 flex flex-col gap-2">
      {escalatedCount > 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <ShieldAlert
            size={18}
            className="shrink-0 text-red-500"
          />

          <div className="flex-1">
            <span className="text-sm font-semibold text-red-800">
              {escalatedCount} escalated case
              {escalatedCount !== 1 ? "s" : ""}
            </span>

            <span className="text-sm text-red-700">
              {" "}
              require your department's review and intervention.
            </span>
          </div>

          <button
            onClick={onReviewEscalated}
            className="whitespace-nowrap text-sm font-semibold text-red-700 hover:text-red-900"
          >
            Review now →
          </button>
        </div>
      )}

      {breachedCount > 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <AlertTriangle
            size={18}
            className="shrink-0 text-amber-500"
          />

          <div className="flex-1">
            <span className="text-sm font-semibold text-amber-800">
              {breachedCount} case
              {breachedCount !== 1 ? "s" : ""} with SLA breached
            </span>

            <span className="text-sm text-amber-700">
              {" "}
              — 14-day resolution deadline exceeded.
            </span>
          </div>

          <button
            onClick={onViewBreached}
            className="whitespace-nowrap text-sm font-semibold text-amber-700 hover:text-amber-900"
          >
            View all →
          </button>
        </div>
      )}
    </div>
  );
}