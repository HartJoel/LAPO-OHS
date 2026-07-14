export default function LoggedStage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Case Received
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        Your anonymous report has been successfully submitted and securely
        logged in our system.
      </p>

      <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-4">
        <p className="text-sm text-blue-700">
          The OHS team will review your report to determine the appropriate
          course of action. No further action is required from you at this time.
        </p>
      </div>
    </div>
  );
}