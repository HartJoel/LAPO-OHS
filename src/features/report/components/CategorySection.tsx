import type { LucideIcon } from "lucide-react";

interface CategoryItem {
  id: string;
  title: string;
  secondaryDepartment?: string;
}

interface CategorySectionProps {
  title: string;
  department: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  items: CategoryItem[];
  selected?: string;
  onSelect: (category: SelectedCategory) => void;
}

export interface SelectedCategory {
  id: string;
  title: string;
  category: string;
  primaryDepartment: string;
  secondaryDepartment?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export default function CategorySection({
  title,
  department,
  icon: Icon,
  iconColor,
  iconBg,
  items,
  selected,
  onSelect,
}: CategorySectionProps) {
  return (
    <div className="mb-6">
      {/* Header */}
      <div
        className="flex items-center gap-2 rounded-lg px-4 py-2 mb-3"
        style={{
          backgroundColor: `${iconColor}15`,
          color: iconColor,
        }}
      >
        <Icon size={16} />

        <span className="font-semibold text-sm">{title}</span>

        <span className="ml-auto text-xs opacity-75 font-normal">
          Primary: {department}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() =>
              onSelect({
                id: item.id,
                title: item.title,
                category: title,
                primaryDepartment: department,
                secondaryDepartment: item.secondaryDepartment,
                icon: Icon,
                iconColor,
                iconBg,
              })
            }
            className={`
              rounded-lg border p-3 text-left transition-all
              ${
                selected === item.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 bg-[#FDFAF6] hover:border-orange-300 hover:bg-orange-50"
              }
            `}
          >
            <div className="text-xs font-medium text-gray-800">
              {item.title}
            </div>

            {item.secondaryDepartment && (
              <div className="mt-1 text-[10px] text-gray-500">
                Also: {item.secondaryDepartment}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
