import { useAuthStore } from "../../store/authStore";
import EmployeeDashboard from "./employee/pages/EmployeeDashboard";
import HRDashboard from "../dashboard/HRDashboard";

// import UnitHeadDashboard from '../components/UnitHeadDashboard';
// import FacilitiesDashboard from '../components/FacilitiesDashboard';
// import AdminDashboard from '../components/AdminDashboard';

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  if (!user) return null;

  // One route (/dashboard), five different views.
  // The role from Zustand decides which component renders.
  switch (user.role) {
    case "employee":
      return <EmployeeDashboard user={user} />;
    case "hr":
      return <HRDashboard user={user} />;
    // case 'unit_head':    return <UnitHeadDashboard user={user} />;
    // case 'facilities':   return <FacilitiesDashboard user={user} />;
    // case 'system_admin': return <AdminDashboard user={user} />;
  }
}
