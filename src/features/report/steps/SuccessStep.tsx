import { ShieldCheck } from "lucide-react";

function SuccessStep() {
  return (
    <div className="mx-auto max-w-205 bg-[#F8F4EE] px-6 py-14 text-center">
      <ShieldCheck className="mx-auto mb-4 text-green-700" size={40} />
      <h2 className="mb-2 text-[15px] font-bold text-stone-900">
        Report submitted
      </h2>
      <p className="mx-auto max-w-md text-[13px] leading-relaxed text-stone-600">
        Thank you for speaking up. Your report has been logged and routed to
        the relevant department. You'll be notified of any updates if you
        did not report anonymously.
      </p>
    </div>
  );
}

export default SuccessStep;