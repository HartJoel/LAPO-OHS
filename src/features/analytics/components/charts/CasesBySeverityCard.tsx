import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

interface SeverityData {
  name: string;
  value: number;
  fill: string;
}

interface Props {
  title?: string;
  data: SeverityData[];
}

export default function CasesBySeverityCard({
  title = "Cases by Severity",
  data,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-semibold text-gray-900 text-sm mb-4">
        {title}
      </h2>

      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={data}
          layout="vertical"
          barSize={32}
          margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
        >
          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fontSize: 10 }}
          />

          <YAxis
            type="category"
            dataKey="name"
            width={60}
            tick={{ fontSize: 11 }}
          />

          <Tooltip />

          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((item) => (
              <Cell key={item.name} fill={item.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}