import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import { LoginPage } from "./features/auth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppShell />}>
        <Route index element={<LoginPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
