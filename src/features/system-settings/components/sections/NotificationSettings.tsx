import { Check, Save } from "lucide-react";
import type { NotificationRule } from "../../mocks/notificationRules";

const LAPO_GREEN = "#22C55E";
const LAPO_ORANGE = "#F58220";

interface Props {
  rules: NotificationRule[];
  saved: boolean;
  onSave: () => void;
  onToggle: (index: number) => void;
}

export default function NotificationSettings({
  rules,
  saved,
  onSave,
  onToggle,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-gray-900">
          Notification Rules
        </h2>

        <button
          onClick={onSave}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
          style={{
            backgroundColor: saved ? LAPO_GREEN : LAPO_ORANGE,
          }}
        >
          {saved ? (
            <>
              <Check size={14} />
              Saved!
            </>
          ) : (
            <>
              <Save size={14} />
              Save
            </>
          )}
        </button>
      </div>

      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div
            key={rule.label}
            className="flex items-start gap-4 py-3 border-b border-gray-50 last:border-0"
          >
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900">
                {rule.label}
              </div>

              <div className="text-xs text-gray-500 mt-0.5">
                {rule.desc}
              </div>
            </div>

            <button
              onClick={() => onToggle(index)}
              className="relative w-10 h-6 rounded-full transition-all flex-shrink-0 mt-0.5"
              style={{
                backgroundColor: rule.enabled
                  ? LAPO_GREEN
                  : "#D1D5DB",
              }}
            >
              <span
                className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"
                style={{
                  transform: rule.enabled
                    ? "translateX(16px)"
                    : "translateX(0)",
                }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}