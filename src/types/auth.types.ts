export type UserRole =
  | "employee"
  | "hr"
  | "sustainability"
  | "unit_head"
  | "facilities"
  | "system_admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  jobTitle: string;
  branch: string;
  department?: string;
  submittedCases: number;
  handledCases?: number;
  status: "Active" | "Inactive";
}
