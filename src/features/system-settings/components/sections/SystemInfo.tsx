interface SystemInfoItem {
  label: string;
  value: string;
}

interface MaintenanceAction {
  label: string;
  desc: string;
  color: string;
}

interface Props {
  systemInfo: SystemInfoItem[];
  maintenanceActions: MaintenanceAction[];
}

export default function SystemInfo({ systemInfo, maintenanceActions }: Props) {
  return (
    <div className="space-y-4">
      {/* System Information */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-semibold text-gray-900 mb-4">System Information</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {systemInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-xs text-gray-500">{item.label}</span>

              <span className="text-xs font-bold text-gray-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-semibold text-gray-900 mb-4">
          Maintenance Actions
        </h2>

        <div className="space-y-3">
          {maintenanceActions.map((action) => (
            <div
              key={action.label}
              className="flex items-center justify-between py-3 px-4 border border-gray-100 rounded-lg hover:bg-gray-50"
            >
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {action.label}
                </div>

                <div className="text-xs text-gray-500">{action.desc}</div>
              </div>

              <button
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border hover:opacity-80 transition"
                style={{
                  borderColor: action.color,
                  color: action.color,
                }}
              >
                Run
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          All maintenance actions are logged to the system audit trail.
        </p>
      </div>
    </div>
  );
}
