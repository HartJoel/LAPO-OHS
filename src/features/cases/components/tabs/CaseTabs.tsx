import { ClipboardList, FileText, MessageSquare } from "lucide-react";

const LAPO_ORANGE = "#EC8020";

type Tab = "details" | "correspondence" | "audit";

interface Props {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

const tabs = [
  {
    key: "details",
    label: "Case Details",
    icon: FileText,
  },
  {
    key: "correspondence",
    label: "Correspondence",
    icon: MessageSquare,
  },
  {
    key: "audit",
    label: "Audit Trail",
    icon: ClipboardList,
  },
] as const;

export default function CaseTabs({ activeTab, onChange }: Props) {
  return (
    <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            backgroundColor: activeTab === tab.key ? "white" : "transparent",

            color: activeTab === tab.key ? LAPO_ORANGE : "#6B7280",

            boxShadow:
              activeTab === tab.key ? "0 1px 2px rgba(0,0,0,.08)" : "none",
          }}
        >
          <tab.icon size={14} />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
