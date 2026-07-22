import { Users } from "lucide-react";

const LAPO_GREEN = "#22C55E";

export interface IncidentManagerWorkload {
  id: string;
  name: string;
  initials: string;
  active: number;
  total: number;
}

interface Props {
  workload: IncidentManagerWorkload[];
}

export default function TeamWorkloadCard({ workload }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <Users size={15} className="text-gray-400" />
        <h2 className="font-semibold text-gray-900 text-[15px]">
          Team Workload
        </h2>
      </div>

      <div className="divide-y divide-gray-50">
        {workload.map((member) => (
          <div
            key={member.id}
            className="px-5 py-3 flex items-center gap-3"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: LAPO_GREEN }}
            >
              {member.initials}
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800 truncate">
                {member.name}
              </div>

              <div className="text-xs text-gray-400">
                Incident Manager
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-base font-bold text-gray-800">
                {member.active}
              </div>

              <div className="text-xs text-gray-400">
                active / {member.total} total
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}