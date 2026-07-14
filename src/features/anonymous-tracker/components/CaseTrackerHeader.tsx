import { AlertCircle, CheckCircle, Clock } from "lucide-react";


import type { Case } from "../../dashboard/employee/pages/EmployeeDashboard";

const LAPO_GREEN = "#22C55E";

interface Props {
  searched: boolean;
  loading: boolean;
  token: string;
  result?: Case;
  sla?: {
    label: string;
    color: "red" | "amber" | "green" | "gray";
  };
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Open":
      return "bg-blue-50 text-blue-700";

    case "Investigating":
    case "In Progress":
      return "bg-orange-50 text-orange-700";

    case "Resolved":
      return "bg-green-50 text-green-700";

    case "Closed":
      return "bg-gray-100 text-gray-700";

    default:
      return "bg-gray-50 text-gray-600";
  }
};

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "Low":
      return "bg-green-50 text-green-700 border-green-200";

    case "Medium":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";

    case "High":
      return "bg-orange-50 text-orange-700 border-orange-200";

    case "Critical":
      return "bg-red-50 text-red-700 border-red-200";

    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case "Health & Ergonomics":
      return "bg-emerald-50 text-emerald-700";

    case "Safety":
      return "bg-blue-50 text-blue-700";

    case "Harassment & Conduct":
      return "bg-purple-50 text-purple-700";

    case "Environmental":
      return "bg-teal-50 text-teal-700";

    default:
      return "bg-gray-50 text-gray-600";
  }
};

export default function CaseTrackerHeader({
  searched,
  loading,
  token,
  result,
  sla,
}: Props) {
  if (!searched || loading) return null;

  if (result === undefined) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
        <AlertCircle size={40} className="mx-auto mb-3 text-red-400" />

        <div className="text-gray-900 font-semibold mb-1">Token Not Found</div>

        <div className="text-gray-500 text-sm">
          We couldn't find a case matching "{token}". Please double-check your
          token and try again. Tokens are case-sensitive and must include the
          dashes.
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle size={18} style={{ color: LAPO_GREEN }} />

              <span className="font-mono text-gray-500 text-sm">
                {result.id}
              </span>
            </div>

            <div className="text-gray-900 font-bold text-lg">
              {result.category}
            </div>

            <div className="text-gray-500 text-sm mt-1">
              {result.branch} · {result.location}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
      result.status
    )}`}
  >
    <span
      className={`w-1.5 h-1.5 rounded-full ${
        result.status === "Resolved"
          ? "bg-green-500"
          : result.status === "Investigating" ||
              result.status === "in-progress"
            ? "bg-orange-500"
            : result.status === "Logged"
              ? "bg-blue-500"
              : "bg-gray-500"
      }`}
    />
    {result.status}
  </span>

  <span
    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getSeverityBadge(
      result.severity
    )}`}
  >
    {result.severity}
  </span>

  <span
    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeBadge(
      result.type
    )}`}
  >
    {result.type}
  </span>
</div>
        </div>

        {sla && (
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
              sla.color === "red"
                ? "bg-red-50 text-red-700"
                : sla.color === "amber"
                  ? "bg-amber-50 text-amber-700"
                  : sla.color === "green"
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50 text-gray-600"
            }`}
          >
            <Clock size={14} />
            <span>SLA: {sla.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
