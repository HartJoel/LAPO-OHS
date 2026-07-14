interface SubmissionSuccessProps {
  referenceNumber: string;
  submittedDate: string;
  onDashboard: () => void;
  onNewReport: () => void;
}

const nextSteps = [
  {
    icon: "👀",
    title: "Case assigned",
    description:
      "A designated handler will review your report and acknowledge receipt, usually within your SLA window.",
  },
  {
    icon: "🔍",
    title: "Investigation begins",
    description:
      "The handler will investigate, correspond with you through the secure message thread, and take appropriate action.",
  },
  {
    icon: "✅",
    title: "Resolution & your confirmation",
    description:
      "When resolved, you will be asked to confirm the resolution. The case cannot close without your attestation.",
  },
];

export const SubmissionSuccess = ({
  referenceNumber,
  submittedDate,
  onDashboard,
  onNewReport,
}: SubmissionSuccessProps) => {
    
  return (
    <div className="mx-auto max-w-[580px] px-6 py-[22px]">
      {/* Reference Number */}
      <div className="mb-[14px] rounded-[13px] border border-[#6446141F] bg-[#FDFAF6] p-[22px] text-center">
        <p className="mb-[6px] text-[11px] uppercase tracking-[0.05em] text-[#6B6257]">
          Your case reference number
        </p>

        <h2 className="mb-[10px] text-[26px] font-bold tracking-[0.06em] text-[#EC8020]">
          {referenceNumber}
        </h2>

        <p className="text-[12px] leading-[1.5] text-[#6B6257]">
          Submitted {submittedDate} · Track from your dashboard at any time.
        </p>
      </div>

      {/* Next Steps */}
      <div className="mb-[14px] overflow-hidden rounded-[13px] border border-[#6446141F] bg-[#FDFAF6]">
        <div className="border-b border-[#6446141F] px-[18px] py-3">
          <h3 className="text-sm font-bold text-[#1C1A17]">
            What happens next
          </h3>
        </div>

        {nextSteps.map((step, index) => (
          <div
            key={step.title}
            className={`flex items-start gap-[10px] px-[18px] py-[11px] ${
              index !== nextSteps.length - 1
                ? "border-b border-[#6446141F]"
                : ""
            }`}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#FEF0E3] text-sm">
              {step.icon}
            </div>

            <div>
              <h4 className="mb-[2px] text-xs font-semibold text-[#1C1A17]">
                {step.title}
              </h4>

              <p className="text-[11px] leading-relaxed text-[#6B6257]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-[10px]">
        <button
          onClick={onDashboard}
          className="rounded-lg bg-[#EC8020] py-[11px] text-[13px] font-semibold text-white transition hover:opacity-90"
        >
          Go to my dashboard
        </button>

        <button
          onClick={onNewReport}
          className="rounded-lg border border-[#6446141F] bg-[#FDFAF6] py-[11px] text-[13px] font-medium text-[#1C1A17] transition hover:bg-[#F8F4EE]"
        >
          Submit another report
        </button>
      </div>
    </div>
  );
};