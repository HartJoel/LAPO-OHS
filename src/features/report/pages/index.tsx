import ReportStepper from "../components/ReportStepper";
import CategoryStep from "../steps/CategoryStep";
import DetailsStep from "../steps/DetailsStep";
import ReviewStep from "../steps/ReviewStep";
import SuccessStep from "../steps/SuccessStep";
import { useSubmitReportForm } from "../useSubmitReportForm";

function SubmitReport() {
  const form = useSubmitReportForm();

  function handleSubmit() {
    // TODO: replace with the real submit-report API call once it exists.
    // e.g. await api.reports.create(buildPayload(form))
    form.goToStep(4);
  }

  return (
    <>
      <ReportStepper currentStep={form.step} />

      {form.step === 1 && <CategoryStep form={form} />}
      {form.step === 2 && <DetailsStep form={form} />}
      {form.step === 3 && <ReviewStep form={form} onSubmit={handleSubmit} />}
      {form.step === 4 && <SuccessStep form={form} />}
    </>
  );
}

export default SubmitReport;
