// LeftPanel.tsx
import { Shield } from "lucide-react";

const LAPO_ORANGE = "#EC8020";
const LAPO_GREEN = "#009D4C";

const FEATURES = [
  { icon: "🛡️", title: "Confidential Reporting", desc: "Anonymous submission with zero identity capture" },
  { icon: "⚡", title: "Automated Routing", desc: "Reports routed instantly to the right team" },
  { icon: "📊", title: "SLA Tracking", desc: "Real-time case monitoring and escalation" },
];

export function LeftPanel() {
  return (
    <div
      className="hidden lg:flex flex-col justify-between w-[480px] flex-shrink-0 p-10 relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, #0F1E2E 0%, #162437 60%, #1A3A28 100%)` }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ background: LAPO_ORANGE, transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ background: LAPO_GREEN, transform: "translate(-30%, 30%)" }} />

      <div className="relative z-10">
        {/* Logo Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${LAPO_ORANGE}, ${LAPO_GREEN})` }}>
            <Shield size={24} color="white" />
          </div>
          <div>
            <div className="text-white text-xl font-bold tracking-wide">LAPO</div>
            <div className="text-white/40 text-xs font-medium tracking-widest uppercase">Microfinance Bank</div>
          </div>
        </div>

        {/* Content Heading */}
        <div>
          <h1 className="text-white mb-4 text-[28px] font-bold leading-[1.3]">
            Occupational Health, Safety & Workplace Conduct
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            A secure, centralized platform for reporting and resolving workplace health, safety, and conduct concerns across all LAPO branches and units.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-10 space-y-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
              <span className="text-xl" role="img" aria-label={f.title}>{f.icon}</span>
              <div>
                <div className="text-white text-sm font-semibold">{f.title}</div>
                <div className="text-white/50 text-xs mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-white/30 text-xs">
        © {new Date().getFullYear()} LAPO Microfinance Bank · OHS-WCMS v1.0
      </div>
    </div>
  );
}