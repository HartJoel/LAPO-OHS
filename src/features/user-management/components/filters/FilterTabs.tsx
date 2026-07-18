import type { FilterTab } from "../../types/filter";

interface Props {
  tabs: FilterTab[];
  activeTab: string;
  onChange: (value: string) => void;
  activeColor?: string;
}

export default function FilterTabs({
  tabs,
  activeTab,
  onChange,
  activeColor = "#EC8020",
}: Props) {
  return (
    <div className="my-5 flex flex-wrap gap-1 rounded-xl bg-gray-200 p-1">
      {tabs.map((tab) => {
        const active = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all"
            style={
              active
                ? {
                    backgroundColor: "#fff",
                    color: activeColor,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }
                : {
                    color: "#6B7280",
                  }
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}