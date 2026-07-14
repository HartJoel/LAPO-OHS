import { useState } from "react";
import CaseTrackerSearchCard from "../components/CaseTrackerSearchCard";
import PageHeader from "../components/stages/PageHeader";
import { LockIcon } from "lucide-react";
import CaseTrackerHeader from "../components/CaseTrackerHeader";
import type { Case } from "../../dashboard/employee/pages/EmployeeDashboard";
import CaseStatusTimeline from "../components/CaseStatusTimeline";
import LoggedStage from "../components/stages/LoggedStage";
import UnderReviewStage from "../components/stages/UnderReviewStage";
import InvestigatingStage from "../components/stages/InvestigatingStage";
import ResolvedStage from "../components/stages/ResolvedStage";
import ClosedStage from "../components/stages/ClosedStage";

const LAPO_GREEN = "#22C55E";

const SAMPLE_TOKENS = ["AX7K-2P9Q-R3ST"];

const MOCK_CASES: Case[] = [
  {
    token: "AX7K-2P9Q-R3ST",
    id: "CASE-2026-001",
    title: "Ergonomic issue reported", // add required field
    category: "Health & Ergonomics",
    branch: "Benin Branch",
    location: "Office Floor 2",
    status: "Investigating",
    severity: "medium",
    type: "health",
  },
];

function AnonymousTrackerPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<Case | undefined>();

  const [sla, setSla] = useState<{
    label: string;
    color: "red" | "amber" | "green" | "gray";
  }>();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      const foundCase = MOCK_CASES.find((c) => c.token === token.trim());

      setResult(foundCase);

      setSearched(true);

      if (foundCase) {
        setSla({
          label: "2 days remaining",
          color: "green",
        });
      } else {
        setSla(undefined);
      }

      setLoading(false);
    }, 800); // simulate API delay
  };

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

          <CaseTrackerSearchCard
            token={token}
            loading={loading}
            sampleTokens={SAMPLE_TOKENS}
            onTokenChange={setToken}
            onSearch={handleSearch}
          />

          <CaseTrackerHeader
            searched={searched}
            loading={loading}
            token={token}
            result={result}
            sla={sla}
          />

          {result && (
            <>
              <CaseStatusTimeline currentStatus={result.status} />

              {result.status === "Logged" && <LoggedStage />}

              {result.status === "Under Review" && <UnderReviewStage />}

              {result.status === "Investigating" && <InvestigatingStage />}

              {result.status === "Resolved" && <ResolvedStage />}

              {result.status === "Closed" && <ClosedStage />}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AnonymousTrackerPage;
