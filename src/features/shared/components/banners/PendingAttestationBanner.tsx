import { AlertTriangle } from "lucide-react";

import type { Case } from "../../../../shared/types";

interface PendingAttestationBannerProps {
  cases: Case[];
}

export default function PendingAttestationBanner({
  cases,
}: PendingAttestationBannerProps) {
  if (cases.length === 0) return null;

  const count = cases.length;

  return (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
      <AlertTriangle
        size={18}
        className="shrink-0 text-amber-500"
      />

      <div className="flex-1">
        <span className="text-sm font-semibold text-amber-800">
          {count} case{count !== 1 ? "s" : ""} awaiting reporter
          attestation
        </span>

        <span className="text-sm text-amber-700">
          {" "}
          — reporter must confirm resolution before cases can be
          closed.
        </span>
      </div>
    </div>
  );
}