import {
  HeartPulse,
  Leaf,
  ShieldAlert,
  UserX,
  Lock,
  Scale,
  Handshake,
} from "lucide-react";
import type { ReportCategoryGroup } from "../types";

// TODO: replace with a fetch from the categories API once it's available.
// Shape is intentionally flat/serializable so swapping the source doesn't
// require touching any component that consumes it.
export const reportCategories: ReportCategoryGroup[] = [
  {
    id: "workplace-safety",
    title: "Workplace Safety",
    department: "General Services",
    icon: ShieldAlert,
    iconColor: "#DC2626",
    items: [
      {
        id: "fire-outbreak",
        title: "Fire outbreak",
        secondaryDepartment: "Sustainability Unit",
      },
      { id: "electrical-socket-fire", title: "Electrical socket fire" },
      { id: "no-fire-extinguisher", title: "No fire extinguisher" },
      { id: "expired-extinguisher", title: "Expired extinguisher" },
      { id: "wet-floor-electrocution", title: "Wet floor electrocution" },
      { id: "trailing-wires", title: "Trailing wires injury" },
      { id: "slips-trips-falls", title: "Slips, trips, and falls" },
      { id: "blocked-entry-exit", title: "Blocked entry/exit" },
      { id: "cluttered-walkways", title: "Cluttered walkways" },
      {
        id: "burn-injuries",
        title: "Burn injuries",
        secondaryDepartment: "People & Culture",
      },
      { id: "broken-chairs", title: "Broken chairs" },
      { id: "faulty-office-equipment", title: "Faulty office equipment" },
      { id: "burnt-work-equipment", title: "Burnt work equipment" },
      { id: "vehicle-fault", title: "Vehicle fault" },
      {
        id: "fieldwork-travel-accident",
        title: "Fieldwork travel accident",
        secondaryDepartment: "People & Culture",
      },
      { id: "chemical-spill", title: "Chemical spill" },
      { id: "harmful-weapon-injury", title: "Harmful weapon injury" },
      { id: "robbery-attack", title: "Robbery attack" },
      { id: "security-assault-incident", title: "Security assault incident" },
    ],
  },

  {
    id: "health-ergonomics",
    title: "Health & Ergonomics",
    department: "General Services",
    icon: HeartPulse,
    iconColor: "#059669",
    items: [
      {
        id: "no-first-aid-box",
        title: "No first aid box",
        secondaryDepartment: "People & Culture",
      },
      { id: "poor-office-ventilation", title: "Poor office ventilation" },
      { id: "air-pollution", title: "Air pollution" },
      { id: "congested-office-space", title: "Congested office space" },
      {
        id: "ergonomic-injury",
        title: "Ergonomic injury",
        secondaryDepartment: "People & Culture",
      },
      {
        id: "chair-related-body-pain",
        title: "Chair-related body pain",
        secondaryDepartment: "People & Culture",
      },
      { id: "computer-related-strain", title: "Computer-related strain" },
      {
        id: "workload-related-ailment",
        title: "Workload-related ailment",
        secondaryDepartment: "People & Culture",
      },
      {
        id: "infectious-disease-exposure",
        title: "Infectious disease exposure",
      },
      { id: "contamination-spread", title: "Contamination spread" },
      { id: "injury-while-on-duty", title: "Injury while on duty" },
      { id: "body-part-affected", title: "Body part affected" },
      { id: "stress-related-illness", title: "Stress-related illness" },
    ],
  },

  {
    id: "harassment-conduct",
    title: "Harassment & Conduct",
    department: "People & Culture",
    icon: UserX,
    iconColor: "#7C3AED",
    items: [
      { id: "bullying", title: "Bullying", secondaryDepartment: "Legal" },
      {
        id: "verbal-harassment",
        title: "Verbal harassment",
        secondaryDepartment: "Legal",
      },
      {
        id: "sexual-harassment",
        title: "Sexual harassment",
        secondaryDepartment: "Legal",
      },
      {
        id: "physical-assault",
        title: "Physical assault",
        secondaryDepartment: "Legal",
      },
      {
        id: "fighting-and-injury",
        title: "Fighting and injury",
        secondaryDepartment: "Legal",
      },
      {
        id: "oppressive-leadership",
        title: "Oppressive leadership",
        secondaryDepartment: "Operations",
      },
      {
        id: "threats-at-work",
        title: "Threats at work",
        secondaryDepartment: "Legal",
      },
      {
        id: "client-aggression",
        title: "Client aggression",
        secondaryDepartment: "Operations",
      },
      {
        id: "security-misconduct",
        title: "Security misconduct",
        secondaryDepartment: "Operations",
      },
      {
        id: "abuse-from-colleague",
        title: "Abuse from colleague",
        secondaryDepartment: "Legal",
      },
      { id: "weapon-related-assault", title: "Weapon-related assault" },
    ],
  },

  {
    id: "environmental-facility",
    title: "Environmental & Facility Hazards",
    department: "General Services",
    icon: Leaf,
    iconColor: "#0369A1",
    items: [
      {
        id: "dirty-office-environment",
        title: "Dirty office environment",
        secondaryDepartment: "People & Culture",
      },
      { id: "waste-pollution", title: "Waste pollution" },
      { id: "carbon-emission-pollution", title: "Carbon emission pollution" },
      { id: "water-erosion", title: "Water erosion" },
      { id: "chemical-pollution", title: "Chemical pollution" },
      { id: "cooking-in-office", title: "Cooking in office" },
      {
        id: "combustible-materials",
        title: "Combustible materials in workspace",
      },
      { id: "no-ventilation", title: "No ventilation" },
      {
        id: "faulty-facility-equipment",
        title: "Faulty facility equipment",
        secondaryDepartment: "Operations",
      },
      { id: "housekeeping-issue", title: "Housekeeping issue" },
    ],
  },

  {
    id: "security-theft",
    title: "Security & Theft",
    department: "Operations / IT",
    icon: Lock,
    iconColor: "#92400E",
    items: [
      {
        id: "stolen-work-tools",
        title: "Stolen work tools",
        secondaryDepartment: "General Services",
      },
      {
        id: "theft-due-to-negligence",
        title: "Theft due to negligence",
        secondaryDepartment: "General Services",
      },
      {
        id: "armed-robbery",
        title: "Armed robbery",
        secondaryDepartment: "General Services",
      },
      {
        id: "security-personnel-assault",
        title: "Security personnel assault",
        secondaryDepartment: "Operations",
      },
      {
        id: "client-theft-incident",
        title: "Client theft incident",
        secondaryDepartment: "Client Experience Management",
      },
      {
        id: "failed-prevention-process",
        title: "Incident due to failed prevention process",
        secondaryDepartment: "Operations",
      },
    ],
  },

  {
    id: "legal-compliance",
    title: "Legal, Compliance & Compensation",
    department: "People & Culture",
    icon: Scale,
    iconColor: "#065F46",
    items: [
      {
        id: "no-accident-compensation",
        title: "No accident compensation",
        secondaryDepartment: "Finance",
      },
      {
        id: "robbery-compensation",
        title: "Robbery compensation claim",
        secondaryDepartment: "Compliance",
      },
      {
        id: "regulatory-fine",
        title: "Regulatory fine or sanction",
        secondaryDepartment: "Compliance",
      },
      {
        id: "financial-loss",
        title: "Financial loss from incident",
        secondaryDepartment: "Operations",
      },
      {
        id: "pending-dispute",
        title: "Pending dispute resolution",
        secondaryDepartment: "Operations",
      },
      {
        id: "incident-negligence",
        title: "Incident from negligence",
        secondaryDepartment: "Operations",
      },
      {
        id: "compliance-breach",
        title: "Compliance breach",
        secondaryDepartment: "Operations",
      },
      {
        id: "child-labour-vendor",
        title: "Child labour by vendor",
        secondaryDepartment: "General Services",
      },
    ],
  },

  {
    id: "client-vendor",
    title: "Client & Vendor Related",
    department: "Client Experience",
    icon: Handshake,
    iconColor: "#BE185D",
    items: [
      {
        id: "aggressive-client",
        title: "Aggressive client incident",
        secondaryDepartment: "Operations",
      },
      {
        id: "poor-turnaround",
        title: "Poor transaction turnaround conflict",
        secondaryDepartment: "Audit",
      },
      {
        id: "vendor-misconduct",
        title: "Vendor misconduct",
        secondaryDepartment: "Operations",
      },
      {
        id: "vendor-child-labour",
        title: "Vendor child labour",
        secondaryDepartment: "Operations",
      },
      {
        id: "infectious-vendor-exposure",
        title: "Infectious exposure from vendor/client",
      },
    ],
  },
];