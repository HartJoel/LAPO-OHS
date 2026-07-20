import type { LucideIcon } from "lucide-react";

const LAPO_ORANGE = "#F58220";

export interface SettingsTab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface Props {
  tabs: SettingsTab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export default function SettingsTabs({ tabs, activeTab, onChange }: Props) {
  return (
    <div className="flex gap-1 p-1 bg-gray-200 rounded-xl mb-6 flex-wrap">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all"
            style={
              activeTab === tab.id
                ? {
                    backgroundColor: "white",
                    color: LAPO_ORANGE,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }
                : {
                    color: "#6B7280",
                  }
            }
          >
            <Icon size={14} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
