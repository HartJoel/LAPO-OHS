import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const handleLoginSubmit = (email: string, role: "admin" | "user") => {
    // This logs the user choices before you connect your backend API
    console.log("Logging in user:", { email, role });
    alert(`Success! Logged in as ${email} with role: ${role}`);
    
    // Todo: Save user to state manager and redirect to dashboard "/"
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-sm text-slate-500 mt-1">Sign in to your dashboard shell</p>
        </div>

        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </div>
  );
}
