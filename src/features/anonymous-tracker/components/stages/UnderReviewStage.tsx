export default function UnderReviewStage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Case Under Review
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        Your report has been received and is currently being reviewed by the
        Occupational Health & Safety team. During this stage, the information
        provided is assessed to determine the appropriate next steps.
      </p>

      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-700">
          Your report remains confidential. If additional information is
          required, investigators will continue using the details already
          provided while preserving your anonymity.
        </p>
      </div>
    </div>
  );
}