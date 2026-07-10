import { ShieldCheck } from "lucide-react";

function PrivacyNotice() {
  return (
    <div className="mb-[18px] flex items-start gap-[10px] rounded-[9px] border border-green-600/20 bg-green-100 px-[14px] py-[11px]">
      <ShieldCheck size={18} className="mt-0.5 shrink-0 text-green-700" />
      <p className="text-[12px] leading-6 text-green-900">
        LAPO strictly prohibits retaliation against anyone who raises a
        safety or conduct concern in good faith. All reports are handled
        confidentially in line with our Anti-Retaliation Policy.
      </p>
    </div>
  );
}

export default PrivacyNotice;