import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="md:ml-64">

        {/* Mobile Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white px-4 md:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          >
            <Menu size={24} />
          </button>

          <div className="ml-4">
            <h1 className="text-lg font-bold text-blue-600">
              QueueCare
            </h1>

            <p className="text-xs text-slate-500">
              Hospital Queue Tracker
            </p>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;