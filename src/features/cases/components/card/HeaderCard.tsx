import { Calendar, Clock, MapPin, Building2, Shield } from "lucide-react";
import {
  getSeverityBadge,
  getStatusBadge,
  getTypeBadge,
  slaColors,
} from "../../../shared/components/badges";
import { getRoutingLabel } from "../../../shared/utils/routing";
import type { Case } from "../../../shared/types";

const LAPO_GREEN = "#009D4C";
const LAPO_ORANGE = "#EC8020";

const STATUS_STEPS = ["Logged", "Under Review", "Investigating", "Resolved", "Closed"];

interface Props {
  caseData: Case;
  showProgress?: boolean; // default true, set false for compact/list contexts
}

export default function HeaderCard({ caseData: c, showProgress = true }: Props) {
  const slaColor = c.sla ? slaColors[c.sla] : "gray";
  const currentStepIndex = STATUS_STEPS.indexOf(c.status);
  const isEscalated = Boolean(c.escalated);
  const routing = getRoutingLabel(c.category);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-mono text-gray-400 text-sm mb-1">{c.id}</div>
          <h1 className="text-gray-900 text-[20px] font-bold mb-2">{c.category}</h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeBadge(c.type)}`}>
              {c.type}
            </span>

            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(c.status)}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
              {c.status}
            </span>

            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getSeverityBadge(c.severity)}`}>
              {c.severity}
            </span>

            {c.isAnonymous && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium">
                <Shield size={10} /> Anonymous
              </span>
            )}

            {c.pendingAttestation && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-medium">
                ⏳ Pending Attestation
              </span>
            )}

            {isEscalated && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-medium">
                🚨 Escalated
              </span>
            )}
          </div>
        </div>

        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
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
          <span>SLA: {c.sla}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-gray-400 text-xs mb-1 flex items-center gap-1">
            <MapPin size={11} /> Branch
          </div>
          <div className="text-gray-700 font-medium">{c.branch}</div>
        </div>

        <div>
          <div className="text-gray-400 text-xs mb-1">Location</div>
          <div className="text-gray-700">{c.location}</div>
        </div>

        <div>
          <div className="text-gray-400 text-xs mb-1 flex items-center gap-1">
            <Calendar size={11} /> Incident Date
          </div>
          <div className="text-gray-700">
            {c.incidentDate
              ? new Date(c.incidentDate).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Not available"}
          </div>
        </div>

        <div>
          <div className="text-gray-400 text-xs mb-1">
            {c.isAnonymous ? "Reporter" : c.handlerName !== undefined ? "Handler" : "Reporter"}
          </div>
          <div className="text-gray-700">
            {c.isAnonymous
              ? "🔒 Anonymous"
              : c.handlerName ?? c.reporterName ?? "Awaiting assignment"}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-100 text-xs text-blue-800">
        <Building2 size={13} className="text-blue-500 flex-shrink-0" />
        <span className="font-semibold">Routing:</span>
        <span className="font-bold text-blue-900">{routing.primary}</span>
        {routing.auxiliary && routing.auxiliary !== routing.primary && (
          <span className="text-blue-600">
            · Auxiliary: <span className="font-semibold">{routing.auxiliary}</span>
          </span>
        )}
      </div>

      {showProgress && (
        <div className="mt-5 pt-5 border-t border-gray-100">
          <div className="flex items-center">
            {STATUS_STEPS.map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor:
                        i < currentStepIndex
                          ? LAPO_GREEN
                          : i === currentStepIndex
                            ? isEscalated
                              ? "#DC2626"
                              : LAPO_ORANGE
                            : "#E5E7EB",
                      color: i <= currentStepIndex ? "white" : "#9CA3AF",
                    }}
                  >
                    {i < currentStepIndex ? "✓" : i + 1}
                  </div>
                  <div
                    className={`text-[9px] mt-1 text-center font-medium max-w-14 ${
                      i === currentStepIndex
                        ? isEscalated
                          ? "text-red-600"
                          : "text-orange-600"
                        : i < currentStepIndex
                          ? "text-green-700"
                          : "text-gray-400"
                    }`}
                  >
                    {s}
                  </div>
                </div>
                {i < STATUS_STEPS.length - 1 && (
                  <div
                    className="flex-1 h-0.5 mx-1 mb-4"
                    style={{ backgroundColor: i < currentStepIndex ? LAPO_GREEN : "#E5E7EB" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}