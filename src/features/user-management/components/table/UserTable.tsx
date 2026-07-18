import { Users } from "lucide-react";
import type { User } from "../../types/user";
import UserTableRow from "./UserTableRow";

interface Props {
  users: User[];
  selectedUser?: string | null;
  onSelect: (id: string) => void;
}

const headers = ["User", "Role", "Unit", "Branch", "Cases", "Status", ""];

export default function UserTable({ users, selectedUser, onSelect }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {users.length} {users.length === 1 ? "User" : "Users"}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  selected={selectedUser === user.id}
                  onClick={() => onSelect(user.id)}
                />
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} className="px-6 py-16">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                      <Users size={28} className="text-orange-500" />
                    </div>

                    <h3 className="text-base font-semibold text-gray-900">
                      No users found
                    </h3>

                    <p className="mt-1 max-w-sm text-sm text-gray-500">
                      We couldn't find any users matching your search or filter.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
