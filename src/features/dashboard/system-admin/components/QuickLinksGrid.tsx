import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { hoverAnimation } from "../../shared/animations";

interface QuickLink {
  label: string;
  desc: string;
  path: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

interface QuickLinksGridProps {
  links: QuickLink[];
  onNavigate: (path: string) => void;
}

export default function QuickLinksGrid({
  links,
  onNavigate,
}: QuickLinksGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-5 md:grid-cols-3 my-5">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <motion.button
            {...hoverAnimation}
            key={link.path}
            onClick={() => onNavigate(link.path)}
            className="group rounded-xl border border-gray-100 bg-white p-4 text-left shadow-sm transition-all hover:border-gray-200 hover:shadow-md"
          >
            <div
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: link.bg }}
            >
              <Icon size={20} style={{ color: link.color }} />
            </div>

            <div className="mb-1 text-sm font-semibold text-gray-900">
              {link.label}
            </div>

            <div className="text-xs text-gray-400">{link.desc}</div>

            <div
              className="mt-3 flex items-center gap-1 text-xs font-medium"
              style={{ color: link.color }}
            >
              Open
              <ChevronRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
