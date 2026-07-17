import { useState } from "react";
import CaseFilters from "../../components/table/CaseTableFilters";
import { hrcases } from "../../mockCases";
import type { CaseStatus, CaseType, Severity } from "../../../../types";
import HRCasesTable from "../../components/table/HRCasesTable";
import { useNavigate } from "react-router-dom";

function Cases() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CaseStatus | "All">("All");
  const [typeFilter, setTypeFilter] = useState<CaseType | "All">("All");
  const [severityFilter, setSeverityFilter] = useState<Severity | "All">("All");
  const [sortBy, setSortBy] = useState<"date" | "severity" | "sla">("date");

  const filtered = hrcases.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.branch.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || c.status === statusFilter;

    const matchesType = typeFilter === "All" || c.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1
          className="text-gray-900 mb-1"
          style={{ fontSize: "22px", fontWeight: 700 }}
        >
          Case Management
        </h1>
        <p className="text-gray-500 text-sm">
          {hrcases.length} total cases across all units and branches
        </p>
      </div>

      <CaseFilters
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        severityFilter={severityFilter}
        onSeverityChange={setSeverityFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        resultCount={filtered.length}
      />

      <HRCasesTable
        cases={filtered}
        openCase={(id) => navigate(`/cases/${id}`)}
      />
    </div>
  );
}

export default Cases;
