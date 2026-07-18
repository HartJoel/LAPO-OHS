import { useMemo, useState } from "react";
import StatsGrid from "../components/cards/StatsGrid";
import FilterTabs from "../components/filters/FilterTabs";
import { mockRoleFilters } from "../data/mockRoleFilters";
import { mockUserStats } from "../data/mockUserStats";
import SearchInput from "../components/inputs/SearchInput";
import UserTable from "../components/table/UserTable";
import { mockUsers } from "../data/mockUsers";

function Users() {
  const [roleFilter, setRoleFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return mockUsers.filter((user) => {
      const matchesRole = roleFilter === "all" || user.role === roleFilter;

      const matchesSearch =
        query.length === 0 ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.branch.toLowerCase().includes(query) ||
        user.unit.toLowerCase().includes(query);

      return matchesRole && matchesSearch;
    });
  }, [roleFilter, search]);

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

      <FilterTabs
        tabs={mockRoleFilters}
        activeTab={roleFilter}
        onChange={setRoleFilter}
      />

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search by name, email, branch or unit..."
      />

      <UserTable
        users={filteredUsers}
        selectedUser={selectedUser}
        onSelect={setSelectedUser}
      />
    </div>
  );
}

export default Users;