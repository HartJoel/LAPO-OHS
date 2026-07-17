import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Case } from "../../../../shared/types";

interface Props {
  caseData: Case;
}

export default function CaseDetails({ caseData }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="text-sm font-semibold text-gray-900 mb-4">
        Full Case Details
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {caseData.description}
      </p>

      {(caseData.type === "Health & Ergonomics" || caseData.type === "Safety") &&
        caseData.hasInjury && (
          <div className="p-4 bg-red-50 rounded-xl border border-red-100 mb-4">
            <div className="text-sm font-semibold text-red-900 mb-3">
              Injury Details Reported
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500 text-xs">Injury Occurred:</span>

                <div className="font-medium">Yes</div>
              </div>

              {caseData.injuryType && (
                <div>
                  <span className="text-gray-500 text-xs">Injury Type:</span>

                  <div className="font-medium">{caseData.injuryType}</div>
                </div>
              )}

              {caseData.affectedBodyArea && (
                <div>
                  <span className="text-gray-500 text-xs">Affected Area:</span>

                  <div className="font-medium">{caseData.affectedBodyArea}</div>
                </div>
              )}

              {caseData.injuryDate && (
                <div>
                  <span className="text-gray-500 text-xs">Injury Date:</span>

                  <div className="font-medium">
                    {new Date(caseData.injuryDate).toLocaleDateString("en-NG")}
                  </div>
                </div>
              )}

              {caseData.isRecurring !== undefined && (
                <div>
                  <span className="text-gray-500 text-xs">Recurring:</span>

                  <div className="font-medium">
                    {caseData.isRecurring ? "Yes" : "No"}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      {caseData.resolutionNotes && (
        <div className="p-4 bg-green-50 rounded-xl border border-green-100 mb-4">
          <div className="text-sm font-semibold text-green-900 mb-2">
            Resolution Documentation
          </div>

          <p className="text-sm text-green-800 leading-relaxed">
            {caseData.resolutionNotes}
          </p>

          {caseData.pendingAttestation && (
            <div className="mt-3 flex items-center gap-2 text-xs text-amber-700 bg-amber-50 rounded p-2">
              <AlertTriangle size={12} />
              Awaiting reporter attestation before case can be officially
              closed.
            </div>
          )}

          {caseData.resolutionAttestedBy && (
            <div className="mt-3 flex items-center gap-2 text-xs text-green-700 bg-green-100 rounded p-2">
              <CheckCircle2 size={12} />
              Attested by {caseData.resolutionAttestedBy} on{" "}
              {caseData.resolutionAttestedDate
                ? new Date(caseData.resolutionAttestedDate).toLocaleDateString(
                    "en-NG",
                  )
                : "-"}
            </div>
          )}
        </div>
      )}

      {caseData.resolutionDisputed && (
        <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 mb-4">
          <div className="text-sm font-semibold text-orange-800 mb-2">
            ⚠️ Resolution Disputed by Reporter
          </div>

          <p className="text-sm text-orange-700">
            {caseData.resolutionDisputeReason}
          </p>

          <p className="text-xs text-orange-600 mt-2">
            Please re-investigate and address the reporter's concerns before
            submitting a new resolution.
          </p>
        </div>
      )}

      {caseData.escalated && (
        <div className="p-4 bg-red-50 rounded-xl border border-red-200 mb-4">
          <div className="text-sm font-semibold text-red-800 mb-2">
            🚨 Escalation Details
          </div>

          <p className="text-sm text-red-700">{caseData.escalationReason}</p>

          {caseData.escalatedTo && (
            <div className="text-xs text-red-600 mt-1">
              <span className="font-medium">Escalated to:</span>{" "}
              {caseData.escalatedTo}
            </div>
          )}

          {caseData.escalatedDate && (
            <div className="text-xs text-red-500 mt-0.5">
              Date:{" "}
              {new Date(caseData.escalatedDate).toLocaleString("en-NG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          )}
        </div>
      )}

      {caseData.type === "Harassment & Conduct" && (
        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100 text-xs text-purple-800">
          <span className="font-semibold">Confidentiality Notice:</span> This
          harassment/misconduct report is accessible only to designated HR and
          Compliance officers. No notification has been sent to any accused
          party.
        </div>
      )}
    </div>
  );
}
