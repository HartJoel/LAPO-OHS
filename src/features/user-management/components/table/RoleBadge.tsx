import type { User } from "../../types/user";

const ROLE_STYLES: Record<User["role"], { label: string; className: string }> = {
  employee: {
    label: "Employee",
    className: "bg-gray-100 text-gray-700",
  },
  hr: {
    label: "HR",
    className: "bg-orange-100 text-orange-700",
  },
  unit_head: {
    label: "Unit Head",
    className: "bg-blue-100 text-blue-700",
  },
  facilities: {
    label: "Facilities",
    className: "bg-purple-100 text-purple-700",
  },
  system_admin: {
    label: "System Admin",
    className: "bg-green-100 text-green-700",
  },
};

interface Props {
  role: User["role"];
}

export default function RoleBadge({ role }: Props) {
  const style = ROLE_STYLES[role] ?? {
    label: role,
    className: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${style.className}`}
    >
      {style.label}
    </span>
  );
}