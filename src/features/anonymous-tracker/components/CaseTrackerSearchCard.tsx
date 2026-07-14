import { Info, Search } from "lucide-react";

// ── Design tokens ──────────────────────────────────────────────────────────────
const LAPO_ORANGE = "#F97316";

interface CaseTrackerSearchCardProps {
  token: string;
  loading: boolean;
  sampleTokens: string[];
  onTokenChange: (value: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CaseTrackerSearchCard({
  token,
  loading,
  sampleTokens,
  onTokenChange,
  onSearch,
}: CaseTrackerSearchCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6">
      <div className="text-center mb-8">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: `${LAPO_ORANGE}15` }}
        >
          <Search size={24} style={{ color: LAPO_ORANGE }} />
        </div>

        <h1
          className="text-gray-900 mb-2"
          style={{ fontSize: "22px", fontWeight: 700 }}
        >
          Track Your Anonymous Report
        </h1>

        <p className="text-gray-500 text-sm">
          Enter the reference token you received when you submitted your
          anonymous report.
        </p>
      </div>

      <form onSubmit={onSearch} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reference Token
          </label>

          <input
            type="text"
            value={token}
            onChange={(e) => onTokenChange(e.target.value)}
            placeholder="e.g. AX7K-2P9Q-R3ST"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none font-mono tracking-wider bg-gray-50 focus:border-orange-500"
          />
        </div>

        <button
          type="submit"
          disabled={!token.trim() || loading}
          className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          style={{ backgroundColor: LAPO_ORANGE }}
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search size={16} />
              Look Up Case
            </>
          )}
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-400 mb-2 flex items-center gap-1">
          <Info size={12} />
          Sample tokens for prototype demo:
        </div>

        <div className="flex flex-wrap gap-2">
          {sampleTokens.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onTokenChange(t)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono text-gray-600 hover:border-orange-300 hover:text-orange-700 transition-colors"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
