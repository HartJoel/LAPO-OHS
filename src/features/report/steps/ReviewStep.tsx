import SelectedCategoryBadge from "./../components/SelectedCategoryBadge";
import type { SubmitReportForm } from "../useSubmitReportForm";

interface ReviewStepProps {
  form: SubmitReportForm;
  onSubmit: () => void;
}



function ReviewStep({ form, onSubmit }: ReviewStepProps) {
  if (!form.selectedCategory) return null;

  return (
    <div className="mx-auto max-w-[700px]  p-6">
      
      {/* Header */}
      <div className="mb-5">
        <h2 className="mb-1 text-[18px] font-bold text-stone-900">
          Review your report
        </h2>

        <p className="text-[13px] text-stone-600">
          Check all details carefully before submitting. Click{" "}
          <strong>Edit</strong> to make changes.
        </p>
      </div>

      {/* Incident Type & Privacy */}
      <div className="mb-[14px] overflow-hidden rounded-[13px] border border-stone-300 bg-[#FDFAF6]">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-stone-300 px-[18px] py-3">
          <span className="text-[14px] font-bold text-stone-900">
            Incident type &amp; privacy
          </span>

          <button
            type="button"
            onClick={form.goBack}
            className="rounded-[7px] border border-stone-300 px-[10px] py-1 text-[12px] font-medium text-[#EC8020] transition-colors hover:bg-orange-50"
          >
            Edit
          </button>
        </div>

        {/* Card Body */}
        <div className="px-[18px] py-4">
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
            <div>
              <p className="mb-[3px] text-[11px] text-stone-500">
                Category group
              </p>

              <p className="text-[13px] font-semibold text-stone-900">
                {form.selectedCategory?.category}
              </p>
            </div>

            <div>
              <p className="mb-[3px] text-[11px] text-stone-500">
                Incident type
              </p>

              <p className="text-[13px] font-semibold text-stone-900">
                {form.selectedCategory?.title}
              </p>
            </div>

            <div>
              <p className="mb-[3px] text-[11px] text-stone-500">Severity</p>

              <p className="text-[13px] font-semibold text-stone-900">
                {form.severity}
              </p>
            </div>

            <div>
              <p className="mb-[3px] text-[11px] text-stone-500">
                Submission mode
              </p>

              <p className="text-[13px] font-semibold text-stone-900">
                {form.anonymous ? "Anonymous" : `Named —`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Time */}
      <div className="mb-[14px] overflow-hidden rounded-[13px] border border-stone-300 bg-[#FDFAF6]">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-stone-300 px-[18px] py-3">
          <span className="text-[14px] font-bold text-stone-900">
            Location &amp; time
          </span>

          <button
            type="button"
            onClick={form.goBack}
            className="rounded-[7px] border border-stone-300 px-[10px] py-1 text-[12px] font-medium text-[#EC8020] transition-colors hover:bg-orange-50"
          >
            Edit
          </button>
        </div>

        {/* Card Body */}
        <div className="px-[18px] py-4">
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
            <div>
              <p className="mb-1 text-[11px] text-stone-500">Branch</p>
              <p className="text-[13px] font-semibold text-stone-900">
                {form.branch}
              </p>
            </div>

            <div>
              <p className="mb-1 text-[11px] text-stone-500">
                Area / Department
              </p>
              <p className="text-[13px] font-semibold text-stone-900">
                {form.branch}
              </p>
            </div>

            <div>
              <p className="mb-1 text-[11px] text-stone-500">
                Date of incident
              </p>
              <p className="text-[13px] font-semibold text-stone-900">
                {form.incidentDate}
              </p>
            </div>

            <div>
              <p className="mb-1 text-[11px] text-stone-500">Time</p>
              <p className="text-[13px] font-semibold text-stone-900">
                {form.incidentTime || "Not provided"}
              </p>
            </div>
          </div>

          <div className="mt-[14px] grid grid-cols-1 gap-[14px] md:grid-cols-2">
            <div>
              <p className="mb-1 text-[11px] text-stone-500">
                Injury / Health impact
              </p>

              <p
                className={`text-[13px] font-semibold ${
                  form.hasInjury ? "text-red-600" : "text-stone-900"
                }`}
              >
                {form.hasInjury
                  ? `Yes — ${form.affectedBodyArea}`
                  : "No — reporting a hazard or risk"}
              </p>
            </div>

            <div>
              <p className="mb-1 text-[11px] text-stone-500">Recurring issue</p>

              <p className="text-[13px] font-semibold text-stone-900">
                {form.isRecurring
                  ? "Yes — ongoing / recurring"
                  : "No — first occurrence"}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="mb-1 text-[11px] text-stone-500">Witnesses</p>

              <p className="text-[13px] font-semibold text-stone-900">
                {form.witnesses || "None"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Description */}
      <div className="mb-[14px] overflow-hidden rounded-[13px] border border-stone-300 bg-[#FDFAF6]">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-stone-300 px-[18px] py-3">
          <span className="text-[14px] font-bold text-stone-900">
            Incident description
          </span>

          <button
            type="button"
            onClick={form.goBack}
            className="rounded-[7px] border border-stone-300 px-[10px] py-1 text-[12px] font-medium text-[#EC8020] transition-colors hover:bg-orange-50"
          >
            Edit
          </button>
        </div>

        {/* Card Body */}
        <div className="px-[18px] py-4">
          <div className="rounded-[7px] bg-[#F8F4EE] px-[13px] py-[11px] text-[13px] leading-relaxed text-stone-900">
            {form.description}
          </div>
        </div>
      </div>

      {/* Routing Information */}
      <div className="mb-[14px] flex items-start gap-3 rounded-[9px] border border-stone-300 bg-[#F8F4EE] px-4 py-3">
        <span className="shrink-0 text-lg">📡</span>

        <div className="flex-1">
          <h3 className="mb-[6px] text-[13px] font-semibold text-stone-900">
            This report will be routed to
          </h3>

          <div className="mb-[6px] flex flex-wrap gap-[6px]">
            <span className="rounded-full bg-orange-100 px-[9px] py-[3px] text-[11px] font-semibold text-[#7A3E0A]">
              {form.selectedCategory.primaryDepartment}
            </span>

            <span className="rounded-full bg-orange-100 px-[9px] py-[3px] text-[11px] font-semibold text-[#7A3E0A]">
              {form.selectedCategory.secondaryDepartment || null}
            </span>
          </div>

          <p className="text-[11px] text-stone-500">
            Based on incident category and severity
          </p>
        </div>
      </div>

      {/* Important Notice */}
      <div className="mb-4 flex items-start gap-[10px] rounded-[9px] border border-amber-500/20 bg-amber-50 px-[15px] py-3">
        <span className="shrink-0 text-[15px]">📋</span>

        <p className="text-[12px] leading-6 text-amber-900">
          <strong>Important:</strong> When the handler resolves this case, you
          will receive a notification asking you to{" "}
          <strong>confirm or dispute the resolution</strong>. The case cannot be
          officially closed until you respond.
        </p>
      </div>

      {/* Confirmation */}
      <div className="mb-[18px] flex items-start gap-[10px] rounded-[9px] border border-green-600/20 bg-green-100 px-[14px] py-[11px]">
        <span className="shrink-0 text-base">🛡️</span>

        <p className="text-[12px] leading-6 text-green-900">
          I confirm that the information provided is accurate to the best of my
          knowledge and that I am submitting this report in good faith under
          LAPO's Anti-Retaliation Policy.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={form.goBack}
          className="rounded-lg border border-stone-300 bg-[#FDFAF6] px-[14px] py-[7px] text-[13px] font-medium text-stone-900 transition-colors hover:bg-stone-100"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="rounded-lg bg-[#EC8020] px-[26px] py-[11px] text-[14px] font-bold text-white transition-colors hover:bg-[#d86f18]"
        >
          ✓ Submit incident report
        </button>
      </div>
    </div>
  );
}

export default ReviewStep;
