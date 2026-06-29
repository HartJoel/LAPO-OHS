import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Bell,
  ChevronDown,
  ChevronRight,
  LogOut,
  UserCircle,
  AlertTriangle,
  ArrowLeftRight,
} from "lucide-react";

import {
  useAuthStore,
  ELEVATED_ROLES,
  ROLE_LABELS,
  ROLE_HOME_ROUTES,
} from "../../store/authStore";

// ── Design tokens ──────────────────────────────────────────────────────────────
const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface NavbarNotification {
  id: string;
  severity: string;
  category: string;
  branch: string;
}

interface NavbarProps {
  /** Pass real data from TanStack Query when backend is ready. */
  notifications?: NavbarNotification[];
}

// ── Mock data (swap for API query result when backend is ready) ────────────────
export const MOCK_NOTIFICATIONS: NavbarNotification[] = [
  {
    id: "INC-001",
    severity: "Critical",
    category: "Safety Hazard",
    branch: "Benin Head Office",
  },
  {
    id: "INC-007",
    severity: "High",
    category: "Workplace Misconduct",
    branch: "Lagos Island Branch",
  },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function Navbar({
  notifications = MOCK_NOTIFICATIONS,
}: NavbarProps) {
  const navigate = useNavigate();
  const { user, inEmployeeView, logout, switchToEmployee, switchToPrimary } =
    useAuthStore();

  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  if (!user) return null;

  const isElevated = ELEVATED_ROLES.includes(user.role);
  const roleLabel = ROLE_LABELS[user.role] ?? "Employee";
  const breachedCount = notifications.length;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const closeAll = () => {
    setSwitcherOpen(false);
    setNotifOpen(false);
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSwitchToPrimary = () => {
    switchToPrimary();
    closeAll();
    navigate(ROLE_HOME_ROUTES[user.role]);
  };

  const handleSwitchToEmployee = () => {
    switchToEmployee();
    closeAll();
    navigate("/dashboard");
  };

  return (
    // The wrapper is a flex column so the banner stacks above the header bar
    <div className="flex flex-col shrink-0">
      {/* ── Employee-mode banner ─────────────────────────────────────────────── */}
      {inEmployeeView && (
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{ backgroundColor: LAPO_ORANGE }}
        >
          <div className="flex items-center gap-2.5 text-white min-w-0">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <UserCircle size={13} />
            </div>
            <span className="text-sm font-semibold whitespace-nowrap">
              Employee View Active
            </span>
            <span className="text-white/60 text-sm hidden sm:block">—</span>
            <span className="text-white/80 text-sm truncate hidden sm:block">
              You are acting as an employee. Reports will be filed under{" "}
              <strong>{user.name}</strong>.
            </span>
          </div>

          <button
            onClick={handleSwitchToPrimary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-semibold transition-colors shrink-0 ml-4"
          >
            <ArrowLeftRight size={13} />
            Return to {roleLabel} View
          </button>
        </div>
      )}

      {/* ── Main header bar ──────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 hidden sm:block">
            LAPO Microfinance Bank — Occupational Health, Safety & Workplace
            Conduct Management
          </span>
          {inEmployeeView && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${LAPO_ORANGE}15`,
                color: LAPO_ORANGE,
              }}
            >
              <UserCircle size={11} />
              Employee View
            </span>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* ── Role-switcher pill ─────────────────────────────────────────── */}
          {isElevated && (
            <div className="relative">
              <button
                onClick={() => {
                  setSwitcherOpen((v) => !v);
                  setNotifOpen(false);
                  setUserMenuOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all hover:shadow-sm"
                style={
                  inEmployeeView
                    ? {
                        borderColor: LAPO_ORANGE,
                        color: LAPO_ORANGE,
                        backgroundColor: `${LAPO_ORANGE}08`,
                      }
                    : {
                        borderColor: "#E5E7EB",
                        color: "#374151",
                        backgroundColor: "white",
                      }
                }
              >
                <ArrowLeftRight size={14} />
                <span>{inEmployeeView ? "Employee View" : roleLabel}</span>
                <ChevronDown size={13} className="text-gray-400" />
              </button>

              {switcherOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Switch View
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      Choose which interface to access
                    </div>
                  </div>

                  {/* Primary role */}
                  <button
                    onClick={handleSwitchToPrimary}
                    disabled={!inEmployeeView}
                    className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors border-b border-gray-50 disabled:cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: !inEmployeeView
                          ? `${LAPO_GREEN}20`
                          : "#F3F4F6",
                      }}
                    >
                      <Shield
                        size={18}
                        style={{
                          color: !inEmployeeView ? LAPO_GREEN : "#9CA3AF",
                        }}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold text-gray-900">
                        {roleLabel}
                      </div>
                      <div className="text-xs text-gray-500">
                        {user.role === "hr"
                          ? "Case management, dashboards & compliance tools"
                          : "Team dashboard & unit case overview"}
                      </div>
                    </div>
                    {!inEmployeeView ? (
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${LAPO_GREEN}20`,
                          color: LAPO_GREEN,
                        }}
                      >
                        Active
                      </span>
                    ) : (
                      <ChevronRight size={14} className="text-gray-300" />
                    )}
                  </button>

                  {/* Employee view */}
                  <button
                    onClick={handleSwitchToEmployee}
                    disabled={inEmployeeView}
                    className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors disabled:cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: inEmployeeView
                          ? `${LAPO_ORANGE}20`
                          : "#F3F4F6",
                      }}
                    >
                      <UserCircle
                        size={18}
                        style={{
                          color: inEmployeeView ? LAPO_ORANGE : "#9CA3AF",
                        }}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold text-gray-900">
                        Employee View
                      </div>
                      <div className="text-xs text-gray-500">
                        Submit reports & track your personal cases
                      </div>
                    </div>
                    {inEmployeeView ? (
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${LAPO_ORANGE}20`,
                          color: LAPO_ORANGE,
                        }}
                      >
                        Active
                      </span>
                    ) : (
                      <ChevronRight size={14} className="text-gray-300" />
                    )}
                  </button>

                  <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
                    <p className="text-[11px] text-gray-400 flex items-start gap-1.5">
                      <Shield size={11} className="mt-0.5 shrink-0" />
                      Reports submitted in Employee View are logged under your
                      identity and treated with full confidentiality.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Notification bell ──────────────────────────────────────────── */}
          <div className="relative">
            <button
              onClick={() => {
                setNotifOpen((v) => !v);
                setUserMenuOpen(false);
                setSwitcherOpen(false);
              }}
              className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <Bell size={18} />
              {breachedCount > 0 && (
                <span
                  className="absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ backgroundColor: "#DC2626" }}
                >
                  {breachedCount}
                </span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="font-semibold text-gray-900 text-sm">
                    Notifications
                  </div>
                  {breachedCount > 0 && (
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                      {breachedCount} breached
                    </span>
                  )}
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {breachedCount === 0 ? (
                    <div className="px-4 py-6 text-center text-gray-400 text-sm">
                      No active alerts
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className="px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-start gap-2">
                          <AlertTriangle
                            size={14}
                            className="text-red-500 mt-0.5 shrink-0"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {n.id} — SLA Breached
                            </div>
                            <div className="text-xs text-gray-500">
                              {n.severity} · {n.category} · {n.branch}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── User menu ─────────────────────────────────────────────────── */}
          <div className="relative">
            <button
              onClick={() => {
                setUserMenuOpen((v) => !v);
                setNotifOpen(false);
                setSwitcherOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="relative">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: LAPO_ORANGE }}
                >
                  {initials}
                </div>
                {inEmployeeView && (
                  <div
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: LAPO_ORANGE }}
                    title="Employee View Active"
                  />
                )}
              </div>
              <span className="text-sm text-gray-700 font-medium hidden sm:block">
                {user.name.split(" ")[0]}
              </span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="text-sm font-semibold text-gray-900">
                    {user.name}
                  </div>
                  <div className="text-xs text-gray-500">{user.jobTitle}</div>
                  <div className="text-xs text-gray-400">{user.email}</div>
                  <div className="mt-1.5">
                    <span
                      className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full"
                      style={
                        inEmployeeView
                          ? {
                              backgroundColor: `${LAPO_ORANGE}15`,
                              color: LAPO_ORANGE,
                            }
                          : {
                              backgroundColor: `${LAPO_GREEN}15`,
                              color: LAPO_GREEN,
                            }
                      }
                    >
                      {inEmployeeView ? "Employee View" : roleLabel}
                    </span>
                  </div>
                </div>

                {isElevated && (
                  <button
                    onClick={
                      inEmployeeView
                        ? handleSwitchToPrimary
                        : handleSwitchToEmployee
                    }
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    style={{ color: inEmployeeView ? LAPO_GREEN : LAPO_ORANGE }}
                  >
                    <ArrowLeftRight size={14} />
                    {inEmployeeView
                      ? `Back to ${roleLabel} View`
                      : "Switch to Employee View"}
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
