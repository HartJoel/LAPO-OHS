import { ShieldAlert } from "lucide-react";
import { useAuthStore } from "../../../store/authStore";

interface Props {
  totalCases: number;

  // Incident Manager
  assignedCases?: number;

  // Unit Head
  unit?: string;
  branch?: string;
  unassignedCount?: number;

  // Sustainability
  escalatedCount?: number;
}

export default function CaseManagementHeader({
  totalCases,
  assignedCases = 0,
  unit,
  branch,
  unassignedCount = 0,
  escalatedCount = 0,
}: Props) {
  const { user } = useAuthStore();

  switch (user?.role) {
    case "hr":
      return (
        <div className="mb-6">
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: 22, fontWeight: 700 }}
          >
            My Cases
          </h1>

          <p className="text-sm text-gray-500">
            {assignedCases} cases assigned to {user.name}
          </p>
        </div>
      );

    case "unit_head":
      return (
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1
                className="text-gray-900 mb-1"
                style={{ fontSize: 22, fontWeight: 700 }}
              >
                Team Cases
              </h1>

              <p className="text-sm text-gray-500">
                {unit} · {branch} · {totalCases} total cases
              </p>
            </div>

            {unassignedCount > 0 && (
              <div className="flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-orange-800">
                <span className="font-bold text-orange-600">
                  {unassignedCount}
                </span>
                case{unassignedCount !== 1 ? "s" : ""} unassigned — action
                required
              </div>
            )}
          </div>
        </div>
      );

    case "sustainability":
      return (
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1
                className="text-gray-900 mb-1"
                style={{ fontSize: 22, fontWeight: 700 }}
              >
                All Cases — System Oversight
              </h1>

              <p className="text-sm text-gray-500">
                {totalCases} total cases across all departments and branches
              </p>
            </div>

            {escalatedCount > 0 && (
              <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                <ShieldAlert size={14} className="text-red-500" />
                <span className="font-bold text-red-600">{escalatedCount}</span>
                escalated case
                {escalatedCount !== 1 ? "s" : ""} requiring action
              </div>
            )}
          </div>
        </div>
      );

    default:
      return (
        <div className="mb-6">
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: 22, fontWeight: 700 }}
          >
            Case Management
          </h1>

          <p className="text-sm text-gray-500">
            {totalCases} total cases across all units and branches
          </p>
        </div>
      );
  }
}
