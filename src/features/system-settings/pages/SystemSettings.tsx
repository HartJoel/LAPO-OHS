import { useState } from "react";
import { Clock3, Tags, Bell, Shield, AlertCircle } from "lucide-react";
import SettingsTabs from "../components/SettingsTabs";
import SLAThresholds from "../components/sections/SLAThresholds";
import CaseCategories from "../components/sections/CaseCategories";
import NotificationSettings from "../components/sections/NotificationSettings";
import RolePermissions from "../components/sections/RolePermissions";
import SystemInfo from "../components/sections/SystemInfo";
import { maintenanceActions, systemInfo } from "../mocks/systemInfo";
import { notificationRules } from "../mocks/notificationRules";

const tabs = [
  {
    id: "sla",
    label: "SLA Thresholds",
    icon: Clock3,
  },
  {
    id: "categories",
    label: "Case Categories",
    icon: Tags,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "roles",
    label: "Roles & Permissions",
    icon: Shield,
  },
  {
    id: "info",
    label: "System Info",
    icon: AlertCircle,
  },
];

function SystemSettings() {
  const [activeTab, setActiveTab] = useState("sla");
  const [savedSection, setSavedSection] = useState("");
  const [notifRules, setNotifRules] = useState(notificationRules);
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

        {activeTab === "sla" && <SLAThresholds />}

        {activeTab === "categories" && <CaseCategories />}

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
        {activeTab === "roles" && <RolePermissions />}

        {activeTab === "info" && (
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
