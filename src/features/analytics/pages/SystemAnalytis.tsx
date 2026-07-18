import { Download } from "lucide-react";


function SystemAnalytis() {
  const year = new Date().getFullYear();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1
            className="text-gray-900 mb-1"
            style={{ fontSize: "22px", fontWeight: 700 }}
          >
            System Analytics
          </h1>
          <p className="text-gray-500 text-sm">
            {`Comprehensive OHS-WCMS performance report · Q1-Q2 ${year}`}
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <Download size={15} />
          Export Report
        </button>
      </div>
    </div>
  );
}

export default SystemAnalytis;
