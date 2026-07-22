import { TrendingUp } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface IncidentTypeData {
  name: string;
  value: number;
  color: string;
}

interface Props {
  data: IncidentTypeData[];
}

export default function IncidentTypeDistributionCard({
  data,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp
          size={15}
          className="text-gray-400"
        />

        <h2 className="font-semibold text-gray-900 text-[14px]">
          By Incident Type
        </h2>
      </div>

      <div className="flex justify-center mb-3">
        <PieChart
          width={120}
          height={120}
        >
          <Pie
            data={data}
            cx={60}
            cy={60}
            innerRadius={32}
            outerRadius={54}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="space-y-1.5">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: item.color,
                }}
              />

              <span className="text-gray-600">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-gray-700">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}