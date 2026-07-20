import {
  Monitor,
  PlusCircle,
  UserPlus,
  CheckCircle2,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

export function getActionType(type: string) {
  switch (type.toLowerCase()) {
    case "status update":
      return {
        label: "Status Update",
        color: "#F59E0B",
        bg: "#FEF3C7",
        icon: RefreshCw,
      };

    case "system":
      return {
        label: "System",
        color: "#6B7280",
        bg: "#F3F4F6",
        icon: Monitor,
      };

    case "case created":
      return {
        label: "Case Created",
        color: "#2563EB",
        bg: "#DBEAFE",
        icon: PlusCircle,
      };

    case "assignment":
      return {
        label: "Assignment",
        color: "#7C3AED",
        bg: "#EDE9FE",
        icon: UserPlus,
      };

    case "resolution":
      return {
        label: "Resolution",
        color: "#16A34A",
        bg: "#DCFCE7",
        icon: CheckCircle2,
      };

    case "escalation":
      return {
        label: "Escalation",
        color: "#DC2626",
        bg: "#FEE2E2",
        icon: AlertTriangle,
      };

    default:
      return {
        label: "Other",
        color: "#6B7280",
        bg: "#F3F4F6",
        icon: Monitor,
      };
  }
}
