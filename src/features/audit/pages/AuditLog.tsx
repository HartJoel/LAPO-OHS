import { useMemo, useState } from "react";
import { Download } from "lucide-react";

import ActionTypeFilter from "../components/ActionTypeFilter";
import AuditLogTable from "../components/AuditLogTable";
import { auditLogs } from "../mock/auditLogs";
import AuditLogFilters from "../components/AuditLogFilters";

const PAGE_SIZE = 5;

function AuditLog() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [caseFilter, setCaseFilter] = useState("");

  const ACTION_TYPES = [
    "all",
    "Case Created",
    "Status Update",
    "Resolution",
    "SLA Breach",
    "Escalation",
    "Assignment",
    "Anonymous",
    "Message",
    "System",
  ];

  // Filter logs
  const filtered = useMemo(() => {
    return auditLogs.filter((log) => {
      const matchesSearch =
        search === "" ||
        log.description.toLowerCase().includes(search.toLowerCase()) ||
        log.performedBy.toLowerCase().includes(search.toLowerCase()) ||
        log.caseId.toLowerCase().includes(search.toLowerCase());

      const matchesCase =
        caseFilter === "" ||
        log.caseId.toLowerCase().includes(caseFilter.toLowerCase());

      const matchesType = typeFilter === "all" || log.action === typeFilter;

      return matchesSearch && matchesCase && matchesType;
    });
  }, [search, caseFilter, typeFilter]);

  // Build filter chips
  const statsByType = useMemo(() => {
    const counts: Record<string, number> = {};

    auditLogs.forEach((log) => {
      counts[log.action] = (counts[log.action] ?? 0) + 1;
    });

    return Object.entries(counts).map(([type, count]) => ({
      type,
      count,
    }));
  }, []);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: 22, fontWeight: 700 }}
          >
            System Audit Log
          </h1>

          <p className="text-gray-500 text-sm">
            Complete chronological record of all system actions ·{" "}
            {auditLogs.length} total entries
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
          <Download size={15} />
          Export Log
        </button>
      </div>

      <ActionTypeFilter
        stats={statsByType}
        selectedType={typeFilter}
        onChange={(type) => {
          setTypeFilter(type);
          setPage(1);
        }}
      />

      <AuditLogFilters
        search={search}
        caseFilter={caseFilter}
        typeFilter={typeFilter}
        actionTypes={ACTION_TYPES}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onCaseFilterChange={(value) => {
          setCaseFilter(value);
          setPage(1);
        }}
        onTypeFilterChange={(value) => {
          setTypeFilter(value);
          setPage(1);
        }}
      />

      <AuditLogTable
        entries={paginated}
        totalEntries={filtered.length}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default AuditLog;
