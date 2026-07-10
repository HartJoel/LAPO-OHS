import SelectedCategoryBadge from "./../components/SelectedCategoryBadge";
import YesNoToggle from "../fields/YesNoToggle";
import AttachmentsField from "../fields/AttachmentsField";
import PrivacyNotice from "../fields/PrivacyNotice";
import {
  AREAS,
  BRANCHES,
  INJURY_BODY_PARTS,
  SEVERITY_OPTIONS,
  getMaxIncidentDate,
} from "../constants";
import { MIN_DESCRIPTION_LENGTH } from "../types";
import type { SubmitReportForm } from "../useSubmitReportForm";

interface DetailsStepProps {
  form: SubmitReportForm;
}

function DetailsStep({ form }: DetailsStepProps) {
  if (!form.selectedCategory) return null;

  return (
    <div className="mx-auto max-w-205 bg-[#F8F4EE] px-6 py-6">
      <SelectedCategoryBadge category={form.selectedCategory} />
      <h2 className="mb-[18px] text-[15px] font-bold text-stone-900">
        Tell us what happened
      </h2>

      {/* Branch + Area */}
      <div className="mb-[14px] grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
            Branch / Location <span className="text-[#EC8020]">*</span>
          </label>
          <select
            value={form.branch}
            onChange={(e) => form.setBranch(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
          >
            <option value="">Select branch</option>
            {BRANCHES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
            Area / Department <span className="text-[#EC8020]">*</span>
          </label>
          <select
            value={form.area}
            onChange={(e) => form.setArea(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
          >
            <option value="">Select area</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date + Time */}
      <div className="mb-[14px] grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
            Date of Incident <span className="text-[#EC8020]">*</span>
          </label>
          <input
            type="date"
            value={form.incidentDate}
            onChange={(e) => form.setIncidentDate(e.target.value)}
            max={getMaxIncidentDate()}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
          />
        </div>

        <div>
          <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
            Time{" "}
            <span className="text-[11px] font-normal text-stone-500">
              (approximate)
            </span>
          </label>
          <input
            type="time"
            value={form.incidentTime}
            onChange={(e) => form.setIncidentTime(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
          />
        </div>
      </div>

      {/* Severity */}
      <div className="mb-[14px]">
        <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
          Severity Level <span className="text-[#EC8020]">*</span>
        </label>
        <select
          value={form.severity}
          onChange={(e) =>
            form.setSeverity(e.target.value as typeof form.severity)
          }
          className="w-full rounded-lg border border-[#EC8020] bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none appearance-none"
        >
          {SEVERITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Injury */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-semibold text-stone-900">
          Has an injury or health impact occurred?
          <span className="text-[#EC8020]">*</span>
        </label>
        <YesNoToggle
          variant="emphasis"
          value={form.hasInjury}
          onChange={form.setHasInjury}
          yesLabel="Yes — injury / impact occurred"
          noLabel="No — reporting a hazard or risk"
        />
      </div>

      {form.hasInjury && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-semibold text-stone-900">
            Body Part Affected
            <span className="text-[#EC8020]">*</span>
          </label>
          <select
            value={form.affectedBodyArea}
            onChange={(e) => form.setAffectedBodyArea(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:border-[#EC8020] focus:outline-none"
          >
            <option value="">Select body part</option>
            {INJURY_BODY_PARTS.map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Recurring */}
      <div className="mb-[14px]">
        <label className="mb-2 block text-[13px] font-semibold text-stone-900">
          Is this a recurring issue?
        </label>
        <YesNoToggle
          value={form.isRecurring}
          onChange={form.setIsRecurring}
          yesLabel="Yes — ongoing / recurring"
          noLabel="No — first occurrence"
        />
      </div>

      {/* Description */}
      <div className="mb-[14px]">
        <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
          Describe the incident <span className="text-[#EC8020]">*</span>{" "}
          <span className="text-[11px] font-normal text-stone-500">
            (minimum {MIN_DESCRIPTION_LENGTH} characters)
          </span>
        </label>
        <textarea
          value={form.description}
          onChange={(e) => form.setDescription(e.target.value)}
          rows={5}
          placeholder="Describe clearly what happened, when, where, who was involved, and any prior reports of this issue. The more detail you provide, the faster the handler can act."
          className="w-full resize-y rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] leading-relaxed text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
        />
        <div
          className={`mt-1 text-right text-[11px] ${
            form.description.length >= MIN_DESCRIPTION_LENGTH
              ? "text-green-600"
              : "text-stone-500"
          }`}
        >
          {form.description.length} / {MIN_DESCRIPTION_LENGTH} minimum
          {form.description.length >= MIN_DESCRIPTION_LENGTH && " ✓"}
        </div>
      </div>

      {/* Witnesses */}
      <div className="mb-[14px]">
        <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
          Were there any witnesses?{" "}
          <span className="text-[11px] font-normal text-stone-500">
            optional
          </span>
        </label>
        <input
          type="text"
          value={form.witnesses}
          onChange={(e) => form.setWitnesses(e.target.value)}
          placeholder="Names or initials (leave blank if reporting anonymously or no witnesses)"
          className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
        />
      </div>

      <AttachmentsField
        fileInputRef={form.fileInputRef}
        attachments={form.attachments}
        onFilesSelected={form.addAttachments}
        onRemove={form.removeAttachment}
      />

      <PrivacyNotice />

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={form.goBack}
          className="rounded-lg border border-stone-300 bg-[#F8F4EE] px-[14px] py-[7px] text-[13px] font-medium text-stone-900 transition-colors hover:bg-stone-100"
        >
          ← Back
        </button>

        <button
          type="button"
          disabled={!form.canProceedFromDetails}
          onClick={form.goNext}
          className="rounded-lg bg-[#EC8020] px-[22px] py-[9px] text-[13px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Review &amp; Submit →
        </button>
      </div>
    </div>
  );
}

export default DetailsStep;