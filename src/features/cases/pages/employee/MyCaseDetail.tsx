import { ChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import CaseHeaderCard from "../../components/card/CaseHeaderCard";
import {
  cases,
  description,
  mockAuditTrail,
  mockMessages,
} from "../../mockCases";

import CaseStatusTimeline from "../../../anonymous-tracker/components/CaseStatusTimeline";
import CaseAuditTrail from "../../components/CaseAuditTrail";
import CaseDescriptionCard from "../../components/card/CaseDescriptionCard";
import CaseCorrespondence from "../../components/CaseCorrespondence";

function MyCaseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedCase = cases.find((c) => c.id === id);

  if (!selectedCase) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Case not found.</h2>
      </div>
    );
  }

  const showDescription = [
    "Logged",
    "Under Review",
    "Investigating",
    "Resolved",
    "Closed",
  ].includes(selectedCase.status);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/my-cases")}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ChevronLeft size={16} />
        Back to My Cases
      </button>

      <CaseHeaderCard caseData={selectedCase} />

      <CaseStatusTimeline currentStatus={selectedCase.status} />

      <div className="grid md:grid-cols-2 gap-5 my-4">
        {showDescription && <CaseDescriptionCard caseData={description} />}

        <CaseCorrespondence
          messages={mockMessages}
          status={selectedCase.status}
          onSendMessage={(message) => {
            console.log(message);
          }}
        />
      </div>

      <CaseAuditTrail entries={mockAuditTrail} />
    </div>
  );
}

export default MyCaseDetail;
