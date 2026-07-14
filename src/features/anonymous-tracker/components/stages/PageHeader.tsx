import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

// ── Design tokens ──────────────────────────────────────────────────────────────
const LAPO_ORANGE = "#F97316";
const LAPO_GREEN = "#22C55E";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backTo?: string;
  backLabel?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backTo = "/",
  backLabel = "Back to Login",
}: PageHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${LAPO_ORANGE}, ${LAPO_GREEN})`,
            }}
          >
            <Shield size={18} color="white" />
          </div>

          <div>
            <h1 className="text-sm font-bold text-gray-900">{title}</h1>
            <p className="text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>

        <Link
          to={backTo}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
