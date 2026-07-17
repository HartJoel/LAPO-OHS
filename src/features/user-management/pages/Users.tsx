import StatsGrid from "../components/cards/StatsGrid";
import { mockUserStats } from "../data/mockUserStats";

function Users() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1
          className="text-gray-900 mb-1"
          style={{ fontSize: "22px", fontWeight: 700 }}
        >
          User Management
        </h1>
        <p className="text-gray-500 text-sm">
          Manage LAPO OHS-WCMS user accounts, roles and access
        </p>
      </div>

      <StatsGrid stats={mockUserStats} />
    </div>
  );
}

export default Users;
