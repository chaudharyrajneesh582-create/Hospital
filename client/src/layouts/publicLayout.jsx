import { Outlet } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Public Navbar */}
      <Navbar />

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-sm">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700">
                  <HeartPulse className="text-white" size={19} />
                </span>
                <span className="text-lg font-bold tracking-tight text-slate-950">
                  Queue<span className="text-blue-700">Care</span>
                </span>
              </Link>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                A simpler way to plan your hospital visit and keep track of
                your queue.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-600">
              <Link to="/" className="transition hover:text-blue-700">
                Home
              </Link>
              <Link to="/#departments" className="transition hover:text-blue-700">
                Departments
              </Link>
              <Link to="/#how-it-works" className="transition hover:text-blue-700">
                How it works
              </Link>
              <Link to="/login" className="transition hover:text-blue-700">
                Log in
              </Link>
              <Link to="/register" className="transition hover:text-blue-700">
                Get started
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-5 text-xs text-slate-400">
            © 2026 QueueCare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;