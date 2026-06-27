// routes/RoleRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

interface RoleRouteProps {
  allowedRoles: string[];
}

const RoleRoute = ({ allowedRoles }: RoleRouteProps) => {
  // Replace this with your actual global user data hook
  const { user } = { user: { role: "admin" } };

  // Block users without proper access levels
  const hasAccess = user && allowedRoles.includes(user.role);

  return hasAccess ? <Outlet /> : <Navigate to="/" replace />;
};

export default RoleRoute;
