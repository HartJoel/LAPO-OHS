export type WorkOrderStatus =
  | "Pending"
  | "In Progress"
  | "Pending Parts"
  | "Pending Approval"
  | "Completed"
  | "Cancelled";
export type WorkOrderType =
  | "Maintenance"
  | "Repair"
  | "Replacement"
  | "Installation"
  | "Assessment";
export type InspectionStatus =
  | "Scheduled"
  | "In Progress"
  | "Completed"
  | "Overdue"
  | "Cancelled";
export type InspectionType =
  | "Routine Safety"
  | "Fire Safety"
  | "Electrical"
  | "Ergonomic Assessment"
  | "Environmental"
  | "Emergency Preparedness";
