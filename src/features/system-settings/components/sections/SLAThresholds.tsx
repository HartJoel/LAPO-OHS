import { useState } from "react";
import { Check, Save } from "lucide-react";

interface SLAThresholdsProps {
  handleSave: (section: string) => void;
  savedSection: string;
}

const LAPO_GREEN = "#00984A";
const LAPO_ORANGE = "#F58220";

const INITIAL_SLA = {
  Critical: 4,
  High: 24,
  Medium: 72,
  Low: 168,
};

type Severity = keyof typeof INITIAL_SLA;

export default function SLAThresholds({
  handleSave,
  savedSection,
}: SLAThresholdsProps) {
  const [sla, setSla] = useState(INITIAL_SLA);

  const colors: Record<Severity, string> = {
    Critical: "#DC2626",
    High: LAPO_ORANGE,
    Medium: "#D97706",
    Low: LAPO_GREEN,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-semibold text-gray-900">
            SLA Response Thresholds
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Maximum hours to first response by severity level
          </p>
        </div>

        <button
          onClick={() => handleSave("sla")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
          style={{
            backgroundColor:
              savedSection === "sla"
                ? LAPO_GREEN
                : LAPO_ORANGE,
          }}
        >
          {savedSection === "sla" ? (
            <>
              <Check size={14} />
              Saved!
            </>
          ) : (
            <>
              <Save size={14} />
              Save Changes
            </>
          )}
        </button>
      </div>

      <div className="space-y-6">
        {(Object.entries(sla) as [Severity, number][]).map(
          ([severity, hours]) => (
            <div key={severity}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: colors[severity],
                    }}
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {severity}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: colors[severity],
                    }}
                  >
                    {hours}h
                  </span>

                  <span className="text-xs text-gray-400">
                    {hours >= 24
                      ? `(${Math.round(hours / 24)} day${
                          Math.round(hours / 24) !== 1 ? "s" : ""
                        })`
                      : `(${hours} hours)`}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={4}
                max={720}
                step={4}
                value={hours}
                onChange={(e) =>
                  setSla((prev) => ({
                    ...prev,
                    [severity]: Number(e.target.value),
                  }))
                }
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  accentColor: colors[severity],
                }}
              />

              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>4h</span>
                <span>1 day</span>
                <span>3 days</span>
                <span>7 days</span>
                <span>14 days</span>
                <span>30 days</span>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-5 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
        <strong>Note:</strong> SLA changes affect new cases only. Existing
        open cases retain their original SLA thresholds.
      </div>
    </div>
  );
}