import { useRef, useState } from "react";
import ReportStepper from "../components/ReportStepper";
import AnonymousToggle from "../components/AnonymousToggle";
import CategorySection, {
  type SelectedCategory,
} from "../components/CategorySection";
import {
  HeartPulse,
  Leaf,
  ShieldAlert,
  UserX,
  Lock,
  Scale,
  Handshake,
  Paperclip,
  X,
  ShieldCheck,
} from "lucide-react";
import SelectedCategoryBadge from "../components/SelectedCategoryBadge";

const reportCategories = [
  {
    id: "workplace-safety",
    title: "Workplace Safety",
    department: "General Services",
    icon: ShieldAlert,
    iconColor: "#DC2626",
    items: [
      {
        id: "fire-outbreak",
        title: "Fire outbreak",
        secondaryDepartment: "Sustainability Unit",
      },
      { id: "electrical-socket-fire", title: "Electrical socket fire" },
      { id: "no-fire-extinguisher", title: "No fire extinguisher" },
      { id: "expired-extinguisher", title: "Expired extinguisher" },
      { id: "wet-floor-electrocution", title: "Wet floor electrocution" },
      { id: "trailing-wires", title: "Trailing wires injury" },
      { id: "slips-trips-falls", title: "Slips, trips, and falls" },
      { id: "blocked-entry-exit", title: "Blocked entry/exit" },
      { id: "cluttered-walkways", title: "Cluttered walkways" },
      {
        id: "burn-injuries",
        title: "Burn injuries",
        secondaryDepartment: "People & Culture",
      },
      { id: "broken-chairs", title: "Broken chairs" },
      { id: "faulty-office-equipment", title: "Faulty office equipment" },
      { id: "burnt-work-equipment", title: "Burnt work equipment" },
      { id: "vehicle-fault", title: "Vehicle fault" },
      {
        id: "fieldwork-travel-accident",
        title: "Fieldwork travel accident",
        secondaryDepartment: "People & Culture",
      },
      { id: "chemical-spill", title: "Chemical spill" },
      { id: "harmful-weapon-injury", title: "Harmful weapon injury" },
      { id: "robbery-attack", title: "Robbery attack" },
      { id: "security-assault-incident", title: "Security assault incident" },
    ],
  },

  {
    id: "health-ergonomics",
    title: "Health & Ergonomics",
    department: "General Services",
    icon: HeartPulse,
    iconColor: "#059669",
    items: [
      {
        id: "no-first-aid-box",
        title: "No first aid box",
        secondaryDepartment: "People & Culture",
      },
      { id: "poor-office-ventilation", title: "Poor office ventilation" },
      { id: "air-pollution", title: "Air pollution" },
      { id: "congested-office-space", title: "Congested office space" },
      {
        id: "ergonomic-injury",
        title: "Ergonomic injury",
        secondaryDepartment: "People & Culture",
      },
      {
        id: "chair-related-body-pain",
        title: "Chair-related body pain",
        secondaryDepartment: "People & Culture",
      },
      { id: "computer-related-strain", title: "Computer-related strain" },
      {
        id: "workload-related-ailment",
        title: "Workload-related ailment",
        secondaryDepartment: "People & Culture",
      },
      {
        id: "infectious-disease-exposure",
        title: "Infectious disease exposure",
      },
      { id: "contamination-spread", title: "Contamination spread" },
      { id: "injury-while-on-duty", title: "Injury while on duty" },
      { id: "body-part-affected", title: "Body part affected" },
      { id: "stress-related-illness", title: "Stress-related illness" },
    ],
  },

  {
    id: "harassment-conduct",
    title: "Harassment & Conduct",
    department: "People & Culture",
    icon: UserX,
    iconColor: "#7C3AED",
    items: [
      { id: "bullying", title: "Bullying", secondaryDepartment: "Legal" },
      {
        id: "verbal-harassment",
        title: "Verbal harassment",
        secondaryDepartment: "Legal",
      },
      {
        id: "sexual-harassment",
        title: "Sexual harassment",
        secondaryDepartment: "Legal",
      },
      {
        id: "physical-assault",
        title: "Physical assault",
        secondaryDepartment: "Legal",
      },
      {
        id: "fighting-and-injury",
        title: "Fighting and injury",
        secondaryDepartment: "Legal",
      },
      {
        id: "oppressive-leadership",
        title: "Oppressive leadership",
        secondaryDepartment: "Operations",
      },
      {
        id: "threats-at-work",
        title: "Threats at work",
        secondaryDepartment: "Legal",
      },
      {
        id: "client-aggression",
        title: "Client aggression",
        secondaryDepartment: "Operations",
      },
      {
        id: "security-misconduct",
        title: "Security misconduct",
        secondaryDepartment: "Operations",
      },
      {
        id: "abuse-from-colleague",
        title: "Abuse from colleague",
        secondaryDepartment: "Legal",
      },
      { id: "weapon-related-assault", title: "Weapon-related assault" },
    ],
  },

  {
    id: "environmental-facility",
    title: "Environmental & Facility Hazards",
    department: "General Services",
    icon: Leaf,
    iconColor: "#0369A1",
    items: [
      {
        id: "dirty-office-environment",
        title: "Dirty office environment",
        secondaryDepartment: "People & Culture",
      },
      { id: "waste-pollution", title: "Waste pollution" },
      { id: "carbon-emission-pollution", title: "Carbon emission pollution" },
      { id: "water-erosion", title: "Water erosion" },
      { id: "chemical-pollution", title: "Chemical pollution" },
      { id: "cooking-in-office", title: "Cooking in office" },
      {
        id: "combustible-materials",
        title: "Combustible materials in workspace",
      },
      { id: "no-ventilation", title: "No ventilation" },
      {
        id: "faulty-facility-equipment",
        title: "Faulty facility equipment",
        secondaryDepartment: "Operations",
      },
      { id: "housekeeping-issue", title: "Housekeeping issue" },
    ],
  },

  {
    id: "security-theft",
    title: "Security & Theft",
    department: "Operations / IT",
    icon: Lock,
    iconColor: "#92400E",
    items: [
      {
        id: "stolen-work-tools",
        title: "Stolen work tools",
        secondaryDepartment: "General Services",
      },
      {
        id: "theft-due-to-negligence",
        title: "Theft due to negligence",
        secondaryDepartment: "General Services",
      },
      {
        id: "armed-robbery",
        title: "Armed robbery",
        secondaryDepartment: "General Services",
      },
      {
        id: "security-personnel-assault",
        title: "Security personnel assault",
        secondaryDepartment: "Operations",
      },
      {
        id: "client-theft-incident",
        title: "Client theft incident",
        secondaryDepartment: "Client Experience Management",
      },
      {
        id: "failed-prevention-process",
        title: "Incident due to failed prevention process",
        secondaryDepartment: "Operations",
      },
    ],
  },

  {
    id: "legal-compliance",
    title: "Legal, Compliance & Compensation",
    department: "People & Culture",
    icon: Scale,
    iconColor: "#065F46",
    items: [
      {
        id: "no-accident-compensation",
        title: "No accident compensation",
        secondaryDepartment: "Finance",
      },
      {
        id: "robbery-compensation",
        title: "Robbery compensation claim",
        secondaryDepartment: "Compliance",
      },
      {
        id: "regulatory-fine",
        title: "Regulatory fine or sanction",
        secondaryDepartment: "Compliance",
      },
      {
        id: "financial-loss",
        title: "Financial loss from incident",
        secondaryDepartment: "Operations",
      },
      {
        id: "pending-dispute",
        title: "Pending dispute resolution",
        secondaryDepartment: "Operations",
      },
      {
        id: "incident-negligence",
        title: "Incident from negligence",
        secondaryDepartment: "Operations",
      },
      {
        id: "compliance-breach",
        title: "Compliance breach",
        secondaryDepartment: "Operations",
      },
      {
        id: "child-labour-vendor",
        title: "Child labour by vendor",
        secondaryDepartment: "General Services",
      },
    ],
  },

  {
    id: "client-vendor",
    title: "Client & Vendor Related",
    department: "Client Experience",
    icon: Handshake,
    iconColor: "#BE185D",
    items: [
      {
        id: "aggressive-client",
        title: "Aggressive client incident",
        secondaryDepartment: "Operations",
      },
      {
        id: "poor-turnaround",
        title: "Poor transaction turnaround conflict",
        secondaryDepartment: "Audit",
      },
      {
        id: "vendor-misconduct",
        title: "Vendor misconduct",
        secondaryDepartment: "Operations",
      },
      {
        id: "vendor-child-labour",
        title: "Vendor child labour",
        secondaryDepartment: "Operations",
      },
      {
        id: "infectious-vendor-exposure",
        title: "Infectious exposure from vendor/client",
      },
    ],
  },
];

