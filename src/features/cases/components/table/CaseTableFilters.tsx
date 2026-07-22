import { Filter, Search, SlidersHorizontal } from "lucide-react";

import type {
  CaseStatus,
  CaseType,
  Severity,
} from "../../../../types";

type UserRole =
  | "hr"
  | "unit_head"
  | "sustainability";

interface CaseFiltersProps {
  role: UserRole;

  search: string;
  onSearchChange: (value: string) => void;

  statusFilter: CaseStatus | "All";
  onStatusChange: (value: CaseStatus | "All") => void;

  typeFilter: CaseType | "All";
  onTypeChange: (value: CaseType | "All") => void;

  severityFilter: Severity | "All";
  onSeverityChange: (value: Severity | "All") => void;

  unitFilter?: string;
  onUnitChange?: (value: string) => void;
  units?: string[];

  sortBy?: "date" | "severity" | "sla";
  onSortChange?: (value: "date" | "severity" | "sla") => void;

  resultCount: number;
}

const statuses: CaseStatus[] = [
  "Logged",
  "Under Review",
  "Investigating",
  "Escalated",
  "Resolved",
  "Closed",
];

const types: { value: CaseType; label: string }[] = [
  {
    value: "Safety",
    label: "Workplace Safety",
  },
  {
    value: "Health & Ergonomics",
    label: "Health & Ergonomics",
  },
  {
    value: "Harassment & Conduct",
    label: "Harassment & Conduct",
  },
  {
    value: "Environmental & Facility",
    label: "Environmental & Facility",
  },
  {
    value: "Security & Theft",
    label: "Security & Theft",
  },
  {
    value: "Legal & Compliance",
    label: "Legal & Compliance",
  },
  {
    value: "Client & Vendor",
    label: "Client & Vendor",
  },
];

const severities: Severity[] = [
  "Critical",
  "High",
  "Medium",
  "Low",
];

export default function CaseFilters({
  role,

  search,
  onSearchChange,

  statusFilter,
  onStatusChange,

  typeFilter,
  onTypeChange,

  severityFilter,
  onSeverityChange,

  unitFilter,
  onUnitChange,
  units = [],

  sortBy,
  onSortChange,

  resultCount,
}: CaseFiltersProps) {
  return (
    <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}

        <div className="relative flex-1 min-w-56">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search cases..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-8 pr-3 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <Filter size={14} className="text-gray-400" />

        {/* Status */}

        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusChange(
              e.target.value as CaseStatus | "All"
            )
          }
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">All Statuses</option>

          {role === "sustainability" && (
            <option value="Escalated">
              🚨 Escalated
            </option>
          )}

          {statuses
            .filter((status) =>
              role === "sustainability"
                ? status !== "Escalated"
                : true
            )
            .map((status) => (
              <option
                key={status}
                value={status}
              >
                {status}
              </option>
            ))}
        </select>

        {/* Type */}

        <select
          value={typeFilter}
          onChange={(e) =>
            onTypeChange(
              e.target.value as CaseType | "All"
            )
          }
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">
            {role === "incident_manager"
              ? "All Categories"
              : "All Types"}
          </option>

          {types.map((type) => (
            <option
              key={type.value}
              value={type.value}
            >
              {type.label}
            </option>
          ))}
        </select>

        {/* Sustainability only */}

        {role === "sustainability" &&
          units.length > 0 && (
            <select
              value={unitFilter}
              onChange={(e) =>
                onUnitChange?.(e.target.value)
              }
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
            >
              {units.map((unit) => (
                <option
                  key={unit}
                  value={unit}
                >
                  {unit === "All"
                    ? "All Units"
                    : unit}
                </option>
              ))}
            </select>
          )}

        {/* Incident Manager only */}

        {role === "incident_manager" && (
          <>
            <select
              value={severityFilter}
              onChange={(e) =>
                onSeverityChange(
                  e.target.value as
                    | Severity
                    | "All"
                )
              }
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
            >
              <option value="All">
                All Severities
              </option>

              {severities.map((severity) => (
                <option
                  key={severity}
                  value={severity}
                >
                  {severity}
                </option>
              ))}
            </select>

            <div className="ml-auto flex items-center gap-2">
              <SlidersHorizontal
                size={14}
                className="text-gray-400"
              />

              <select
                value={sortBy}
                onChange={(e) =>
                  onSortChange?.(
                    e.target.value as
                      | "date"
                      | "severity"
                      | "sla"
                  )
                }
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
              >
                <option value="date">
                  Sort: Latest
                </option>

                <option value="severity">
                  Sort: Severity
                </option>

                <option value="sla">
                  Sort: SLA Urgency
                </option>
              </select>
            </div>
          </>
        )}
      </div>

      <div className="mt-2 text-xs text-gray-400">
        {resultCount} cases shown
      </div>
    </div>
  );
}