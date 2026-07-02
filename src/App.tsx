import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import { LoginPage } from "./features/auth";

import DashboardPage from "./features/dashboard/DashboardPage";
import AuthLayout from "./components/layout/AuthLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        {/* Protected App */}
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Future pages */}
          {/* <Route path="/employees" element={<EmployeesPage />} /> */}
          {/* <Route path="/reports" element={<ReportsPage />} /> */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
