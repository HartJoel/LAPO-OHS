interface YesNoToggleProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
  yesLabel: string;
  noLabel: string;
  /** "emphasis" colors yes=red/no=green (for risk questions), "neutral" uses the brand orange for either answer. */
  variant?: "emphasis" | "neutral";
}

function YesNoToggle({
  value,
  onChange,
  yesLabel,
  noLabel,
  variant = "neutral",
}: YesNoToggleProps) {
  return (
    <div className="flex gap-[10px]">
      {[true, false].map((option) => {
        const active = value === option;

        const activeClasses =
          variant === "emphasis"
            ? option
              ? "border-2 border-red-600 bg-red-50 font-semibold text-red-700"
              : "border-2 border-green-600 bg-green-50 font-semibold text-green-700"
            : "border-2 border-[#EC8020] bg-orange-50 font-semibold text-[#7A3E0A]";

        return (
          <button
            key={String(option)}
            type="button"
            onClick={() => onChange(option)}
            className={`flex-1 rounded-lg px-3 py-2.5 text-[13px] text-center transition-all ${
              active
                ? activeClasses
                : "border border-stone-300 bg-[#F8F4EE] font-medium text-stone-600 hover:border-stone-400"
            }`}
          >
            {option ? yesLabel : noLabel}
          </button>
        );
      })}
    </div>
  );
}

export default YesNoToggle;