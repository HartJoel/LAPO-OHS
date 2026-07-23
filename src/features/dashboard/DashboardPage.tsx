import { useAuthStore } from "../../store/authStore";
import EmployeeDashboard from "./employee/pages/EmployeeDashboard";
import FacilitiesDashboard from "./facilities/pages/FacilitiesDashboard";
import HRDashboard from "./hr/pages/HRDashboard";
import SustainabilityDashboard from "./Sustainability/pages/SustainabilityDashboard";
import AdminDashboard from "./system-admin/pages/AdminDashboard";
import UnitHeadDashboard from "./unit-head/pages/UnitHeadDashboard";

export default function DashboardPage() {
  const { user, activeRole } = useAuthStore();

  if (!user || !activeRole) return null;

  switch (activeRole) {
    case "employee":
      return <EmployeeDashboard user={user} />;

    case "hr":
      return <HRDashboard user={user} />;

    case "sustainability":
      return <SustainabilityDashboard user={user} />;

    case "unit_head":
      return <UnitHeadDashboard user={user} />;

    case "facilities":
      return <FacilitiesDashboard user={user} />;

    case "system_admin":
      return <AdminDashboard user={user} />;
  }
}
