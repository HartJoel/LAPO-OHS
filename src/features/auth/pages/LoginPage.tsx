import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield, AlertCircle, Lock, Mail } from "lucide-react";

import { LeftPanel } from "../components/LeftPanel";
import { FormInput } from "../components/FormInput";

import { useAuthStore } from "../../../store/authStore";
import { MOCK_USERS } from "../mocks/users";

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const user = MOCK_USERS.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );

    setLoading(false);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    // Remove password before saving user
    const { password: _, ...loggedInUser } = user;

    login(loggedInUser);

    navigate("/dashboard");
  }

  function fillDemoAccount(email: string, password: string) {
    setEmail(email);
    setPassword(password);
    setError("");
  }

  return (
    <div className="min-h-screen flex bg-[#F7F8FA]">
      <LeftPanel />

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EC8020] to-[#009D4C] flex items-center justify-center">
              <Shield className="text-white" size={20} />
            </div>

            <h1 className="font-bold text-xl text-[#0F1E2E]">LAPO OHS-WCMS</h1>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>

            <p className="mt-2 text-gray-500">
              Sign in with your LAPO credentials to continue.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700 text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <FormInput
              label="Email Address"
              type="email"
              required
              value={email}
              placeholder="yourname@lapo.ng"
              icon={<Mail size={16} />}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              label="Password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              placeholder="Enter your password"
              icon={<Lock size={16} />}
              onChange={(e) => setPassword(e.target.value)}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              }
            />

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="rounded"
                />

                <span className="text-gray-600">Remember me</span>
              </label>

              <button type="button" className="text-[#009D4C] hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full rounded-lg bg-[#EC8020] py-3 font-semibold text-white transition hover:bg-[#d96d0d] disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={18} className="text-[#009D4C]" />

              <h3 className="font-semibold text-gray-800">Demo Accounts</h3>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Click any account below to automatically fill the login form.
            </p>

            <div className="space-y-3">
              {MOCK_USERS.map((user) => (
                <button
                  key={user.id}
                  onClick={() => fillDemoAccount(user.email, user.password)}
                  className="w-full rounded-lg border border-gray-200 p-3 text-left transition hover:border-[#009D4C] hover:bg-green-50"
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{user.name}</h4>

                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs capitalize">
                      {user.role.replace("_", " ")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Track Report */}
          <div className="mt-6 pt-6 text-center">
            <Link
              to="/track"
              className="font-medium text-[#009D4C] hover:underline"
            >
              Track an anonymous incident report →
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-400 leading-5">
            This application is restricted to authorised LAPO employees. All
            login attempts and user activities are monitored for security
            purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
