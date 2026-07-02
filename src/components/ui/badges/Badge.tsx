import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
