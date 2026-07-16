import { CheckCircle2 } from "lucide-react";

interface Props {
  caseData: CaseDescription;
}

const LAPO_ORANGE = "#F97316";

export default function CaseDescriptionCard({ caseData }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 ">
      <h2 className="text-sm font-semibold text-gray-900 mb-3">
        Report Description
      </h2>

      <p className="text-sm text-gray-700 leading-relaxed">
        {caseData.description}
      </p>

      {caseData.hasInjury && (
        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100">
          <h3 className="text-xs font-semibold text-red-800 mb-2">
            Injury Reported
          </h3>

          <div className="text-xs text-red-700 space-y-1">
            {caseData.injuryType && <div>Type: {caseData.injuryType}</div>}

            {caseData.affectedBodyArea && (
              <div>Area: {caseData.affectedBodyArea}</div>
            )}

            {caseData.injuryDate && (
              <div>
                Date:{" "}
                {new Date(caseData.injuryDate).toLocaleDateString("en-NG")}
              </div>
            )}

            {caseData.isRecurring !== undefined && (
              <div>Recurring: {caseData.isRecurring ? "Yes" : "No"}</div>
            )}
          </div>
        </div>
      )}

      {caseData.resolutionNotes && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-xs font-semibold text-green-800 mb-2">
            Resolution Summary
          </h3>

          <p className="text-xs text-green-700 leading-relaxed">
            {caseData.resolutionNotes}
          </p>

          {caseData.pendingAttestation && (
            <div
              className="mt-2 text-xs font-medium"
              style={{ color: LAPO_ORANGE }}
            >
              ⚠️ Please confirm this resolution using the button above.
            </div>
          )}
        </div>
      )}

      {caseData.resolutionDisputed && (
        <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
          <h3 className="text-xs font-semibold text-orange-800 mb-1">
            Resolution Disputed
          </h3>

          <p className="text-xs text-orange-700">
            {caseData.resolutionDisputeReason}
          </p>
        </div>
      )}

      {caseData.resolutionAttestedBy && !caseData.pendingAttestation && (
        <div className="mt-4 p-3 rounded-lg border bg-green-50 border-green-200">
          <div className="text-xs font-semibold text-green-800 mb-1 flex items-center gap-1">
            <CheckCircle2 size={12} />
            Resolution Confirmed
          </div>

          <p className="text-xs text-green-700">
            Attested by {caseData.resolutionAttestedBy} on{" "}
            {caseData.resolutionAttestedDate
              ? new Date(caseData.resolutionAttestedDate).toLocaleDateString(
                  "en-NG",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )
              : "-"}
          </p>
        </div>
      )}
    </div>
  );
}
