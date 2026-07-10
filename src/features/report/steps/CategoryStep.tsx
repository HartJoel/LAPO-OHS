import AnonymousToggle from "../components/AnonymousToggle";
import CategorySection from "../components/CategorySection";
import { reportCategories } from "../data/reportCategories";
import type { SubmitReportForm } from "../useSubmitReportForm";

interface CategoryStepProps {
  form: SubmitReportForm;
}

function CategoryStep({ form }: CategoryStepProps) {
  return (
    <div className="mx-auto max-w-205 bg-[#F8F4EE] px-6 py-6">
      <AnonymousToggle
        anonymous={form.anonymous}
        onToggle={form.toggleAnonymous}
      />

      <h2 className="text-sm font-bold text-stone-900 mb-[18px]">
        Select the incident category and type
      </h2>

      {reportCategories.map((group) => (
        <CategorySection
          key={group.id}
          title={group.title}
          department={group.department}
          iconBg="#FEE2E2"
          icon={group.icon}
          iconColor={group.iconColor}
          items={group.items}
          selected={form.selectedCategory?.id}
          onSelect={form.setSelectedCategory}
        />
      ))}

      <div className="mt-2 flex justify-end">
        <button
          type="button"
          disabled={!form.canProceedFromCategory}
          className="rounded-lg bg-[#EC8020] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={form.goNext}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default CategoryStep;
