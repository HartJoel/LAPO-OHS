export default function InvestigatingStage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Investigation in Progress
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        The assigned OHS investigators are actively examining the reported
        incident. Relevant evidence is being reviewed and appropriate personnel
        may be consulted where necessary.
      </p>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-blue-700">
          Investigations vary in duration depending on the complexity of the
          case. Updates will appear here as the investigation progresses.
        </p>
      </div>
    </div>
  );
}