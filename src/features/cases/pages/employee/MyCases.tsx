import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TableFilters from "../../components/table/MyCaseTableFilters";
import { useState } from "react";
import type {
  CaseStatus,
  CaseType,
  
} from "../../../../types";

import EmployeeCasesTable from "../../components/table/EmployeeCasesTable";
import { cases } from "../../mockCases";

function MyCases() {


  
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<CaseStatus | "All">("All");

  const [typeFilter, setTypeFilter] = useState<CaseType | "All">("All");

  const LAPO_ORANGE = "#F97316";

  const navigate = useNavigate();

  const filtered = cases.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.branch.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || c.status === statusFilter;

    const matchesType = typeFilter === "All" || c.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: "22px", fontWeight: 700 }}
          >
            My Cases
          </h1>
          <p className="text-gray-500 text-sm">
            {cases.length} total reports submitted
          </p>
        </div>
        <button
          onClick={() => navigate("/report")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold"
          style={{ backgroundColor: LAPO_ORANGE }}
        >
          <Plus size={16} />
          New Report
        </button>
      </div>

      <TableFilters
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
      />

      <EmployeeCasesTable
        cases={filtered}
        openCase={(id) => navigate(`/my-case/${id}`)}
      />
    </div>
  );
}

export default MyCases;
