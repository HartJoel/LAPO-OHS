interface KPIItem {
  label: string;
  value: string;
  target: string;
  ok: boolean;
}

interface KpiSummaryProps {
  title: string;
  data: KPIItem[];
}

const KpiSummary = ({ title, data }: KpiSummaryProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="text-sm font-semibold text-gray-900 mb-4">
        {title}
      </div>

      <div className="space-y-3">
        {data.map((kpi) => (
          <div
            key={kpi.label}
            className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
          >
            <div>
              <div className="text-sm text-gray-700">
                {kpi.label}
              </div>

              <div className="text-xs text-gray-400">
                Target: {kpi.target}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-gray-900">
                {kpi.value}
              </span>

              <div
                className={`w-2 h-2 rounded-full ${
                  kpi.ok
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KpiSummary;