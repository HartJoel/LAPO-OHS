import type { User } from "../../../../types/auth.types";
import {
  FileText,
  ShieldAlert,
  HeartPulse,
  Leaf,
  Lock,
  Users,
  Scale,
  ChevronRight,
  FolderOpen,
  CheckCircle,
  Clock,
  // AlertTriangle,
  Plus,
  // TriangleAlert,
  Handshake,
} from "lucide-react";
import StatCards from "../../shared";
import { useNavigate } from "react-router-dom";
import { StatusBadge } from "../../../../components/ui/badges";
import type { CaseStatus } from "../../../../types";

const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

const stats = [
  {
    label: "Open Cases",
    value: 4,
    icon: FolderOpen,
    color: LAPO_ORANGE,
    bg: "#FFF4EA",
  },
  {
    label: "Resolved",
    value: 0,
    icon: CheckCircle,
    color: LAPO_GREEN,
    bg: "#EDFBF3",
  },
  {
    label: "Closed",
    value: 0,
    icon: Clock,
    color: "#6B7280",
    bg: "#F3F4F6",
  },
  {
    label: "Total Submitted",
    value: 4,
    icon: FileText,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
];

const quickActions = [
  {
    label: "Workplace Safety",
    desc: "Fire hazards, slips & falls, electrical faults, injuries",
    icon: ShieldAlert,
    color: "#DC2626",
    bg: "#FEF2F2",
    type: "safety",
  },
  {
    label: "Health & Ergonomics",
    desc: "Ventilation, ergonomic injuries, disease exposure, stress",
    icon: HeartPulse,
    color: LAPO_GREEN,
    bg: "#ECFDF5",
    type: "health",
  },
  {
    label: "Harassment & Conduct",
    desc: "Bullying, verbal/sexual harassment, threats, oppressive leadership",
    icon: Users,
    color: "#7C3AED",
    bg: "#F5F3FF",
    type: "harassment",
  },
  {
    label: "Environmental & Facility",
    desc: "Pollution, waste, housekeeping, faulty facility equipment",
    icon: Leaf,
    color: "#0369A1",
    bg: "#EFF6FF",
    type: "environmental",
  },
  {
    label: "Security & Theft",
    desc: "Stolen tools, armed robbery, security failures",
    icon: Lock,
    color: "#92400E",
    bg: "#FFFBEB",
    type: "security",
  },
  {
    label: "Legal & Compliance",
    desc: "Compensation claims, regulatory breaches, negligence",
    icon: Scale,
    color: "#065F46",
    bg: "#ECFDF5",
    type: "legal",
  },
  {
    label: "Client & Vendor",
    desc: "Aggressive clients, vendor misconduct, infectious exposure",
    icon: Handshake,
    color: "#BE185D",
    bg: "#FDF2F8",
    type: "client",
  },
];

export interface Case {
  id: string;
  category: string;
  title: string;
  branch: string;
  status: CaseStatus;
}

const cases: Case[] = [
  {
    id: "OHS-2026-001",
    category: "Health & Ergonomics",
    title: "Poor office ventilation",
    branch: "Lagos Island Branch",
    status: "Under Review",
  },
  {
    id: "OHS-2026-003",
    category: "Health & Ergonomics",
    title: "Chair-related body pain",
    branch: "Lagos Island Branch",
    status: "Logged",
  },
  {
    id: "OHS-2026-006",
    category: "Health & Ergonomics",
    title: "Computer-related strain",
    branch: "Lagos Island Branch",
    status: "Investigating",
  },
  {
    id: "OHS-2026-012",
    category: "Environmental & Facility",
    title: "Faulty facility equipment",
    branch: "Lagos Island Branch",
    status: "Logged",
  },
];
interface Props {
  user: User;
}

export default function EmployeeDashboard({ user }: Props) {
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1
          className="text-gray-900 mb-1"
          style={{ fontSize: "22px", fontWeight: 700 }}
        >
          Welcome back, {user.name} 👋
        </h1>
        <p className="text-gray-500 text-sm">
          {user.department} · {user.role}
        </p>
      </div>

      <StatCards stats={stats} className="mb-6" />

      {/* Quick Actions — Report New Incident */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm font-semibold text-gray-900">
              Report a New Incident
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              Select the category that best describes your incident
            </div>
          </div>
          <button
            onClick={() => navigate("")}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-xs font-semibold"
            style={{ backgroundColor: LAPO_ORANGE }}
          >
            <Plus size={14} /> Full Form
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button
              key={action.type}
              onClick={() => navigate("")}
              className="flex items-start gap-3 p-3 rounded-xl border-2 border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all text-left"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: action.bg }}
              >
                <action.icon size={17} style={{ color: action.color }} />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">
                  {action.label}
                </div>
                <div className="text-[10px] text-gray-400 leading-relaxed mt-0.5">
                  {action.desc}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-900">
            My Recent Cases
          </h2>

          <button
            onClick={() => navigate("")}
            className="text-xs font-medium hover:underline"
            style={{ color: LAPO_ORANGE }}
          >
            View all →
          </button>
        </div>

        {cases.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm">
            No cases submitted yet. Use the quick actions above to file your
            first report.
          </div>
        ) : (
          <div className="space-y-2">
            {cases.map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(``)}
                className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs font-semibold text-gray-500">
                    {c.id}
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {c.title}
                  </p>

                  <p className="text-xs text-gray-500">{c.category}</p>

                  <p className="text-xs text-gray-400 mt-1">{c.branch}</p>
                </div>

                <div className="flex items-center gap-3">
                  <StatusBadge status={c.status} />

                  <ChevronRight size={16} className="text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
