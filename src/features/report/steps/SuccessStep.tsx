import { SubmissionSuccess } from "../components/SubmissionSuccess";
import { useNavigate } from "react-router-dom";
import type { SubmitReportForm } from "../useSubmitReportForm";

interface ReviewStepProps {
  form: SubmitReportForm;
}

function SuccessStep({ form }: ReviewStepProps) {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-[#FFE9D6] px-6 pt-11 pb-8 text-center">
        <div className="mx-auto mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#009D4C] text-[30px]">
          ✅
        </div>

        <h2 className="mb-[6px] text-[22px] font-bold ">
          Report submitted successfully
        </h2>

        <p className="mx-auto max-w-sm text-[13px] leading-[1.5] ">
          Your report has been logged and routed to the appropriate team, Amaka
        </p>
      </div>

      <SubmissionSuccess
        referenceNumber="OHS-2026-00482"
        submittedDate="11 July 2026"
        onDashboard={() => navigate("/dashboard")}
        onNewReport={form.resetForm}
      />
    </div>
  );
}

export default SuccessStep;
