import {
  ChevronLeft,
  ChevronRight,
  ScrollText,
} from "lucide-react";
import type { AuditLog } from "../mock/auditLogs";
import { getActionType } from "../../shared/utils/getActionType";

const LAPO_ORANGE = "#F58220";

interface Props {
  entries: AuditLog[];
  totalEntries: number;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function AuditLogTable({
  entries,
  totalEntries,
  page,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {entries.length} entries
          {entries.length !== totalEntries &&
            ` (filtered from ${totalEntries})`}
        </span>

        <span className="text-xs text-gray-400">
          Page {page} of {Math.max(totalPages, 1)}
        </span>
      </div>

      {/* Empty State */}
      {entries.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <ScrollText size={32} className="mx-auto mb-3 text-gray-300" />

          <h3 className="text-sm font-medium text-gray-700">
            No audit entries found
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Try changing or clearing your filters.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-50">
          {entries.map((entry) => {
            const action = getActionType(entry.action);
            const Icon = action.icon;

            return (
              <div
                key={entry.id}
                className="flex items-start gap-3 px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: action.bg }}
                >
                  <Icon
                    size={14}
                    style={{ color: action.color }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-gray-900">
                        {entry.description}
                      </h4>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-gray-500">
                          👤 {entry.performedBy}
                        </span>

                        <span className="font-mono text-blue-600">
                          {entry.caseId}
                        </span>

                        <span
                          className="px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: action.bg,
                            color: action.color,
                          }}
                        >
                          {entry.action}
                        </span>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="text-right flex-shrink-0 text-xs text-gray-400">
                      <div>
                        {new Date(entry.timestamp).toLocaleDateString(
                          "en-NG",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </div>

                      <div>
                        {new Date(entry.timestamp).toLocaleTimeString(
                          "en-NG",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (p) => (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  className="w-8 h-8 rounded-lg text-xs font-semibold transition-colors"
                  style={
                    page === p
                      ? {
                          backgroundColor: LAPO_ORANGE,
                          color: "white",
                        }
                      : {}
                  }
                >
                  {p}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}