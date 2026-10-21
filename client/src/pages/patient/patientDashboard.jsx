import {
  CalendarDays,
  Clock3,
  MapPin,
  Stethoscope,
  ArrowRight,
  Bell,
  CheckCircle,
  Search,
  History,
  UserRound,
  Navigation,
} from "lucide-react";

import { Link } from "react-router-dom";

import StatCard from "../../components/dashboard/StatCard";
import AppointmentCard from "../../components/dashboard/AppointmentCard";
import QueueCard from "../../components/dashboard/QueueCard";

function PatientDashboard() {
  // --------------------------------------------------
  // MOCK DATA
  // Later this data will come from your backend API
  // --------------------------------------------------

  const stats = [
    {
      title: "Upcoming Appointments",
      value: "1",
      description: "Next appointment",
      type: "blue",
      icon: CalendarDays,
    },
    {
      title: "Queue Position",
      value: "#6",
      description: "Patients ahead of you",
      type: "orange",
      icon: Clock3,
    },
    {
      title: "Completed Visits",
      value: "12",
      description: "Total consultations",
      type: "green",
      icon: CheckCircle,
    },
    {
      title: "Notifications",
      value: "3",
      description: "Unread notifications",
      type: "purple",
      icon: Bell,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-medium text-blue-600">
            Patient Dashboard
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Welcome back, Rajneesh 👋
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Here is an overview of your appointments and live queue.
          </p>
        </div>

        {/* Notification Button */}

        <Link
          to="/patient/notifications"
          className="relative flex h-11 w-11 items-center justify-center self-start rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 sm:self-auto"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
        </Link>
      </div>

      {/* =====================================================
          STAT CARDS
      ===================================================== */}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            type={stat.type}
            icon={stat.icon}
          />
        ))}

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="space-y-6 xl:col-span-2">

          {/* -----------------------------------------------
              CURRENT APPOINTMENT
          ------------------------------------------------ */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Your Next Appointment
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your upcoming hospital visit
                </p>
              </div>

              <Link
                to="/patient/appointments"
                className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
              >
                View All
                <ArrowRight size={16} />
              </Link>

            </div>

            <AppointmentCard />

            <Link
              to="/patient/appointments"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:hidden"
            >
              View All Appointments
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* -----------------------------------------------
              LIVE QUEUE
          ------------------------------------------------ */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <div className="flex items-center gap-2">

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>

                  <h2 className="text-lg font-bold text-slate-900">
                    Live Queue
                  </h2>

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Track your position in real time
                </p>
              </div>

              <Link
                to="/patient/queue"
                className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Details
                <ArrowRight size={16} />
              </Link>

            </div>

            <QueueCard />

          </div>

        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="space-y-6">

          {/* -----------------------------------------------
              QUICK ACTIONS
          ------------------------------------------------ */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <h2 className="text-lg font-bold text-slate-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Quickly access important features
            </p>

            <div className="mt-5 space-y-3">

              {/* Find Doctor */}

              <Link
                to="/doctors"
                className="group flex items-center gap-4 rounded-xl border border-slate-100 p-3 transition hover:border-blue-200 hover:bg-blue-50"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Stethoscope size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Find a Doctor
                  </h3>

                  <p className="text-xs text-slate-500">
                    Search doctors and specialists
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />

              </Link>

              {/* Find Hospital */}

              <Link
                to="/hospitals"
                className="group flex items-center gap-4 rounded-xl border border-slate-100 p-3 transition hover:border-green-200 hover:bg-green-50"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <MapPin size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Find Hospital
                  </h3>

                  <p className="text-xs text-slate-500">
                    Explore nearby hospitals
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-600"
                />

              </Link>

              {/* Book Appointment */}

              <Link
                to="/doctors"
                className="group flex items-center gap-4 rounded-xl border border-slate-100 p-3 transition hover:border-purple-200 hover:bg-purple-50"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <CalendarDays size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Book Appointment
                  </h3>

                  <p className="text-xs text-slate-500">
                    Schedule a hospital visit
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-purple-600"
                />

              </Link>

              {/* Medical History */}

              <Link
                to="/patient/history"
                className="group flex items-center gap-4 rounded-xl border border-slate-100 p-3 transition hover:border-orange-200 hover:bg-orange-50"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <History size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Visit History
                  </h3>

                  <p className="text-xs text-slate-500">
                    View your previous visits
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-600"
                />

              </Link>

            </div>

          </div>

          {/* -----------------------------------------------
              HOSPITAL INFORMATION
          ------------------------------------------------ */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <Navigation size={21} />
                </div>

                <div>
                  <p className="text-xs text-blue-100">
                    Current Hospital
                  </p>

                  <h2 className="font-bold">
                    CityCare Hospital
                  </h2>
                </div>

              </div>

            </div>

            <div className="p-5">

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-slate-400"
                />

                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Hospital Address
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Main Road, Ghaziabad,
                    Uttar Pradesh
                  </p>
                </div>

              </div>

              <Link
                to="/hospitals"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Hospital
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

          {/* -----------------------------------------------
              NOTIFICATION
          ------------------------------------------------ */}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

            <div className="flex gap-3">

              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Bell size={19} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-blue-900">
                  Queue Update
                </h3>

                <p className="mt-1 text-sm leading-5 text-blue-700">
                  You are getting closer to your turn. There are
                  currently 5 patients ahead of you.
                </p>

                <Link
                  to="/patient/queue"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Track Queue
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Profile Card */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <UserRound size={26} />
            </div>

            <div className="flex-1">

              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Patient Profile
              </p>

              <h3 className="mt-1 font-bold text-slate-900">
                Rajneesh Kumar
              </h3>

              <p className="text-sm text-slate-500">
                Patient ID: P-10245
              </p>

            </div>

            <Link
              to="/patient/profile"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Profile
            </Link>

          </div>

        </div>

        {/* Search Card */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <Search size={25} />
            </div>

            <div className="flex-1">

              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Need Medical Help?
              </p>

              <h3 className="mt-1 font-bold text-slate-900">
                Find a doctor or department
              </h3>

              <p className="text-sm text-slate-500">
                Search by specialty or hospital
              </p>

            </div>

            <Link
              to="/doctors"
              className="rounded-lg bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700"
            >
              Search
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PatientDashboard;