interface SLAItem {
  name: string;
  compliance: number;
}

interface Props {
  title?: string;
  data: SLAItem[];
  target?: number;
  successColor?: string;
}

export default function SLAComplianceCard({
  title = "SLA Compliance by Type",
  data,
  target = 85,
  successColor = "#22C55E",
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-semibold text-gray-900 text-sm mb-4">
        {title}
      </h2>

      <div className="space-y-4">
        {data.map((item) => {
          const passed = item.compliance >= target;

          return (
            <div key={item.name}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-medium text-gray-700">
                  {item.name}
                </span>

                <span
                  className="font-bold"
                  style={{
                    color: passed ? successColor : "#DC2626",
                  }}
                >
                  {item.compliance}%
                </span>
              </div>

              <div className="h-2 rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${item.compliance}%`,
                    backgroundColor: passed
                      ? successColor
                      : "#DC2626",
                  }}
                />
              </div>
            </div>
          );
        })}

        <div className="border-t border-gray-100 pt-2">
          <p className="text-xs text-gray-400">
            Target: ≥ {target}% SLA compliance across all categories
          </p>
        </div>
      </div>
    </div>
  );
}