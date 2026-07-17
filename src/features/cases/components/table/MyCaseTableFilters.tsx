import { Filter, Search } from "lucide-react";
import type { CaseStatus, CaseType } from "../../../../types";

interface TableFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  statusFilter: CaseStatus | "All";
  onStatusChange: (value: CaseStatus | "All") => void;

  typeFilter: CaseType | "All";
  onTypeChange: (value: CaseType | "All") => void;
}

const statuses = [
  "Logged",
  "Under Review",
  "Investigating",
  "Escalated",
  "Resolved",
  "Closed",
];

const categories = [
  { value: "safety", label: "Workplace Safety" },
  { value: "health", label: "Health & Ergonomics" },
  { value: "harassment", label: "Harassment & Conduct" },
  { value: "environmental", label: "Environmental & Facility" },
  { value: "security", label: "Security & Theft" },
  { value: "legal", label: "Legal & Compliance" },
  { value: "client", label: "Client & Vendor" },
];

export default function TableFilters({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  typeFilter,
  onTypeChange,
}: TableFiltersProps) {
  return (
    <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap gap-3">
        <div className="relative min-w-48 flex-1">
          <Search
            size={15}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search cases..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pr-3 pl-8 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <div className="flex items-center text-gray-500">
          <Filter size={14} />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">All Statuses</option>

          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          value={typeFilter}
          onChange={(e) => onTypeChange(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}