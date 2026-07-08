import { CheckCircle } from "lucide-react";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

interface AgingCase {
  id: string;
  days: number;
}

interface CaseAgingCardProps {
  title: string;
  data: AgingCase[];
}

const CaseAgingCard = ({ title, data }: CaseAgingCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="text-sm font-semibold text-gray-900 mb-4">{title}</div>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-28 text-gray-400">
          <CheckCircle
            size={24}
            style={{ color: LAPO_GREEN }}
            className="mb-2"
          />
          <div className="text-sm">All cases resolved!</div>
        </div>
      ) : (
        <div className="space-y-2">
          {data.map((item) => {
            const progress = Math.min(100, (item.days / 14) * 100);

            const color =
              item.days > 7
                ? "#DC2626"
                : item.days > 3
                  ? LAPO_ORANGE
                  : LAPO_GREEN;

            return (
              <div key={item.id} className="flex items-center gap-2">
                <div className="font-mono text-[10px] text-gray-500 w-24 flex-shrink-0">
                  {item.id}
                </div>

                <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>

                <div className="text-xs text-gray-500 w-12 text-right flex-shrink-0">
                  {item.days}d
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CaseAgingCard;
