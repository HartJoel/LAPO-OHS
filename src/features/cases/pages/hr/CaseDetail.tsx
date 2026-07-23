import { ChevronLeft } from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import HeaderCard from "../../components/card/HeaderCard";
import { hrcases } from "../../mockCases";
import CaseActionPanel from "../../components/panels/CaseActionPanel";
import CaseTabs from "../../components/tabs/CaseTabs";
import { useState } from "react";
import CaseTabPanel from "../../components/tabs/CaseTabPanel";
import UnitHeadActionPanel from "../../components/panels/UnitHeadActionPanel";
import { useAuthStore } from "../../../../store/authStore";
import SustainabilityActionPanel from "../../components/panels/SustainabilityActionPanel";

function CaseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<
    "details" | "correspondence" | "audit"
  >("details");

  const { user } = useAuthStore();

  const selectedCase = hrcases.find((c) => c.id === id);

  if (!selectedCase) return <div>Case not found</div>;

  const incidentManagers = [
    {
      id: "1",
      name: "John Doe",
      unit: "Health & Ergonomics",
    },
    {
      id: "2",
      name: "Jane Smith",
      unit: "Health & Ergonomics",
    },
  ];

  const handleAssign = (managerId: string) => {
    console.log("Assigned to", managerId);
  };

  const handleEscalate = (reason: string) => {
    console.log(reason);
  };

  const handleNote = (note: string) => {
    console.log(note);
  };

  const role = user?.role;

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

        {/* Role-based Action Panel */}

        {role === "hr" && <CaseActionPanel caseData={selectedCase} />}

        {role === "unit_head" && (
          <UnitHeadActionPanel
            caseData={selectedCase}
            incidentManagers={incidentManagers}
            onAssign={handleAssign}
            onEscalate={handleEscalate}
            onAddNote={handleNote}
            workingDays={74}
            isOverdue={true}
          />
        )}

        {role === "sustainability" && (
          <SustainabilityActionPanel caseData={selectedCase} />
        )}

        <CaseTabs activeTab={activeTab} onChange={setActiveTab} />

        <CaseTabPanel activeTab={activeTab} caseData={selectedCase} />
      </div>
    </>
  );
}

export default CaseDetail;
