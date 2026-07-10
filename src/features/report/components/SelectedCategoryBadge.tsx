import type { SelectedCategory } from "./CategorySection";

interface SelectedCategoryBadgeProps {
  category: SelectedCategory;
}

export default function SelectedCategoryBadge({
  category,
}: SelectedCategoryBadgeProps) {
  const Icon = category.icon;

  return (
    <div
      className="mb-[18px] flex items-center gap-[10px] rounded-[9px] border p-3"
      style={{
        // Light version of the icon color
        backgroundColor: `${category.iconColor}12`,
        borderColor: `${category.iconColor}30`,
      }}
    >
      <Icon
        size={20}
        style={{
          color: category.iconColor,
          flexShrink: 0,
        }}
      />

      <div>
        <div
          className="text-[13px] font-bold"
          style={{ color: category.iconColor }}
        >
          {category.category} — {category.title}
        </div>

        <div
          className="mt-[2px] text-[11px]"
          style={{
            color: category.iconColor,
            opacity: 0.75,
          }}
        >
          Primary handler: {category.primaryDepartment}

          {category.secondaryDepartment &&
            ` · Auxiliary: ${category.secondaryDepartment}`}
        </div>
      </div>
    </div>
  );
}