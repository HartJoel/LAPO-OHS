import { Building2, Check, Plus, Save, X } from "lucide-react";
import { useState } from "react";

interface BranchManagementProps {
  handleSave: (section: string) => void;
  savedSection: string;
}

const LAPO_GREEN = "#00984A";
const LAPO_ORANGE = "#F58220";

const INITIAL_BRANCHES = [
  "Lagos Island Branch",
  "Surulere Branch",
  "Ikeja Branch",
  "Abuja Main Branch",
  "Port Harcourt Branch",
  "Kano Branch",
  "Head Office – Lagos",
];

export default function BranchManagement({
  handleSave,
  savedSection,
}: BranchManagementProps) {
  const [branches, setBranches] = useState(INITIAL_BRANCHES);
  const [newBranch, setNewBranch] = useState("");

  const addBranch = () => {
    if (!newBranch.trim()) return;

    setBranches((prev) => [...prev, newBranch.trim()]);
    setNewBranch("");
  };

  const removeBranch = (branch: string) => {
    setBranches((prev) => prev.filter((b) => b !== branch));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-semibold text-gray-900">
            Branch Management
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {branches.length} registered branches
          </p>
        </div>

        <button
          onClick={() => handleSave("branches")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
          style={{
            backgroundColor:
              savedSection === "branches"
                ? LAPO_GREEN
                : LAPO_ORANGE,
          }}
        >
          {savedSection === "branches" ? (
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

      <div className="space-y-2 mb-4">
        {branches.map((branch) => (
          <div
            key={branch}
            className="flex items-center justify-between py-2.5 px-4 rounded-lg border border-gray-100 hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <Building2 size={15} className="text-gray-400" />
              <span className="text-sm text-gray-900">
                {branch}
              </span>
            </div>

            <button
              onClick={() => removeBranch(branch)}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newBranch}
          onChange={(e) => setNewBranch(e.target.value)}
          placeholder="New branch name..."
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-400"
          onKeyDown={(e) => {
            if (e.key === "Enter") addBranch();
          }}
        />

        <button
          onClick={addBranch}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold"
          style={{ backgroundColor: LAPO_GREEN }}
        >
          <Plus size={14} />
          Add Branch
        </button>
      </div>
    </div>
  );
}