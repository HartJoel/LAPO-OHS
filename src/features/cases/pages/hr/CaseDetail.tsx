import { ChevronLeft } from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import HeaderCard from "../../components/card/HeaderCard";
import { hrcases } from "../../mockCases";
import CaseActionPanel from "../../components/CaseActionPanel";
import CaseTabs from "../../components/tabs/CaseTabs";
import { useState } from "react";
import CaseTabPanel from "../../components/tabs/CaseTabPanel";

function CaseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<
    "details" | "correspondence" | "audit"
  >("details");

  const selectedCase = hrcases.find((c) => c.id === id);

  if (!selectedCase) return <div>Case not found</div>;
  return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate("/cases")}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          <ChevronLeft size={16} /> Back to Case Management
        </button>

        <HeaderCard caseData={selectedCase} />

        <CaseActionPanel caseData={selectedCase} />

        <CaseTabs activeTab={activeTab} onChange={setActiveTab} />

        <CaseTabPanel activeTab={activeTab} caseData={selectedCase} />
      </div>
    </>
  );
}

export default CaseDetail;
