import type { User } from "../../types/user";
import {
  Mail,
  Users,
  Building2,
  FileText,
  CheckCircle2,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

interface Props {
  selectedUser?: User;
}

const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

const ROLE_LABELS = {
  admin: "Administrator",
  manager: "Manager",
  officer: "Officer",
  staff: "Staff",
};

const ROLE_COLOR = {
  admin: {
    bg: "#FEE2E2",
    text: "#B91C1C",
  },
  manager: {
    bg: "#DBEAFE",
    text: "#1D4ED8",
  },
  officer: {
    bg: "#DCFCE7",
    text: "#15803D",
  },
  staff: {
    bg: "#F3F4F6",
    text: "#374151",
  },
};

const casesSubmitted = 14;
const casesHandled = 8;

export default function UserDetailsPanel({ selectedUser }: Props) {
  const [active, setActive] = useState(true);
  if (!selectedUser) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-fit sticky mt-4 top-0">
      <div
        className="p-5 border-b border-gray-100"
        style={{
          background: `linear-gradient(135deg, ${LAPO_ORANGE}10, ${LAPO_GREEN}10)`,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{
              backgroundColor: active ? LAPO_ORANGE : "#D1D5DB",
            }}
          >
            {selectedUser.initials}
          </div>
          <div>
            <div className="font-bold text-gray-900">{selectedUser.name}</div>
            <div className="text-xs text-gray-500">{selectedUser.jobTitle}</div>
          </div>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: ROLE_COLOR[selectedUser.role]?.bg,
            color: ROLE_COLOR[selectedUser.role]?.text,
          }}
        >
          {ROLE_LABELS[selectedUser.role]}
        </span>
      </div>
      <div className="p-5 space-y-3 flex-1">
        {[
          { label: "Email", value: selectedUser.email, icon: Mail },
          { label: "Unit", value: selectedUser.unit, icon: Users },
          { label: "Branch", value: selectedUser.branch, icon: Building2 },
          {
            label: "Cases Submitted",
            value: String(casesSubmitted),
            icon: FileText,
          },
          {
            label: "Cases Handled",
            value: String(casesHandled),
            icon: CheckCircle2,
          },
          {
            label: "Status",
            value: active ? "Active" : "Inactive",
            icon: UserCheck,
          },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <row.icon size={13} />
              {row.label}
            </div>
            <span className="font-medium text-gray-900 text-right max-w-36 truncate">
              {row.value}
            </span>
          </div>
        ))}
      </div>
      {/* Actions */}
      <div className="p-5 border-t border-gray-100 space-y-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Actions
        </div>
        <button
          onClick={() => setActive((prev) => !prev)}
          className="w-full py-2 rounded-lg text-sm font-semibold transition-colors border"
          style={
            active
              ? {
                  borderColor: "#FCA5A5",
                  color: "#DC2626",
                  backgroundColor: "#FEF2F2",
                }
              : {
                  borderColor: "#A7F3D0",
                  color: LAPO_GREEN,
                  backgroundColor: "#EDFBF3",
                }
          }
        >
          {active ? "⛔ Deactivate Account" : "✅ Activate Account"}
        </button>
        <button className="w-full py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
          ✉️ Send Password Reset
        </button>
        <div className="text-[10px] text-gray-400 text-center pt-1">
          Changes require confirmation in production
        </div>
      </div>
    </div>
  );
}
