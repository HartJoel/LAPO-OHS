export const systemInfo = [
  { label: "Application", value: "LAPO OHS-WCMS" },
  { label: "Version", value: "v1.0.0 (Build 2026.04.11)" },
  { label: "Environment", value: "Production" },
  { label: "Database", value: "PostgreSQL 15.2 (Supabase)" },
  { label: "Last Backup", value: "11 Apr 2026, 02:00 WAT" },
  { label: "Uptime", value: "99.7% (30-day average)" },
  { label: "Active Sessions", value: "8 users online" },
  { label: "Storage Used", value: "2.4 GB of 50 GB" },
  { label: "Registered Users", value: "8 accounts" },
  { label: "Total Cases", value: "Loaded from context" },
];

export const maintenanceActions = [
  {
    label: "Clear Application Cache",
    desc: "Flush server-side cache (does not affect data)",
    color: "#3B82F6",
  },
  {
    label: "Run Database Backup",
    desc: "Trigger an immediate database backup to cloud storage",
    color: "#22C55E",
  },
  {
    label: "Export Full Audit Log",
    desc: "Download complete system audit trail as CSV",
    color: "#F58220",
  },
  {
    label: "Rebuild Search Index",
    desc: "Reindex all cases for faster search performance",
    color: "#7C3AED",
  },
];