const LAPO_GREEN = "#009D4C";
const LAPO_ORANGE = "#EC8020";

const TIMELINE = [
  "Logged",
  "Under Review",
  "Investigating",
  "Resolved",
  "Closed",
];

interface Props {
  currentStatus: string;
}

export default function CaseStatusTimeline({ currentStatus }: Props) {
  const currentIndex = TIMELINE.indexOf(currentStatus);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-6">
      <div className="text-sm font-semibold text-gray-900 mb-4">
        Case Progress
      </div>

      <div className="flex items-center">
        {TIMELINE.map((status, index) => {
          const done = index < currentIndex;
          const current = index === currentIndex;

          return (
            <div
              key={status}
              className="flex items-center flex-1 last:flex-none"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: current
                      ? LAPO_ORANGE
                      : done
                        ? LAPO_GREEN
                        : "#E5E7EB",

                    color: current || done ? "white" : "#9CA3AF",
                  }}
                >
                  {done ? "✓" : index + 1}
                </div>

                <div
                  className={`text-[10px] mt-1.5 text-center font-medium ${
                    current
                      ? "text-orange-600"
                      : done
                        ? "text-green-700"
                        : "text-gray-400"
                  }`}
                >
                  {status}
                </div>
              </div>

              {index < TIMELINE.length - 1 && (
                <div
                  className="flex-1 h-0.5 mx-1 mb-5"
                  style={{
                    backgroundColor: done ? LAPO_GREEN : "#E5E7EB",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
