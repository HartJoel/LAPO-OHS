export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  jobTitle: string;
  unit: string;
  branch: string;
  submittedCases: number;
  handledCases?: number;
  status: "Active" | "Inactive";
}