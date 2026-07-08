import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1
          className="text-gray-900 mb-1"
          style={{ fontSize: "22px", fontWeight: 700 }}
        >
          System Administration
        </h1>
        <p className="text-gray-500 text-sm">
          OHS-WCMS full system overview · {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;
