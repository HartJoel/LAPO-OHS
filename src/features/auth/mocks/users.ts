// mocks/users.ts

import type { User } from "../../../types/auth.types";

export const MOCK_USERS: (User & { password: string })[] = [
  {
    id: "1",
    name: "Ada Okonkwo",
    email: "ada@lapo.ng",
    password: "password123",
    role: "employee",
    department: "Operations",
  },
  {
    id: "2",
    name: "Bola Adeyemi",
    email: "bola@lapo.ng",
    password: "password123",
    role: "hr",
    department: "Human Resources",
  },
  {
    id: "3",
    name: "Chidi Nwosu",
    email: "chidi@lapo.ng",
    password: "password123",
    role: "unit_head",
    department: "Finance",
  },
  {
    id: "4",
    name: "Dami Osei",
    email: "dami@lapo.ng",
    password: "password123",
    role: "facilities",
    department: "Facilities",
  },
  {
    id: "5",
    name: "Emeka Eze",
    email: "admin@lapo.ng",
    password: "admin123",
    role: "system_admin",
  },
];
