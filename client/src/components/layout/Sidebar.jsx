import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Stethoscope,
  Hospital,
  ListChecks,
  Bell,
  UserCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/patient/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Appointments",
      path: "/patient/appointments",
      icon: CalendarDays,
    },
    {
      name: "Live Queue",
      path: "/patient/queue",
      icon: ListChecks,
    },
    {
      name: "Doctors",
      path: "/doctors",
      icon: Stethoscope,
    },
    {
      name: "Hospitals",
      path: "/hospitals",
      icon: Hospital,
    },
    {
      name: "Notifications",
      path: "/patient/notifications",
      icon: Bell,
    },
    {
      name: "Profile",
      path: "/patient/profile",
      icon: UserCircle,
    },
    {
      name: "Settings",
      path: "/patient/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64
          border-r border-slate-200 bg-white
          transition-transform duration-300
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div>
            <h1 className="text-xl font-bold text-blue-600">
              QueueCare
            </h1>

            <p className="text-xs text-slate-500">
              Hospital Queue Tracker
            </p>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 w-full border-t border-slate-200 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;