export interface BranchPerformance {
  name: string;
  total: number;
  open: number;
  resolved: number;
}

export const byBranch: BranchPerformance[] = [
  {
    name: "Lagos Island",
    total: 12,
    open: 4,
    resolved: 8,
  },
  {
    name: "Benin",
    total: 9,
    open: 2,
    resolved: 7,
  },
  {
    name: "Abuja",
    total: 7,
    open: 1,
    resolved: 6,
  },
];