import { useState } from "react";
import { Check, Plus, Save, X } from "lucide-react";

interface CaseCategoriesProps {
  handleSave: (section: string) => void;
  savedSection: string;
}

const LAPO_GREEN = "#00984A";
const LAPO_ORANGE = "#F58220";

const INITIAL_CATEGORIES = {
  safety: [
    'Fire outbreak', 'Electrical socket fire', 'No fire extinguisher', 'Expired extinguisher',
    'Wet floor electrocution', 'Trailing wires injury', 'Slips, trips, and falls',
    'Blocked entry/exit', 'Cluttered walkways', 'Burn injuries', 'Broken chairs',
    'Faulty office equipment', 'Burnt work equipment', 'Vehicle fault',
    'Fieldwork travel accident', 'Chemical spill', 'Harmful weapon injury', 'Security assault incident',
  ],
  health: [
    'No first aid box', 'Poor office ventilation', 'Air pollution', 'Congested office space',
    'Ergonomic injury', 'Chair-related body pain', 'Computer-related strain',
    'Workload-related ailment', 'Infectious disease exposure', 'Contamination spread',
    'Injury while on duty', 'Body part affected', 'Stress-related illness',
  ],
  harassment: [
    'Bullying', 'Verbal harassment', 'Sexual harassment', 'Physical assault',
    'Fighting and injury', 'Oppressive leadership', 'Threats at work', 'Client aggression',
    'Security misconduct', 'Abuse from colleague', 'Weapon-related assault',
  ],
  environmental: [
    'Dirty office environment', 'Waste pollution', 'Carbon emission pollution', 'Water erosion',
    'Chemical pollution', 'Cooking in office', 'Combustible materials in workspace',
    'No ventilation', 'Faulty facility equipment', 'Housekeeping issue',
  ],
  security: [
    'Stolen work tools', 'Theft due to negligence', 'Armed robbery',
    'Security personnel assault', 'Client theft incident', 'Incident due to failed prevention process',
  ],
  legal: [
    'No accident compensation', 'Robbery compensation claim', 'Regulatory fine or sanction',
    'Financial loss from incident', 'Pending dispute resolution', 'Incident from negligence',
    'Compliance breach', 'Child labour by vendor',
  ],
  client: [
    'Aggressive client incident', 'Poor transaction turnaround conflict',
    'Vendor misconduct', 'Vendor child labour', 'Infectious exposure from vendor/client',
  ],
};

type CategoryType = keyof typeof INITIAL_CATEGORIES;

export default function CaseCategories({
  handleSave,
  savedSection,
}: CaseCategoriesProps) {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);

  const [newCategory, setNewCategory] = useState(
    Object.keys(INITIAL_CATEGORIES).reduce(
      (acc, key) => ({ ...acc, [key]: "" }),
      {} as Record<keyof typeof INITIAL_CATEGORIES, string>,
    ),
  );

  return (
    <div className="space-y-4">
      {(Object.entries(categories) as [CategoryType, string[]][]).map(
        ([type, cats]) => (
          <div
            key={type}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm font-semibold px-2.5 py-1 rounded-full capitalize ${
                    type === "safety"
                      ? "bg-red-100 text-red-700"
                      : type === "health"
                        ? "bg-emerald-100 text-emerald-700"
                        : type === "harassment"
                          ? "bg-purple-100 text-purple-700"
                          : type === "environmental"
                            ? "bg-sky-100 text-sky-700"
                            : type === "security"
                              ? "bg-amber-100 text-amber-800"
                              : type === "legal"
                                ? "bg-teal-100 text-teal-700"
                                : "bg-pink-100 text-pink-700"
                  }`}
                >
                  {type === "safety"
                    ? "🛡️"
                    : type === "health"
                      ? "❤️"
                      : type === "harassment"
                        ? "⚠️"
                        : type === "environmental"
                          ? "🌿"
                          : type === "security"
                            ? "🔒"
                            : type === "legal"
                              ? "⚖️"
                              : "👥"}{" "}
                  {type}
                </span>
                <span className="text-xs text-gray-400">
                  {cats.length} incident types
                </span>
              </div>
              <button
                onClick={() => handleSave(`cat-${type}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-semibold"
                style={{
                  backgroundColor:
                    savedSection === `cat-${type}` ? LAPO_GREEN : LAPO_ORANGE,
                }}
              >
                {savedSection === `cat-${type}` ? (
                  <>
                    <Check size={12} />
                    Saved
                  </>
                ) : (
                  <>
                    <Save size={12} />
                    Save
                  </>
                )}
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {cats.map((cat) => (
                <span
                  key={cat}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                >
                  {cat}
                  <button
                    onClick={() =>
                      setCategories((prev) => ({
                        ...prev,
                        [type]: prev[type as keyof typeof prev].filter(
                          (c) => c !== cat,
                        ),
                      }))
                    }
                    className="hover:text-red-500 transition-colors ml-0.5"
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newCategory[type]}
                onChange={(e) =>
                  setNewCategory((prev) => ({
                    ...prev,
                    [type]: e.target.value,
                  }))
                }
                placeholder="Add new category..."
                className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newCategory[type].trim()) {
                    setCategories((prev) => ({
                      ...prev,
                      [type]: [
                        ...prev[type as keyof typeof prev],
                        newCategory[type].trim(),
                      ],
                    }));
                    setNewCategory((prev) => ({ ...prev, [type]: "" }));
                  }
                }}
              />
              <button
                onClick={() => {
                  if (newCategory[type].trim()) {
                    setCategories((prev) => ({
                      ...prev,
                      [type]: [
                        ...prev[type as keyof typeof prev],
                        newCategory[type].trim(),
                      ],
                    }));
                    setNewCategory((prev) => ({ ...prev, [type]: "" }));
                  }
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: LAPO_GREEN }}
              >
                <Plus size={14} />
                Add
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
