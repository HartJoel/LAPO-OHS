import { Outlet } from "react-router-dom";

const AppShell = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
      {/* Dynamic Page Content Area */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppShell;
