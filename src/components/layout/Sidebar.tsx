import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Shield,
  Menu,
  X,
  LogOut,
  UserCircle,
  UserCheck,
  Users,
  Building2,
  Settings,
  ArrowLeftRight,
  ExternalLink,
  Home,
  ShieldPlus,
  Folder,
  Activity,
  Briefcase,
  ClipboardList,
  Wrench,
  Search,
  BarChart2,
  FileText,
} from "lucide-react";

import {
  useAuthStore,
  ELEVATED_ROLES,
  ROLE_LABELS,
  ROLE_HOME_ROUTES,
} from "../../store/authStore";
import { sidebarConfig } from "../../config/sidebar.config";
import type { UserRole } from "../../types/auth.types";

// ── Design tokens ──────────────────────────────────────────────────────────────
const SIDEBAR_DARK = "#111827";
const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

// ── Icon map ───────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  "ti-home": Home,
  "ti-shield-plus": ShieldPlus,
  "ti-folder": Folder,
  "ti-activity": Activity,
  "ti-briefcase": Briefcase,
  "ti-users": Users,
  "ti-clipboard-list": ClipboardList,
  "ti-tool": Wrench,
  "ti-search": Search,
  "ti-chart-bar": BarChart2,
  "ti-file-text": FileText,
  "ti-settings": Settings,
};

