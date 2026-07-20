import { useState } from "react";
import { Bell, Clock, Tag, Building2, Info } from "lucide-react";
import SettingsTabs from "../components/SettingsTabs";
import SLAThresholds from "../components/sections/SLAThresholds";
import CaseCategories from "../components/sections/CaseCategories";
import NotificationSettings from "../components/sections/NotificationSettings";
import SystemInfo from "../components/sections/SystemInfo";
import { maintenanceActions, systemInfo } from "../mocks/systemInfo";
import { notificationRules } from "../mocks/notificationRules";
import BranchManagement from "../components/sections/BranchManagement";

const tabs = [
  { id: "sla", label: "SLA Thresholds", icon: Clock },
  { id: "categories", label: "Case Categories", icon: Tag },
  { id: "branches", label: "Branch Management", icon: Building2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "system", label: "System Info", icon: Info },
];

function SystemSettings() {
  const [activeTab, setActiveTab] = useState("sla");
  const [savedSection, setSavedSection] = useState("");
  const [notifRules, setNotifRules] = useState(notificationRules);

  const handleSave = (section: string) => {
    setSavedSection(section);

    setTimeout(() => {
      setSavedSection("");
    }, 1500);
  };

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: "22px", fontWeight: 700 }}
          >
            System Settings
          </h1>
          <p className="text-gray-500 text-sm">
            Configure OHS-WCMS system parameters, categories, and notification
            rules
          </p>
        </div>

        <SettingsTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {activeTab === "sla" && (
          <SLAThresholds handleSave={handleSave} savedSection={savedSection} />
        )}

        {activeTab === "categories" && (
          <CaseCategories handleSave={handleSave} savedSection={savedSection} />
        )}

        {activeTab === "notifications" && (
          <NotificationSettings
            rules={notifRules}
            saved={savedSection === "notif"}
            onSave={() => handleSave("notif")}
            onToggle={(index) =>
              setNotifRules((prev) =>
                prev.map((rule, i) =>
                  i === index ? { ...rule, enabled: !rule.enabled } : rule,
                ),
              )
            }
          />
        )}
        {activeTab === "branches" && (
          <BranchManagement
            handleSave={handleSave}
            savedSection={savedSection}
          />
        )}

        {activeTab === "system" && (
          <SystemInfo
            systemInfo={systemInfo}
            maintenanceActions={maintenanceActions}
          />
        )}
      </div>
    </>
  );
}

export default SystemSettings;
