import { useState } from "react";
import CaseFilters from "../../components/table/CaseTableFilters";
import { hrcases } from "../../mockCases";
import type { CaseStatus, CaseType, Severity } from "../../../../types";
import HRCasesTable from "../../components/table/HRCasesTable";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../store/authStore";
import CaseManagementHeader from "../../components/CaseManagementHeader";

function Cases() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CaseStatus | "All">("All");
  const [typeFilter, setTypeFilter] = useState<CaseType | "All">("All");
  const [severityFilter, setSeverityFilter] = useState<Severity | "All">("All");
  const [sortBy, setSortBy] = useState<"date" | "severity" | "sla">("date");
  const [unitFilter, setUnitFilter] = useState("All");

  const units = [
    "All",
    "Safety",
    "Health & Ergonomics",
    "Harassment & Conduct",
    "Environmental & Facility",
    "Security & Theft",
    "Legal & Compliance",
    "Client & Vendor",
  ];

  const { user } = useAuthStore();

  const filtered = hrcases.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.branch.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || c.status === statusFilter;

    const matchesType = typeFilter === "All" || c.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const role = user?.role;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <CaseManagementHeader
        totalCases={hrcases.length}
        assignedCases={hrcases.length}
        unit={user?.department}
        branch={user?.branch}
        unassignedCount={
          hrcases.filter(
            (c) => !c.handlerName && !["Resolved", "Closed"].includes(c.status),
          ).length
        }
        escalatedCount={4}
      />
      {role === "hr" && (
        <CaseFilters
          role="incident_manager"
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
      )}

      {role === "unit_head" && (
        <CaseFilters
          role="unit_head"
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          severityFilter={severityFilter}
          onSeverityChange={setSeverityFilter}
          resultCount={filtered.length}
        />
      )}

      {role === "sustainability" && (
        <CaseFilters
          role="sustainability"
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          severityFilter={severityFilter}
          onSeverityChange={setSeverityFilter}
          unitFilter={unitFilter}
          onUnitChange={setUnitFilter}
          units={units}
          resultCount={filtered.length}
        />
      )}

      <HRCasesTable
        cases={filtered}
        openCase={(id) => navigate(`/cases/${id}`)}
      />
    </div>
  );
}

export default Cases;
