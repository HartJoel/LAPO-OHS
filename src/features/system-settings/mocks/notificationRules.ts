export interface NotificationRule {
  label: string;
  desc: string;
  enabled: boolean;
}

export const notificationRules = [
  {
    label: "Critical case submitted",
    desc: "Notify HR Officer, Branch Manager, and HSE Director immediately",
    enabled: true,
  },
  {
    label: "SLA breach detected",
    desc: "Notify HR Officer and escalate to Head of People after 2hr breach",
    enabled: true,
  },
  {
    label: "Case assigned to handler",
    desc: "Notify the assigned HR/Facilities officer with case details",
    enabled: true,
  },
  {
    label: "Case status updated",
    desc: "Notify the reporter (if not anonymous) of every status change",
    enabled: true,
  },
  {
    label: "Anonymous case logged",
    desc: "Send token confirmation to anonymous reporter system endpoint",
    enabled: true,
  },
  {
    label: "SLA approaching (80%)",
    desc: "Warn the assigned handler when 80% of SLA time has elapsed",
    enabled: false,
  },
  {
    label: "Weekly digest report",
    desc: "Send weekly case summary to HR team and Admin every Monday",
    enabled: false,
  },
  {
    label: "Monthly analytics report",
    desc: "Send monthly analytics PDF to System Admin and HR Director",
    enabled: false,
  },
];