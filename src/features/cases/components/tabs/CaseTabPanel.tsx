import type { Case } from "../../../shared/types";
import CaseCorrespondence from "../CaseCorrespondence";
import AuditTrail from "./audit/AuditTrail";
import CaseDetails from "./details/CaseDetails";

interface Props {
  caseData: Case;
  activeTab: "details" | "correspondence" | "audit";
}

// CaseTabPanel.tsx — pass the right props to CaseCorrespondence
export default function CaseTabPanel({ caseData, activeTab }: Props) {
  switch (activeTab) {
    case "details":
      return <CaseDetails caseData={caseData} />;

    case "correspondence":
      return (
        <CaseCorrespondence
          messages={caseData.messages ?? []}
          status={caseData.status}
          onSendMessage={(msg) => {
            // TODO: wire this to your actual send handler / state update
            console.log("send:", msg);
          }}
        />
      );

    case "audit":
      return <AuditTrail caseData={caseData} />;

    default:
      return null;
  }
}
