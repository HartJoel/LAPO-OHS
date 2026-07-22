import { Activity } from "lucide-react";

const LAPO_ORANGE = "#EC8020";

interface UnitChartData {
  name: string;
  total: number;
  open: number;
}

interface Props {
  data: UnitChartData[];
}

export default function CasesByUnitCard({ data }: Props) {
  const maxTotal = Math.max(...data.map((d) => d.total), 1);

  return (
    <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity
          size={15}
          className="text-gray-400"
        />

        <h2 className="font-semibold text-gray-900 text-[14px]">
          Cases by Handling Unit
        </h2>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3"
          >
            <div className="w-24 text-xs text-gray-500 text-right shrink-0 truncate">
              {item.name}
            </div>

            <div className="relative flex-1 h-6">
              <div
                className="absolute inset-y-0 left-0 rounded-sm bg-gray-100"
                style={{
                  width: `${(item.total / maxTotal) * 100}%`,
                }}
              />

              <div
                className="absolute inset-y-0 left-0 rounded-sm"
                style={{
                  width: `${(item.open / maxTotal) * 100}%`,
                  background: LAPO_ORANGE,
                  opacity: 0.85,
                }}
              />
            </div>

            <div className="w-16 text-xs text-gray-500 shrink-0">
              <span className="font-semibold text-gray-700">
                {item.open}
              </span>{" "}
              / {item.total}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="inline-block w-3 h-2 rounded-sm bg-gray-200" />
          Total
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <span
            className="inline-block w-3 h-2 rounded-sm"
            style={{
              background: LAPO_ORANGE,
              opacity: 0.85,
            }}
          />
          Open
        </div>
      </div>
    </div>
  );
}