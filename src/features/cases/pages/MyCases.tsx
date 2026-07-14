import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TableFilters from "../components/MyCaseTableFilters";
import { useState } from "react";
import type { CaseStatus, CaseType, Severity, SLAStatus } from "../../../types";

import EmployeeCasesTable from "../components/table/EmployeeCasesTable";

function MyCases() {
  interface Case {
    id: string;
    type: CaseType;
    category: string;
    branch: string;
    status: CaseStatus;
    severity: Severity;
    sla: SLAStatus;
    submittedDate: string;
  }

  const cases: Case[] = [
    {
      id: "OHS-2026-001",
      type: "Health & Ergonomics",
      category: "Poor office ventilation",
      branch: "Lagos Island Branch",
      status: "Under Review",
      severity: "High",
      sla: "SLA Breached",
      submittedDate: "8 Apr 2026",
    },
    {
      id: "OHS-2026-003",
      type: "Health & Ergonomics",
      category: "Chair-related body pain",
      branch: "Lagos Island Branch",
      status: "Logged",
      severity: "Medium",
      sla: "SLA Breached",
      submittedDate: "10 Apr 2026",
    },
    {
      id: "OHS-2026-006",
      type: "Health & Ergonomics",
      category: "Computer-related strain",
      branch: "Lagos Island Branch",
      status: "Investigating",
      severity: "Medium",
      sla: "SLA Breached",
      submittedDate: "9 Apr 2026",
    },
    {
      id: "OHS-2026-012",
      type: "Environmental & Facility",
      category: "Faulty facility equipment",
      branch: "Lagos Island Branch",
      status: "Logged",
      severity: "Medium",
      sla: "SLA Breached",
      submittedDate: "11 Apr 2026",
    },
  ];

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
        openCase={(id) => navigate(`/cases/${id}`)}
        
      />
    </div>
  );
}

export default MyCases;
