import { Link } from "react-router-dom";
import type { AlertCardProps } from "../types";

const styles = {
  red: {
    container: "bg-red-50 border-red-200",
    text: "text-red-800",
    button:
      "bg-white border-red-200 text-red-700 hover:bg-red-100",
    icon: "text-red-600",
  },

  amber: {
    container: "bg-amber-50 border-amber-200",
    text: "text-amber-800",
    button:
      "bg-white border-amber-200 text-amber-700 hover:bg-amber-100",
    icon: "text-amber-600",
  },
};

export default function AlertCard({
  title,
  count,
  icon,
  color,
  items,
  route,
}: AlertCardProps) {
  const theme = styles[color];

  return (
    <div className={`rounded-xl border p-4 ${theme.container}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className={theme.icon}>{icon}</span>

        <span className={`text-sm font-semibold ${theme.text}`}>
          {count} {title}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`${route}/${item.id}`}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition-colors ${theme.button}`}
          >
            <span className="font-mono font-semibold">
              {item.primary}
            </span>

            {item.secondary && (
              <>
                <span>·</span>
                <span>{item.secondary}</span>
              </>
            )}

            {item.tertiary && (
              <>
                <span>·</span>
                <span>{item.tertiary}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}