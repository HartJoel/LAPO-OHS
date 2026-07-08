import { Users } from "lucide-react";
const LAPO_ORANGE = "#EC8020";

interface TeamMember {
  name: string;
  role: string;
  cases: number;
}

interface TeamMembersCardProps {
  title: string;
  members: TeamMember[];
}

const TeamMembersCard = ({ title, members }: TeamMembersCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
        <Users size={14} className="mr-1.5" style={{ color: LAPO_ORANGE }} />
        {title}
      </div>

      <div className="space-y-2">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                style={{ backgroundColor: LAPO_ORANGE }}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <div className="text-xs font-medium text-gray-800">
                  {member.name}
                </div>

                <div className="text-[10px] text-gray-400">{member.role}</div>
              </div>
            </div>

            <span className="text-xs font-semibold text-gray-600">
              {member.cases} cases
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersCard;
