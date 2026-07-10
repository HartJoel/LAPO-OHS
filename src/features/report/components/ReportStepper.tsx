interface Step {
  id: number;
  title: string;
}

interface ReportStepperProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, title: "Category" },
  { id: 2, title: "Details" },
  { id: 3, title: "Review" },
  { id: 4, title: "Submit" },
];

export default function ReportStepper({ currentStep }: ReportStepperProps) {
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="bg-[#F8F4EE] border-b border-[#6446141F]">
      {/* Progress */}
      <div className="h-[3px] bg-[#EC802222]">
        <div
          className="h-full bg-[#EC8020] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center px-6 py-3">
        {steps.map((step, index) => {
          const active = step.id === currentStep;
          const completed = step.id < currentStep;

          return (
            <div
              key={step.id}
              className={`flex items-center ${
                index !== steps.length - 1 ? "flex-1" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`
                    w-5 h-5 rounded-full flex items-center justify-center
                    text-[10px] font-bold
                         ${
                           completed
                             ? "bg-[#009D4C] text-white"
                             : active
                               ? "bg-[#EC8020] text-white"
                               : "bg-[#6446141F] text-[#6B6257]"
                         }
                          `}
                >
                  {completed ? "✓" : step.id}
                </div>

                <span
                  className={`text-xs ${
                    completed
                      ? "font-normal text-[#009D4C]"
                      : active
                        ? "font-semibold text-[#EC8020]"
                        : "text-[#6B6257]"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div className="flex-1 h-px bg-[#6446141F] mx-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
