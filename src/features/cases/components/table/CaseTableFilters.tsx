import { Filter, Search, SlidersHorizontal } from "lucide-react";
import type { CaseStatus, CaseType, Severity } from "../../../../types";

interface CaseFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  statusFilter: CaseStatus | "All";
  onStatusChange: (value: CaseStatus | "All") => void;

  typeFilter: CaseType | "All";
  onTypeChange: (value: CaseType | "All") => void;

  severityFilter: Severity | "All";
  onSeverityChange: (value: Severity | "All") => void;

  sortBy: "date" | "severity" | "sla";
  onSortChange: (value: "date" | "severity" | "sla") => void;

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

const categories: { value: CaseType; label: string }[] = [
  { value: "Safety", label: "Workplace Safety" },
  { value: "health", label: "Health & Ergonomics" },
  { value: "Harassment & Conduct", label: "Harassment & Conduct" },
  { value: "Environmental & Facility", label: "Environmental & Facility" },
  { value: "security", label: "Security & Theft" },
  { value: "legal", label: "Legal & Compliance" },
  { value: "client", label: "Client & Vendor" },
];

const severities: Severity[] = [
  "Critical",
  "High",
  "Medium",
  "Low",
];

export default function CaseFilters({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  typeFilter,
  onTypeChange,
  severityFilter,
  onSeverityChange,
  sortBy,
  onSortChange,
  resultCount,
}: CaseFiltersProps) {
  return (
    <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative min-w-52 flex-1">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by ID, category, branch, reporter…"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-8 pr-3 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <div className="flex items-center text-gray-400">
          <Filter size={14} />
        </div>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusChange(e.target.value as CaseStatus | "All")
          }
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">All Statuses</option>

          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        {/* Category */}
        <select
          value={typeFilter}
          onChange={(e) =>
            onTypeChange(e.target.value as CaseType | "All")
          }
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        {/* Severity */}
        <select
          value={severityFilter}
          onChange={(e) =>
            onSeverityChange(e.target.value as Severity | "All")
          }
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">All Severities</option>

          {severities.map((severity) => (
            <option key={severity} value={severity}>
              {severity}
            </option>
          ))}
        </select>

        {/* Sort */}
        <div className="ml-auto flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-gray-400" />

          <select
            value={sortBy}
            onChange={(e) =>
              onSortChange(
                e.target.value as "date" | "severity" | "sla"
              )
            }
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
          >
            <option value="date">Sort: Latest</option>
            <option value="severity">Sort: Severity</option>
            <option value="sla">Sort: SLA Urgency</option>
          </select>
        </div>
      </div>

      <div className="mt-2 text-xs text-gray-400">
        {resultCount} cases shown
      </div>
    </div>
  );
}