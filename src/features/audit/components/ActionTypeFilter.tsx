import { getActionType } from "../../shared/utils/getActionType";

export interface ActionTypeStat {
  type: string;
  count: number;
}

interface Props {
  stats: ActionTypeStat[];
  selectedType: string;
  onChange: (type: string) => void;
}

export default function ActionTypeFilter({
  stats,
  selectedType,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {stats.slice(0, 6).map((item) => {
        const { color, bg } = getActionType(
          item.type === "SLA Breach"
            ? "sla breach"
            : item.type.toLowerCase()
        );

        const isSelected = selectedType === item.type;

        return (
          <button
            key={item.type}
            onClick={() => onChange(isSelected ? "all" : item.type)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border"
            style={
              isSelected
                ? {
                    backgroundColor: color,
                    color: "white",
                    borderColor: color,
                  }
                : {
                    backgroundColor: bg,
                    color,
                    borderColor: `${color}30`,
                  }
            }
          >
            <span>{item.type}</span>

            <span className="opacity-70">
              ({item.count})
            </span>
          </button>
        );
      })}

      {selectedType !== "all" && (
        <button
          onClick={() => onChange("all")}
          className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          Clear ×
        </button>
      )}
    </div>
  );
}