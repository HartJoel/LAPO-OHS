import { Download } from "lucide-react";

function AuditLog() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: "22px", fontWeight: 700 }}
          >
            System Audit Log
          </h1>
          <p className="text-gray-500 text-sm">
            Complete chronological record of all system actions ·{" "}
            {/* {allEntries.length} total entries */}
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <Download size={15} />
          Export Log
        </button>
      </div>
    </div>
  );
}

export default AuditLog;
