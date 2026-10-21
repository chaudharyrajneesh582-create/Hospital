import { Outlet } from "react-router-dom";
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
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                QueueCare
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Skip the waiting room. Track your hospital queue
                in real time and know exactly when it's your turn.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-slate-900">
                Quick Links
              </h3>

              <div className="mt-3 space-y-2 text-sm text-slate-500">
                <p className="cursor-pointer hover:text-blue-600">
                  Home
                </p>

                <p className="cursor-pointer hover:text-blue-600">
                  Hospitals
                </p>

                <p className="cursor-pointer hover:text-blue-600">
                  Doctors
                </p>

                <p className="cursor-pointer hover:text-blue-600">
                  Contact
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-slate-900">
                Contact
              </h3>

              <div className="mt-3 space-y-2 text-sm text-slate-500">
                <p>support@queuecare.com</p>
                <p>+91 98765 43210</p>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-5 text-center text-sm text-slate-500">
            © 2026 QueueCare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;