import {
  Bell,
  ChevronDown,
  ChevronRight,
  Clock3,
  ExternalLink,
  FileText,
  Folder,
  FolderOpen,
  LayoutDashboard,
  CheckCircle2,
  ShieldAlert,
  HeartPulse,
  Users,
  Leaf,
  Scale,
  Lock,
  Handshake,
  Plus,
  LogOut,
} from "lucide-react";

export default function Employee() {
  const stats = [
    {
      title: "Open Cases",
      value: 4,
      icon: FolderOpen,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      title: "Resolved",
      value: 0,
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "Closed",
      value: 0,
      icon: Clock3,
      color: "text-gray-500",
      bg: "bg-gray-100",
    },
    {
      title: "Total Submitted",
      value: 4,
      icon: FileText,
      color: "text-indigo-500",
      bg: "bg-indigo-100",
    },
  ];

  const categories = [
    {
      title: "Workplace Safety",
      description: "Fire hazards, slips & falls, electrical faults, injuries",
      icon: ShieldAlert,
      bg: "bg-red-100",
      color: "text-red-500",
    },
    {
      title: "Health & Ergonomics",
      description: "Ventilation, ergonomic injuries, disease exposure, stress",
      icon: HeartPulse,
      bg: "bg-green-100",
      color: "text-green-500",
    },
    {
      title: "Harassment & Conduct",
      description: "Bullying, harassment, threats, oppressive leadership",
      icon: Users,
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
    {
      title: "Environmental & Facility",
      description: "Pollution, waste, housekeeping, faulty equipment",
      icon: Leaf,
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
    {
      title: "Security & Theft",
      description: "Stolen tools, robbery, security failures",
      icon: Lock,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    {
      title: "Legal & Compliance",
      description: "Compensation claims, regulatory breaches",
      icon: Scale,
      bg: "bg-emerald-100",
      color: "text-emerald-600",
    },
    {
      title: "Client & Vendor",
      description: "Aggressive clients, vendor misconduct",
      icon: Handshake,
      bg: "bg-pink-100",
      color: "text-pink-500",
    },
  ];

  const cases = [
    {
      id: "OHS-2026-001",
      category: "Health & Ergonomics",
      title: "Poor office ventilation",
      branch: "Lagos Island Branch",
      status: "Under Review",
    },
    {
      id: "OHS-2026-003",
      category: "Health & Ergonomics",
      title: "Chair-related body pain",
      branch: "Lagos Island Branch",
      status: "Logged",
    },
    {
      id: "OHS-2026-006",
      category: "Health & Ergonomics",
      title: "Computer-related strain",
      branch: "Lagos Island Branch",
      status: "Investigating",
    },
    {
      id: "OHS-2026-012",
      category: "Environmental & Facility",
      title: "Faulty facility equipment",
      branch: "Lagos Island Branch",
      status: "Logged",
    },
  ];

  const badgeColor = (status: string) => {
    switch (status) {
      case "Logged":
        return "bg-blue-100 text-blue-700";

      case "Investigating":
        return "bg-orange-100 text-orange-700";

      case "Under Review":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      <aside className="w-72 bg-slate-900 text-white flex flex-col">
        <div className="border-b border-slate-700 p-6">
          <h1 className="font-bold text-2xl">LAPO</h1>

          <p className="text-slate-400 text-sm">OHS-WCMS</p>
        </div>

        <div className="px-5 mt-6">
          <div className="rounded-xl bg-slate-800 p-3 text-sm font-medium">
            Employee
          </div>
        </div>

        <div className="mt-8 px-5">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
            Navigation
          </p>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 rounded-xl bg-orange-500 p-3 font-medium">
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            <button className="w-full flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800">
              <FileText size={18} />
              Submit Report
            </button>

            <button className="w-full flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800">
              <Folder size={18} />
              My Cases
            </button>
          </nav>

          <p className="text-xs uppercase tracking-widest text-slate-400 mt-10 mb-4">
            Quick Links
          </p>

          <button className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800 w-full">
            <ExternalLink size={18} />
            Anonymous Tracker
          </button>
        </div>

        <div className="mt-auto border-t border-slate-700 p-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                AO
              </div>

              <div>
                <h4 className="font-semibold">Amaka Okafor</h4>

                <p className="text-sm text-slate-400">Lagos Island Branch</p>
              </div>
            </div>

            <LogOut size={18} />
          </div>
        </div>
      </aside>

      {/* Main */}

      <main className="flex-1">
        {/* Navbar */}

        <header className="h-20 bg-white border-b px-10 flex items-center justify-between">
          <h2 className="text-gray-600">
            LAPO Microfinance Bank — Occupational Health, Safety & Workplace
            Conduct Management
          </h2>

          <div className="flex items-center gap-8">
            <div className="relative">
              <Bell />

              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                6
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                AO
              </div>

              <span className="font-medium">Amaka</span>

              <ChevronDown size={18} />
            </div>
          </div>
        </header>

        {/* Content */}

        <div className="p-10">
          <h1 className="text-5xl font-bold">Welcome back, Amaka 👋</h1>

          <p className="mt-3 text-gray-500 text-lg">
            Operations Officer · Lagos Island Branch
          </p>

          {/* Stats */}

          <div className="grid grid-cols-4 gap-6 mt-10">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm border"
                >
                  <div className="flex justify-between">
                    <div
                      className={`h-14 w-14 rounded-xl flex items-center justify-center ${item.bg}`}
                    >
                      <Icon className={item.color} size={26} />
                    </div>

                    <span className="text-4xl font-bold">{item.value}</span>
                  </div>

                  <p className="mt-6 text-gray-500">{item.title}</p>
                </div>
              );
            })}
          </div>

          {/* Remaining sections continue here... */}

          {/* Report Incident Section */}

          <section className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  Report a New Incident
                </h2>

                <p className="mt-2 text-gray-500">
                  Select the category that best describes your incident
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600">
                <Plus size={18} />
                Full Form
              </button>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-5">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.title}
                    className="cursor-pointer rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.bg}`}
                    >
                      <Icon size={26} className={category.color} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Recent Cases */}

          <section className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">My Recent Cases</h2>

              <button className="font-medium text-orange-500 hover:text-orange-600">
                View All →
              </button>
            </div>

            <div className="mt-8 space-y-5">
              {cases.map((item) => (
                <div
                  key={item.id}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border p-6 transition-all hover:border-orange-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-gray-500">
                        {item.id}
                      </span>

                      <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-500">{item.branch}</p>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <span
                        className={`inline-flex rounded-full px-5 py-2 text-sm font-semibold ${badgeColor(
                          item.status,
                        )}`}
                      >
                        {item.status}
                      </span>

                      <p className="mt-3 text-sm font-medium text-red-500">
                        SLA Breached
                      </p>
                    </div>

                    <ChevronRight
                      size={24}
                      className="text-gray-400 transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
