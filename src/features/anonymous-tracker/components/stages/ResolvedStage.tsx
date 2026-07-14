export default function ResolvedStage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Case Resolved
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        The investigation has been completed and appropriate actions have been
        taken based on the findings. The reported issue has been addressed in
        accordance with LAPO's Occupational Health & Safety procedures.
      </p>

      <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
        <p className="text-sm text-green-700">
          Thank you for helping create a safer workplace by reporting this
          incident.
        </p>
      </div>
    </div>
  );
}