// ── Helpers ────────────────────────────────────────────────────────────────────
function getRoleIcon(role: UserRole, size = 13): React.ReactNode {
  switch (role) {
    case "hr":
      return <Shield size={size} />;
    case "unit_head":
      return <Users size={size} />;
    case "facilities":
      return <Building2 size={size} />;
    case "system_admin":
      return <Settings size={size} />;
    default:
      return <UserCheck size={size} />;
  }
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function Sidebar() {
  const navigate = useNavigate();

  // All view state comes from the store — sidebar is just a reader + trigger
  const {
    user,
    activeRole,
    inEmployeeView,
    logout,
    switchToEmployee,
    switchToPrimary,
  } = useAuthStore();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user || !activeRole) return null;

  const isElevated = ELEVATED_ROLES.includes(user.role);
  const roleLabel = ROLE_LABELS[user.role] ?? "Employee";

  // Nav items are driven by activeRole so they flip automatically when the
  // store changes (e.g. elevated user switches to employee view)
  const navItems = sidebarConfig[activeRole] ?? [];

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSwitchToPrimary = () => {
    switchToPrimary();
    navigate(ROLE_HOME_ROUTES[user.role]);
  };

  const handleSwitchToEmployee = () => {
    switchToEmployee();
    navigate("/dashboard");
  };

  // Badge colours swap when in employee view
  const roleBadgeStyle = inEmployeeView
    ? {
        backgroundColor: `${LAPO_ORANGE}25`,
        color: LAPO_ORANGE,
        borderColor: `${LAPO_ORANGE}40`,
      }
    : {
        backgroundColor: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.7)",
        borderColor: "transparent",
      };

  return (
    <aside
      className="flex flex-col shrink-0 transition-all duration-300 overflow-hidden"
      style={{
        width: sidebarOpen ? "248px" : "64px",
        backgroundColor: SIDEBAR_DARK,
      }}
    >
      {/* ── Logo / header ───────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        {sidebarOpen ? (
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${LAPO_ORANGE}, ${LAPO_GREEN})`,
              }}
            >
              <Shield size={16} color="white" />
            </div>
            <div>
              <div className="text-white text-sm font-bold tracking-wide">
                LAPO
              </div>
              <div className="text-white/50 text-[9px] font-medium tracking-widest uppercase">
                OHS-WCMS
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg mx-auto"
            style={{
              background: `linear-gradient(135deg, ${LAPO_ORANGE}, ${LAPO_GREEN})`,
            }}
          >
            <Shield size={16} color="white" />
          </div>
        )}

        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="text-white/40 hover:text-white transition-colors p-1 rounded"
        >
          {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* ── Role / view badge ───────────────────────────────────────────────── */}
      {sidebarOpen && (
        <div className="mx-3 mt-3 mb-1">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
            style={roleBadgeStyle}
          >
            {inEmployeeView ? (
              <>
                <UserCircle size={13} /> Viewing as Employee
              </>
            ) : (
              <>
                {getRoleIcon(user.role)} {roleLabel}
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav className="flex-1 px-2 py-2 overflow-y-auto">
        {sidebarOpen && (
          <div className="text-white/30 text-[10px] uppercase tracking-widest px-2 py-2 font-semibold">
            Navigation
          </div>
        )}

        {navItems.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Home;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              title={!sidebarOpen ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all ${
                  isActive
                    ? "text-white font-medium"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`
              }
              style={({ isActive }) =>
                isActive ? { backgroundColor: LAPO_ORANGE } : {}
              }
            >
              <Icon size={18} className="shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </NavLink>
          );
        })}

        {/* ── Role switcher (expanded) ───────────────────────────────────── */}
        {isElevated && sidebarOpen && (
          <>
            <div className="text-white/30 text-[10px] uppercase tracking-widest px-2 py-2 mt-3 font-semibold">
              Role Switcher
            </div>

            {inEmployeeView ? (
              <button
                onClick={handleSwitchToPrimary}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all border border-white/20 text-white/80 hover:bg-white/10"
              >
                <ArrowLeftRight
                  size={16}
                  className="shrink-0"
                  style={{ color: LAPO_GREEN }}
                />
                <div className="text-left">
                  <div className="text-xs font-semibold">
                    Back to {roleLabel}
                  </div>
                  <div className="text-[10px] text-white/40">
                    Return to primary role
                  </div>
                </div>
              </button>
            ) : (
              <button
                onClick={handleSwitchToEmployee}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all border border-white/10 text-white/60 hover:text-white hover:bg-white/5"
              >
                <UserCircle
                  size={16}
                  className="shrink-0"
                  style={{ color: LAPO_ORANGE }}
                />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white/80">
                    Report an Incident
                  </div>
                  <div className="text-[10px] text-white/40">
                    Switch to employee view
                  </div>
                </div>
              </button>
            )}
          </>
        )}

        {/* ── Role switcher (collapsed, icon only) ──────────────────────── */}
        {isElevated && !sidebarOpen && (
          <button
            onClick={
              inEmployeeView ? handleSwitchToPrimary : handleSwitchToEmployee
            }
            title={
              inEmployeeView
                ? `Back to ${roleLabel}`
                : "Switch to Employee View"
            }
            className="w-full flex items-center justify-center px-3 py-2.5 rounded-lg mb-1 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            <ArrowLeftRight
              size={18}
              style={{ color: inEmployeeView ? LAPO_GREEN : LAPO_ORANGE }}
            />
          </button>
        )}

        {/* ── Quick links ────────────────────────────────────────────────── */}
        {sidebarOpen && (
          <>
            <div className="text-white/30 text-[10px] uppercase tracking-widest px-2 py-2 mt-2 font-semibold">
              Quick Links
            </div>
            <button
              onClick={() => navigate("/track")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              <ExternalLink size={18} className="shrink-0" />
              <span>Anonymous Tracker</span>
            </button>
          </>
        )}
      </nav>

      {/* ── User profile footer ──────────────────────────────────────────────── */}
      <div className="border-t border-white/10 p-3">
        {sidebarOpen ? (
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ backgroundColor: LAPO_ORANGE }}
            >
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">
                {user.name}
              </div>
              <div className="text-white/40 text-xs truncate">{user.email}</div>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="text-white/40 hover:text-red-400 transition-colors"
            >
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: LAPO_ORANGE }}
            >
              {initials}
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="text-white/40 hover:text-red-400 transition-colors"
            >
              <LogOut size={14} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
