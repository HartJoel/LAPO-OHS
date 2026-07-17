import {
  Building2,
  Calendar,
  Clock,
  MapPin,
  Shield,
} from "lucide-react";

import {
  getSeverityBadge,
  getStatusBadge,
  getTypeBadge,
  slaColors,
} from "../../../shared/components/badges";

import type { Case } from "../../../shared/types";

interface Props {
  caseData: Case;
  routing?: {
    primary: string;
    auxiliary?: string;
  };
}

export default function HRCaseHeaderCard({
  caseData,
  routing,
}: Props) {
  const slaColor = caseData.sla
    ? slaColors[caseData.sla]
    : "gray";

  return (
    <div className="mb-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="mb-1 font-mono text-sm text-gray-400">
            {caseData.id}
          </div>

          <h1 className="mb-2 text-[20px] font-bold text-gray-900">
            {caseData.category}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${getTypeBadge(
                caseData.type
              )}`}
            >
              {caseData.type}
            </span>

            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getStatusBadge(
                caseData.status
              )}`}
            >
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
              {caseData.status}
            </span>

            <span
              className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-semibold ${getSeverityBadge(
                caseData.severity
              )}`}
            >
              {caseData.severity}
            </span>

            {caseData.isAnonymous && (
              <span className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                <Shield size={10} />
                Anonymous
              </span>
            )}

            {caseData.pendingAttestation && (
              <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                ⏳ Pending Attestation
              </span>
            )}

            {caseData.escalated && (
              <span className="inline-flex items-center gap-1 rounded bg-red-100 px-2 py-0.5 text-xs text-red-700">
                🚨 Escalated
              </span>
            )}
          </div>
        </div>

        <div
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
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

      <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
        <div>
          <div className="mb-1 flex items-center gap-1 text-xs text-gray-400">
            <MapPin size={11} />
            Branch
          </div>

          <div className="font-medium text-gray-700">
            {caseData.branch}
          </div>
        </div>

        <div>
          <div className="mb-1 text-xs text-gray-400">
            Location
          </div>

          <div className="text-gray-700">
            {caseData.location}
          </div>
        </div>

        <div>
          <div className="mb-1 flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={11} />
            Incident Date
          </div>

          <div className="text-gray-700">
            {caseData.incidentDate
              ? new Date(
                  caseData.incidentDate
                ).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Not available"}
          </div>
        </div>

        <div>
          <div className="mb-1 text-xs text-gray-400">
            Reporter
          </div>

          <div className="text-gray-700">
            {caseData.isAnonymous
              ? "🔒 Anonymous"
              : caseData.reporterName}
          </div>
        </div>
      </div>

      {routing && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs text-blue-800">
          <Building2
            size={13}
            className="flex-shrink-0 text-blue-500"
          />

          <span className="font-semibold">
            Routing:
          </span>

          <span className="font-bold text-blue-900">
            {routing.primary}
          </span>

          {routing.auxiliary &&
            routing.primary !== routing.auxiliary && (
              <span className="text-blue-600">
                · Auxiliary:
                <span className="ml-1 font-semibold">
                  {routing.auxiliary}
                </span>
              </span>
            )}
        </div>
      )}
    </div>
  );
}