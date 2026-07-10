export const BRANCHES = [
  "Lagos Island Branch",
  "Surulere Branch",
  "Ikeja Branch",
  "Abuja Main Branch",
  "Port Harcourt Branch",
  "Ibadan Branch",
  "Kano Branch",
  "Head Office – Lagos",
] as const;

export const AREAS = [
  "Operations Floor",
  "2nd Floor – Open Plan",
  "3rd Floor – Open Plan",
  "Ground Floor",
  "Boardroom / Meeting Room",
  "Main Office",
  "Reception / Lobby",
  "Customer Service Hall",
  "Server Room / IT Suite",
  "Filing Room / Basement",
  "Staff Canteen",
  "Field / Off-site",
] as const;

export const INJURY_BODY_PARTS = [
  "Head",
  "Eye",
  "Face",
  "Neck",
  "Shoulder",
  "Arm",
  "Hand",
  "Finger",
  "Chest",
  "Back",
  "Hip",
  "Leg",
  "Knee",
  "Foot",
  "Toe",
  "Multiple body parts",
  "Other",
] as const;

export const SEVERITY_OPTIONS = [
  {
    value: "Critical",
    label: "🔴 Critical — Immediate danger to life or health",
  },
  {
    value: "High",
    label: "🟠 High — Significant risk, urgent action required",
  },
  {
    value: "Medium",
    label: "🟡 Medium — Moderate concern, timely action needed",
  },
  { value: "Low", label: "🟢 Low — Minor issue, routine resolution" },
] as const;

// Incident date can't be in the future — computed at call time instead of
// being hardcoded so this doesn't silently go stale.
export function getMaxIncidentDate(): string {
  return new Date().toISOString().split("T")[0];
}