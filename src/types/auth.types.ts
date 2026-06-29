export type UserRole =
  | 'employee'
  | 'hr'
  | 'unit_head'
  | 'facilities'
  | 'system_admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}

