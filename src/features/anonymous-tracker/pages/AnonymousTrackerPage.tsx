import PageHeader from "../components/PageHeader";
import { LockIcon } from "lucide-react";

const LAPO_GREEN = "#22C55E";

function AnonymousTrackerPage() {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: "#F7F8FA" }}>
        <PageHeader title="LAPO OHS-WCMS" subtitle="Anonymous Case Tracker" />

        <div className="max-w-3xl mx-auto px-6 py-10">
          {/* Privacy Notice */}
          <div
            className="flex items-start gap-3 p-4 rounded-xl mb-8 border"
            style={{ backgroundColor: "#F0FBF5", borderColor: "#BBF7D0" }}
          >
            <LockIcon
              size={18}
              className="flex-shrink-0 mt-0.5"
              style={{ color: LAPO_GREEN }}
            />
            <div>
              <div className="text-sm font-semibold text-green-900 mb-1">
                Your Privacy is Protected
              </div>
              <div className="text-sm text-green-700 leading-relaxed">
                This tracker is accessible without login. No IP address, device
                ID, or browser data is collected. Your reference token is the
                only link to your case — it was generated at submission and is
                not traceable to you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnonymousTrackerPage;
