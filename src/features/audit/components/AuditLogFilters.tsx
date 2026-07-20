import { Search } from "lucide-react";

interface Props {
  search: string;
  caseFilter: string;
  typeFilter: string;
  actionTypes: string[];
  onSearchChange: (value: string) => void;
  onCaseFilterChange: (value: string) => void;
  onTypeFilterChange: (value: string) => void;
}

export default function AuditLogFilters({
  search,
  caseFilter,
  typeFilter,
  actionTypes,
  onSearchChange,
  onCaseFilterChange,
  onTypeFilterChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-5">
      {/* Search */}
      <div className="relative flex-1 min-w-52">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search actions, users, case IDs..."
          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-400"
        />
      </div>

      {/* Case ID */}
      <input
        value={caseFilter}
        onChange={(e) => onCaseFilterChange(e.target.value)}
        placeholder="Filter by Case ID..."
        className="w-44 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-400"
      />

      {/* Action Type */}
      <select
        value={typeFilter}
        onChange={(e) => onTypeFilterChange(e.target.value)}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none"
      >
        {actionTypes.map((type) => (
          <option key={type} value={type}>
            {type === "all" ? "All Action Types" : type}
          </option>
        ))}
      </select>
    </div>
  );
}