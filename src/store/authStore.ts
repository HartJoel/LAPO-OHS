import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, UserRole } from "../types/auth.types";

// Roles that are allowed to switch into the employee view
export const ELEVATED_ROLES: UserRole[] = [
  "hr",
  "unit_head",
  "facilities",
  "system_admin",
  "sustainability",
];

// Human-readable labels for each role
export const ROLE_LABELS: Record<UserRole, string> = {
  employee: "Employee",
  hr: "HR & Compliance",
  unit_head: "Unit Head",
  facilities: "Facilities & HSE",
  system_admin: "System Admin",
  sustainability: "Sustainability",
};

// The route each elevated role lands on when returning to their primary view
export const ROLE_HOME_ROUTES: Record<UserRole, string> = {
  employee: "/dashboard",
  hr: "/dashboard",
  unit_head: "/dashboard",
  facilities: "/dashboard",
  system_admin: "/dashboard",
  sustainability: "/dashboard",
};

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  /**
   * True when an elevated user has switched into the employee view.
   * Components read this to decide which nav items, routes, and UI to show.
   * Only meaningful when user.role is one of ELEVATED_ROLES.
   */
  inEmployeeView: boolean;

  /**
   * The role that is currently "active" for navigation / feature access.
   * - Equals user.role normally.
   * - Equals 'employee' while an elevated user is in employee view.
   * Derive sidebar items, route guards, etc. from this.
   */
  activeRole: UserRole | null;

  // ── Actions ────────────────────────────────────────────────────────────────
  login: (user: User) => void;
  logout: () => void;
  switchToEmployee: () => void;
  switchToPrimary: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      inEmployeeView: false,
      activeRole: null,

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
          inEmployeeView: false,
          activeRole: user.role,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          inEmployeeView: false,
          activeRole: null,
        }),

      switchToEmployee: () => {
        const { user } = get();
        if (!user || !ELEVATED_ROLES.includes(user.role)) return;
        set({ inEmployeeView: true, activeRole: "employee" });
      },

      switchToPrimary: () => {
        const { user } = get();
        if (!user) return;
        set({ inEmployeeView: false, activeRole: user.role });
      },
    }),
    {
      name: "ohs-auth", // localStorage key — unchanged so existing sessions survive
    },
  ),
);
