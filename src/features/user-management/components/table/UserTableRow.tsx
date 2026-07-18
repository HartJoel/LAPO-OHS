import { CheckCircle2, MoreHorizontal, XCircle } from "lucide-react";

import RoleBadge from "./RoleBadge";
import type { User } from "../../types/user";

interface Props {
  user: User;
  selected: boolean;
  onClick: () => void;
}

export default function UserTableRow({
  user,
  selected,
  onClick,
}: Props) {
  return (
    <tr
      onClick={onClick}
      className={`
        cursor-pointer
        border-b
        border-gray-50
        transition-colors
        hover:bg-gray-50
        last:border-0
        ${selected ? "bg-orange-50" : ""}
      `}
    >
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
            {user.initials}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              {user.name}
            </p>

            <p className="text-xs text-gray-400">
              {user.email}
            </p>
          </div>
        </div>
      </td>

      <td className="px-5 py-3.5">
        <RoleBadge role={user.role} />
      </td>

      <td className="px-5 py-3.5 text-sm text-gray-600">
        {user.unit}
      </td>

      <td className="px-5 py-3.5 text-xs text-gray-500">
        {user.branch}
      </td>

      <td className="px-5 py-3.5">
        <div className="text-xs">
          <span className="font-semibold">
            {user.submittedCases}
          </span>
          <span className="text-gray-400"> submitted</span>

          {user.handledCases ? (
            <div>
              <span className="font-semibold">
                {user.handledCases}
              </span>
              <span className="text-gray-400"> handled</span>
            </div>
          ) : null}
        </div>
      </td>

      <td className="px-5 py-3.5">
        {user.status === "Active" ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
            <CheckCircle2 size={13} />
            Active
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
            <XCircle size={13} />
            Inactive
          </span>
        )}
      </td>

      <td className="px-5 py-3.5">
        <MoreHorizontal
          size={16}
          className="text-gray-400"
        />
      </td>
    </tr>
  );
}