import { Shield } from "lucide-react";

interface AnonymousToggleProps {
  anonymous: boolean;
  onToggle: () => void;
}

export default function AnonymousToggle({
  anonymous,
  onToggle,
}: AnonymousToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full mb-6 flex items-start gap-3 rounded-xl border border-gray-200 bg-[#F8F4EE] p-4 transition-all hover:border-orange-300 hover:shadow-sm"
    >
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
        <Shield className="h-5 w-5 text-green-600" />
      </div>

      <div className="flex-1 text-left">
        <h3 className="text-sm font-semibold text-gray-900">
          Submit anonymously
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-600">
          Your identity will not be linked to this report. A one-time
          reference token will be issued for tracking.
        </p>
      </div>

      {/* Toggle */}
      <div
        className={`relative mt-1 h-5 w-9 rounded-full transition-colors ${
          anonymous ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
            anonymous ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </div>
    </button>
  );
}