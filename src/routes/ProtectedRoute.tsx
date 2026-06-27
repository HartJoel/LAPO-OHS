// routes/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  
  // Replace this with your actual global auth state hook (e.g., Redux, Context, Zustand)
  const { isAuthenticated, isLoading } = { isAuthenticated: true, isLoading: false };

  if (isLoading) {
    return <div>Loading authentication state...</div>;
  }

  // Send unauthenticated users back to login screen
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
