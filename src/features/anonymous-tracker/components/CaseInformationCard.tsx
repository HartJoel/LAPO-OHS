import { Building2 } from "lucide-react";
import type { CaseStatus } from "../../../types";

interface RoutingInfo {
  primary: string;
  auxiliary?: string;
}

interface Props {
  incidentDate: string | Date;
  submittedDate: string | Date;
  status: CaseStatus;
  handlerName?: string | null;
  routing: RoutingInfo;
}

const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const StatusBadge = ({ status }: { status?: CaseStatus }) => {
  const classes = (() => {
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
  })();

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${classes}`}
    >
      {status ?? "Unknown"}
    </span>
  );
};

export default function CaseInformationCard({
  incidentDate,
  submittedDate,
  status,
  handlerName,
  routing,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-6">
      <h2 className="text-sm font-semibold text-gray-900 mb-5">
        Case Information
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        {/* Incident Date */}
        <div>
          <p className="text-xs text-gray-400 mb-1">Incident Date</p>
          <p className="text-sm font-medium text-gray-700">
            {formatDate(incidentDate)}
          </p>
        </div>

        {/* Submitted */}
        <div>
          <p className="text-xs text-gray-400 mb-1">Submitted</p>
          <p className="text-sm font-medium text-gray-700">
            {formatDate(submittedDate)}
          </p>
        </div>

        {/* Status */}
        <div>
          <p className="text-xs text-gray-400 mb-2">Current Status</p>
          <StatusBadge status={status} />
        </div>

        {/* Handler */}
        <div>
          <p className="text-xs text-gray-400 mb-1">Assigned Handler</p>
          <p className="text-sm font-medium text-gray-700">
            {handlerName || "Pending assignment"}
          </p>
        </div>
      </div>

      {/* Handling Team */}
      <div className="mt-5 flex flex-wrap items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2.5 text-xs">
        <Building2 size={14} className="text-blue-500 flex-shrink-0" />

        <span className="font-semibold text-blue-800">Handling team:</span>

        <span className="font-bold text-blue-900">{routing.primary}</span>

        {routing.auxiliary && routing.auxiliary !== routing.primary && (
          <span className="text-blue-600">
            • Auxiliary:{" "}
            <span className="font-semibold">{routing.auxiliary}</span>
          </span>
        )}
      </div>
    </div>
  );
}
