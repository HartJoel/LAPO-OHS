export interface SLABreach {
  id: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  branch: string;
}