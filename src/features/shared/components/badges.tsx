import type { CaseStatus, CaseType, Severity, SLAStatus } from "../../../types";

export const getStatusBadge = (status?: CaseStatus) => {
  switch (status) {
    case "Logged":
      return "bg-blue-50 text-blue-700";

    case "Under Review":
      return "bg-amber-50 text-amber-700";

    case "Investigating":
      return "bg-purple-50 text-purple-700";

    case "Resolved":
      return "bg-green-50 text-green-700";

    case "Closed":
      return "bg-gray-100 text-gray-700";

    default:
      return "bg-gray-50 text-gray-600";
  }
};
export const getSeverityBadge = (severity?: Severity) => {
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

export const getTypeBadge = (type?: CaseType) => {
  switch (type) {
    case "Health & Ergonomics":
      return "bg-emerald-50 text-emerald-700";

    case "Environmental & Facility":
      return "bg-teal-50 text-teal-700";

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

export  const slaColors: Record<SLAStatus, "red" | "amber" | "green" | "gray"> = {
  "SLA Breached": "red",
  "Within SLA": "green",
};
