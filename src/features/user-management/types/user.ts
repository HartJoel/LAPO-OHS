export interface User {
  id: string;
  initials: string;
  name: string;
  email: string;
  role: string;
  unit: string;
  branch: string;
  submittedCases: number;
  handledCases?: number;
  status: "Active" | "Inactive";
}