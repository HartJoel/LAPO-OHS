import type { LucideIcon } from "lucide-react";

export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface CategoryItem {
  id: string;
  title: string;
  secondaryDepartment?: string;
}

export interface ReportCategoryGroup {
  id: string;
  title: string;
  department: string;
  icon: LucideIcon;
  iconColor: string;
  items: CategoryItem[];
}

// Re-exported so the rest of the feature has one source of truth for this
// shape, instead of every file importing it from CategorySection.
export type { SelectedCategory } from "./components/CategorySection";

export interface SubmitReportFormData {
  anonymous: boolean;
  selectedCategory?: import("./components/CategorySection").SelectedCategory;
  branch: string;
  area: string;
  incidentDate: string;
  incidentTime: string;
  severity: Severity;
  hasInjury: boolean | null;
  affectedBodyArea: string;
  isRecurring: boolean | null;
  description: string;
  witnesses: string;
  attachments: string[];
}

export const MIN_DESCRIPTION_LENGTH = 50;
