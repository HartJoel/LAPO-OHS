import type { UserRole } from '../types/auth.types';

export interface NavItem {
  label: string;
  path: string;
  icon: string; // Tabler icon name
}

// Each role gets its own list of sidebar links
export const sidebarConfig: Record<UserRole, NavItem[]> = {
  employee: [
    { label: 'Dashboard',      path: '/dashboard',    icon: 'ti-home' },
    { label: 'Submit report',  path: '/report',       icon: 'ti-shield-plus' },
    { label: 'My cases',       path: '/my-cases',     icon: 'ti-folder' },
    { label: 'Ano tracker',    path: '/ano-tracker',  icon: 'ti-activity' },
  ],

  hr: [
    { label: 'Dashboard',       path: '/dashboard', icon: 'ti-home' },
    { label: 'Case management', path: '/cases',     icon: 'ti-briefcase' },
  ],

  unit_head: [
    { label: 'Dashboard',  path: '/dashboard',  icon: 'ti-home' },
    { label: 'Team cases', path: '/team-cases', icon: 'ti-users' },
  ],

  facilities: [
    { label: 'Dashboard',      path: '/dashboard',      icon: 'ti-home' },
    { label: 'Assigned cases', path: '/assigned-cases', icon: 'ti-clipboard-list' },
    { label: 'Work orders',    path: '/work-orders',    icon: 'ti-tool' },
    { label: 'Inspections',    path: '/inspections',    icon: 'ti-search' },
  ],

  system_admin: [
    { label: 'Dashboard',        path: '/dashboard',       icon: 'ti-home' },
    { label: 'User management',  path: '/admin/users',     icon: 'ti-users' },
    { label: 'Analytics',        path: '/admin/analytics', icon: 'ti-chart-bar' },
    { label: 'Audit log',        path: '/admin/audit',     icon: 'ti-file-text' },
    { label: 'System settings',  path: '/admin/settings',  icon: 'ti-settings' },
  ],
};

// Human-readable role labels for the sidebar header
export const roleLabels: Record<UserRole, string> = {
  employee:     'Employee',
  hr:           'HR & Compliance',
  unit_head:    'Unit Head',
  facilities:   'Facilities & HSE',
  system_admin: 'System Admin',
};