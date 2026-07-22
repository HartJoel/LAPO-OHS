import type { User } from "../types/user";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Amaka Okafor",
    email: "amaka.okafor@lapo.ng",
    role: "employee",
    jobTitle: "Operations Officer",
    unit: "Operations",
    branch: "Lagos",
    submittedCases: 4,
    status: "Active",
  },
  {
    id: "2",
    name: "Chidi Nwosu",
    email: "chidi.nwosu@lapo.ng",
    role: "hr",
    jobTitle: "HR Business Partner",
    unit: "Human Resources",
    branch: "Head Office",
    submittedCases: 0,
    handledCases: 14,
    status: "Active",
  },
];
