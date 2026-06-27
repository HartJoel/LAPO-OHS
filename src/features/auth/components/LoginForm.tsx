import { useState } from "react";

interface LoginFormProps {
  onSubmit: (email: string, role: "admin" | "user") => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email");
    onSubmit(email, role);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Simulate Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "user")}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="user">Regular User</option>
          <option value="admin">Administrator</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}
