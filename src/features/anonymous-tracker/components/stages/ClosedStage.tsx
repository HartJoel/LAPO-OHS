export default function ClosedStage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Case Closed
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        This case has been fully processed and officially closed. All required
        investigations, corrective actions, and administrative procedures have
        been completed.
      </p>

      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="text-sm text-gray-700">
          The case is now archived for compliance and record-keeping purposes.
          Thank you for contributing to a safer work environment.
        </p>
      </div>
    </div>
  );
}