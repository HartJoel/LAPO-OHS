// components/CaseHeaderCard.tsx

import { Calendar, Clock, MapPin, Building2 } from "lucide-react";
import { getSeverityBadge, getStatusBadge, getTypeBadge, slaColors } from "../../../shared/components/badges";
import type { Case } from "../../../shared/types";


interface Props {
  caseData: Case;
}

export default function CaseHeaderCard({ caseData }: Props) {
 

const slaColor = caseData.sla ? slaColors[caseData.sla] : "gray";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-mono text-gray-400 text-sm mb-1">
            {caseData.id}
          </div>

          <h1 className="text-gray-900 text-[20px] font-bold mb-2">
            {caseData.category}
          </h1>

          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeBadge(
                caseData.type,
              )}`}
            >
              {caseData.type}
            </span>

            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                caseData.status,
              )}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
              {caseData.status}
            </span>

            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getSeverityBadge(
                caseData.severity,
              )}`}
            >
              {caseData.severity}
            </span>

            {caseData.isAnonymous && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs">
                Anonymous
              </span>
            )}

            {caseData.pendingAttestation && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs">
                ⏳ Awaiting Your Confirmation
              </span>
            )}
          </div>
        </div>

        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm
          ${
            slaColor === "red"
              ? "bg-red-50 text-red-700"
              : slaColor === "amber"
                ? "bg-amber-50 text-amber-700"
                : slaColor === "green"
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-50 text-gray-500"
          }`}
        >
          <Clock size={14} />
          <span>SLA: {caseData.sla}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-gray-400 text-xs mb-1 flex items-center gap-1">
            <MapPin size={11} />
            Branch
          </div>

          <div className="font-medium">{caseData.branch}</div>
        </div>

        <div>
          <div className="text-gray-400 text-xs mb-1">Location</div>

          <div>{caseData.location}</div>
        </div>

        <div>
          <div className="text-gray-400 text-xs mb-1 flex items-center gap-1">
            <Calendar size={11} />
            Incident Date
          </div>

          <div>
            {caseData.incidentDate ? (
              new Date(caseData.incidentDate).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            ) : (
              "Not available"
            )}
          </div>
        </div>

        <div>
          <div className="text-gray-400 text-xs mb-1">Handler</div>

          <div>{caseData.handlerName ?? "Awaiting assignment"}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-100 text-xs text-blue-800">
        <Building2 size={13} />
        <span className="font-semibold">Handled by:</span>

        <span className="font-bold text-blue-900">General Services</span>
      </div>
    </div>
  );
}
