import { useRef, useState } from "react";
import type { SelectedCategory } from "./components/CategorySection";
import type { Severity } from "./types";
import { MIN_DESCRIPTION_LENGTH } from "./types";

const MAX_ATTACHMENTS = 3;

export function useSubmitReportForm() {
  const [step, setStep] = useState(1);
  const [anonymous, setAnonymous] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>();

  const [branch, setBranch] = useState("");
  const [area, setArea] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentTime, setIncidentTime] = useState("");

  const [severity, setSeverity] = useState<Severity>("Medium");

  const [hasInjury, setHasInjury] = useState<boolean | null>(null);
  const [affectedBodyArea, setAffectedBodyArea] = useState("");
  const [isRecurring, setIsRecurring] = useState<boolean | null>(null);

  const [description, setDescription] = useState("");
  const [witnesses, setWitnesses] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<string[]>([]);

  function addAttachments(files: FileList | null) {
    const names = Array.from(files ?? [])
      .slice(0, MAX_ATTACHMENTS)
      .map((file) => file.name);
    setAttachments(names);
  }

  function removeAttachment(fileName: string) {
    setAttachments((prev) => prev.filter((item) => item !== fileName));
  }

  function goToStep(nextStep: number) {
    setStep(nextStep);
  }

  function goBack() {
    setStep((prev) => Math.max(1, prev - 1));
  }

  function goNext() {
    setStep((prev) => prev + 1);
  }

  const canProceedFromCategory = Boolean(selectedCategory);

  const canProceedFromDetails =
    branch !== "" &&
    area !== "" &&
    incidentDate !== "" &&
    hasInjury !== null &&
    (hasInjury === false || affectedBodyArea !== "") &&
    description.length >= MIN_DESCRIPTION_LENGTH;

  return {
    step,
    goToStep,
    goBack,
    goNext,

    anonymous,
    toggleAnonymous: () => setAnonymous((prev) => !prev),

    selectedCategory,
    setSelectedCategory,
    canProceedFromCategory,

    branch,
    setBranch,
    area,
    setArea,
    incidentDate,
    setIncidentDate,
    incidentTime,
    setIncidentTime,

    severity,
    setSeverity,

    hasInjury,
    setHasInjury,
    affectedBodyArea,
    setAffectedBodyArea,

    isRecurring,
    setIsRecurring,

    description,
    setDescription,
    witnesses,
    setWitnesses,

    fileInputRef,
    attachments,
    addAttachments,
    removeAttachment,

    canProceedFromDetails,
  };
}

export type SubmitReportForm = ReturnType<typeof useSubmitReportForm>;