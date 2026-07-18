import type { User } from "../types/user";

export const mockUsers: User[] = [
  {
    id: "1",
    initials: "AO",
    name: "Amaka Okafor",
    email: "amaka.okafor@lapo.ng",
    role: "employee",
    unit: "Operations",
    branch: "Lagos",
    submittedCases: 4,
    status: "Active",
  },
  {
    id: "2",
    initials: "CN",
    name: "Chidi Nwosu",
    email: "chidi.nwosu@lapo.ng",
    role: "hr",
    unit: "Human Resources",
    branch: "Head Office",
    submittedCases: 0,
    handledCases: 14,
    status: "Active",
  },
];
