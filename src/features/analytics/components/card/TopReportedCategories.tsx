import type { TopCategory } from "../../data/topCategories";

const LAPO_ORANGE = "#F58220";

interface Props {
  categories: TopCategory[];
}

export default function TopReportedCategories({ categories }: Props) {
  const highestValue = categories[0]?.value ?? 1;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mt-6">
      <h3 className="font-semibold text-gray-900 text-sm mb-4">
        Top Reported Categories
      </h3>

      <div className="space-y-3">
        {categories.map((cat, index) => (
          <div key={cat.name} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
              {index + 1}
            </div>

            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700 truncate pr-3">
                  {cat.name}
                </span>

                <span className="text-sm font-bold">{cat.value}</span>
              </div>

              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(cat.value / highestValue) * 100}%`,
                    backgroundColor:
                      index === 0
                        ? LAPO_ORANGE
                        : index < 3
                          ? "#F59E0B"
                          : "#9CA3AF",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
