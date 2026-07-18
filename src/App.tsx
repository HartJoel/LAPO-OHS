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
import SubmitReport from "./features/report/pages";
import {Cases, MyCases, MyCaseDetail, CaseDetail} from "./features/cases"

import AnonymousTrackerPage from "./features/anonymous-tracker/pages/AnonymousTrackerPage";

import Users from "./features/user-management/pages/Users";

import SystemAnalytis from "./features/analytics/pages/SystemAnalytis";

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
          <Route path="/report" element={<SubmitReport />} />
          <Route path="/my-cases" element={<MyCases />} />
          <Route path="/my-case/:id" element={<MyCaseDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<SystemAnalytis />} />
        </Route>

        <Route path="/track" element={<AnonymousTrackerPage />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