const INJURY_BODY_PARTS = [
  "Head",
  "Eye",
  "Face",
  "Neck",
  "Shoulder",
  "Arm",
  "Hand",
  "Finger",
  "Chest",
  "Back",
  "Hip",
  "Leg",
  "Knee",
  "Foot",
  "Toe",
  "Multiple body parts",
  "Other",
];

function SubmitReport() {
  const [step, setStep] = useState(1);
  const [anonymous, setAnonymous] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>();
  const [branch, setBranch] = useState("");
  const [area, setArea] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentTime, setIncidentTime] = useState("");
  const [category, setCategory] = useState("");

  const [severity, setSeverity] = useState<Severity>("Medium");

  const [hasInjury, setHasInjury] = useState<boolean | null>(null);

  const [affectedBodyArea, setAffectedBodyArea] = useState("");

  const [isRecurring, setIsRecurring] = useState<boolean | null>(null);

  const [description, setDescription] = useState("");

  const [witnesses, setWitnesses] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<string[]>([]);

  const BRANCHES = [
    "Lagos Island Branch",
    "Surulere Branch",
    "Ikeja Branch",
    "Abuja Main Branch",
    "Port Harcourt Branch",
    "Ibadan Branch",
    "Kano Branch",
    "Head Office – Lagos",
  ];

  const AREAS = [
    "Operations Floor",
    "2nd Floor – Open Plan",
    "3rd Floor – Open Plan",
    "Ground Floor",
    "Boardroom / Meeting Room",
    "Main Office",
    "Reception / Lobby",
    "Customer Service Hall",
    "Server Room / IT Suite",
    "Filing Room / Basement",
    "Staff Canteen",
    "Field / Off-site",
  ];

  return (
    <>
      <ReportStepper currentStep={step} />

      {step === 1 && (
        <div className="mx-auto max-w-205 bg-[#F8F4EE] px-6 py-6">
          <AnonymousToggle
            anonymous={anonymous}
            onToggle={() => setAnonymous((prev) => !prev)}
          />

          <h2 className="text-sm font-bold text-stone-900 mb-[18px]">
            Select the incident category and type
          </h2>

          {/* <CategorySection
          title="Workplace Safety"
          department="General Services"
          icon={ShieldAlert}
          iconColor="#DC2626"
          iconBg="#FEE2E2"
          items={workplaceSafety}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        /> */}

          {reportCategories.map((category) => (
            <CategorySection
              key={category.id}
              title={category.title}
              department={category.department}
              iconBg="#FEE2E2"
              icon={category.icon}
              iconColor={category.iconColor}
              items={category.items}
              selected={selectedCategory?.id}
              onSelect={setSelectedCategory}
            />
          ))}

          <div className="mt-2 flex justify-end">
            <button
              type="button"
              disabled={!selectedCategory}
              className="rounded-lg bg-[#EC8020] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setStep(2)}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedCategory && (
        <div className="mx-auto max-w-205 bg-[#F8F4EE] px-6 py-6">
          <SelectedCategoryBadge category={selectedCategory} />
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
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
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
                value={area}
                onChange={(e) => setArea(e.target.value)}
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
                value={incidentDate}
                onChange={(e) => setIncidentDate(e.target.value)}
                max="2026-04-13"
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
                value={incidentTime}
                onChange={(e) => setIncidentTime(e.target.value)}
                className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
              />
            </div>
          </div>

          <div className="mb-[14px]">
            <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
              Severity Level <span className="text-[#EC8020]">*</span>
              <span className="ml-1.5 text-[11px] font-normal text-stone-400">
                Auto-suggested: Critical
              </span>
            </label>

            <select className="w-full rounded-lg border border-[#EC8020] bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none appearance-none">
              <option value="Critical">
                🔴 Critical — Immediate danger to life or health
              </option>

              <option value="High">
                🟠 High — Significant risk, urgent action required
              </option>

              <option value="Medium">
                🟡 Medium — Moderate concern, timely action needed
              </option>

              <option value="Low">
                🟢 Low — Minor issue, routine resolution
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-stone-900">
              Has an injury or health impact occurred?
              <span className="text-[#EC8020]">*</span>
            </label>

            <div className="flex gap-3">
              {[true, false].map((value) => {
                const active = hasInjury === value;

                return (
                  <button
                    key={String(value)}
                    type="button"
                    onClick={() => setHasInjury(value)}
                    className={`flex-1 rounded-lg px-3 py-2.5 text-sm transition-all
            ${
              active
                ? value
                  ? "border-2 border-red-600 bg-red-50 font-semibold text-red-700"
                  : "border-2 border-green-600 bg-green-50 font-semibold text-green-700"
                : "border border-stone-300 bg-[#F8F4EE] text-stone-600"
            }`}
                  >
                    {value
                      ? "Yes — injury / impact occurred"
                      : "No — reporting a hazard or risk"}
                  </button>
                );
              })}
            </div>
          </div>

          {hasInjury && (
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold text-stone-900">
                Body Part Affected
                <span className="text-[#EC8020]">*</span>
              </label>

              <select
                value={affectedBodyArea}
                onChange={(e) => setAffectedBodyArea(e.target.value)}
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

          {/* Recurring Yes/No */}
          <div className="mb-[14px]">
            <label className="mb-2 block text-[13px] font-semibold text-stone-900">
              Is this a recurring issue?
            </label>

            <div className="flex gap-[10px]">
              {[true, false].map((value) => {
                const isActive = isRecurring === value;

                return (
                  <button
                    key={String(value)}
                    type="button"
                    onClick={() => setIsRecurring(value)}
                    className={`flex-1 rounded-lg px-3 py-[10px] text-center text-[13px] transition-all ${
                      isActive
                        ? "border-2 border-[#EC8020] bg-orange-50 font-semibold text-[#7A3E0A]"
                        : "border border-stone-300 bg-[#F8F4EE] font-medium text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {value
                      ? "Yes — ongoing / recurring"
                      : "No — first occurrence"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="mb-[14px]">
            <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
              Describe the incident <span className="text-[#EC8020]">*</span>{" "}
              <span className="text-[11px] font-normal text-stone-500">
                (minimum 50 characters)
              </span>
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Describe clearly what happened, when, where, who was involved, and any prior reports of this issue. The more detail you provide, the faster the handler can act."
              className="w-full resize-y rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] leading-relaxed text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
            />

            <div
              className={`mt-1 text-right text-[11px] ${
                description.length >= 50 ? "text-green-600" : "text-stone-500"
              }`}
            >
              {description.length} / 50 minimum
              {description.length >= 50 && " ✓"}
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
              value={witnesses}
              onChange={(e) => setWitnesses(e.target.value)}
              placeholder="Names or initials (leave blank if reporting anonymously or no witnesses)"
              className="w-full rounded-lg border border-stone-300 bg-white px-3 py-[9px] text-[13px] text-stone-900 outline-none transition-colors focus:border-[#EC8020]"
            />
          </div>

          {/* Attachments */}
          <div className="mb-[18px]">
            <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
              Attachments{" "}
              <span className="text-[11px] font-normal text-stone-500">
                photos, documents — optional, max 5MB each
              </span>
            </label>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer rounded-[9px] border-[1.5px] border-dashed border-[#F9C896] bg-[#F8F4EE] p-[18px] text-center transition-colors hover:border-[#EC8020]"
            >
              <div className="text-[13px] text-stone-600">
                <Paperclip className="mr-1 inline" size={14} />
                <span className="font-semibold text-[#EC8020]">
                  Click to upload
                </span>{" "}
                or drag and drop
              </div>

              <div className="mt-1 text-[11px] text-stone-500">
                JPG, PNG, PDF · max 5MB · up to 3 files
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files || [])
                  .slice(0, 3)
                  .map((file) => file.name);

                setAttachments(files);
              }}
            />

            {attachments.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-[6px]">
                {attachments.map((file) => (
                  <span
                    key={file}
                    className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-[11px] text-green-800"
                  >
                    <Paperclip size={10} />

                    {file}

                    <button
                      type="button"
                      onClick={() =>
                        setAttachments((prev) =>
                          prev.filter((item) => item !== file),
                        )
                      }
                      className="cursor-pointer"
                    >
                      <X size={10} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Privacy Notice */}
          <div className="mb-[18px] flex items-start gap-[10px] rounded-[9px] border border-green-600/20 bg-green-100 px-[14px] py-[11px]">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-green-700" />

            <p className="text-[12px] leading-6 text-green-900">
              LAPO strictly prohibits retaliation against anyone who raises a
              safety or conduct concern in good faith. All reports are handled
              confidentially in line with our Anti-Retaliation Policy.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-lg border border-stone-300 bg-[#F8F4EE] px-[14px] py-[7px] text-[13px] font-medium text-stone-900 transition-colors hover:bg-stone-100"
            >
              ← Back
            </button>

            <button
              type="button"
              onClick={() => {
                setStep(3);
              }}
              // disabled={!canProceedStep2}
              className="rounded-lg bg-[#EC8020] px-[22px] py-[9px] text-[13px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Review &amp; Submit →
            </button>
          </div>
        </div>
      )}

      {/* 
    {step === 1 && <CategoryStep />}
    {step === 2 && <DetailsStep />}
    {step === 3 && <ReviewStep />}
    {step === 4 && <SubmitSuccess />}

    <div className="flex justify-between mt-8">
      <Button
        disabled={step === 1}
        onClick={() => setStep(step - 1)}
      >
        Previous
      </Button>

      <Button
        onClick={() => setStep(step + 1)}
      >
        {step === 4 ? "Finish" : "Next"}
      </Button>
    </div> */}
    </>
  );
}

export default SubmitReport;
