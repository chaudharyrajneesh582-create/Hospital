import {
  Users,
  CalendarDays,
  Clock,
  CheckCircle2,
  UserPlus,
  Search,
  PhoneCall,
  PlayCircle,
  SkipForward,
  UserX,
  PauseCircle,
  Play,
  AlertTriangle,
  Stethoscope,
  Hospital,
  Ticket,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";

function StaffDashboard() {
  const patients = [
    {
      token: "A18",
      name: "Amit Kumar",
      age: 42,
      gender: "Male",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "09:30 AM",
      status: "COMPLETED",
    },
    {
      token: "A19",
      name: "Priya Singh",
      age: 31,
      gender: "Female",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "09:45 AM",
      status: "COMPLETED",
    },
    {
      token: "A20",
      name: "Rohit Verma",
      age: 56,
      gender: "Male",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "10:00 AM",
      status: "IN_CONSULTATION",
    },
    {
      token: "A21",
      name: "Neha Gupta",
      age: 27,
      gender: "Female",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "10:15 AM",
      status: "WAITING",
    },
    {
      token: "A22",
      name: "Suresh Kumar",
      age: 64,
      gender: "Male",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "10:30 AM",
      status: "WAITING",
    },
    {
      token: "A23",
      name: "Pooja Sharma",
      age: 35,
      gender: "Female",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "10:45 AM",
      status: "WAITING",
    },
    {
      token: "A24",
      name: "Rajneesh Chaudhary",
      age: 21,
      gender: "Male",
      doctor: "Dr. Rahul Sharma",
      department: "Cardiology",
      time: "11:00 AM",
      status: "WAITING",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-700";

      case "IN_CONSULTATION":
        return "bg-blue-100 text-blue-700";

      case "WAITING":
        return "bg-yellow-100 text-yellow-700";

      case "SKIPPED":
        return "bg-orange-100 text-orange-700";

      case "NO_SHOW":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "COMPLETED":
        return "Completed";

      case "IN_CONSULTATION":
        return "In Consultation";

      case "WAITING":
        return "Waiting";

      case "SKIPPED":
        return "Skipped";

      case "NO_SHOW":
        return "No Show";

      default:
        return status;
    }
  };

  return (
    <div className="space-y-8">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            Staff Dashboard
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Good morning, Receptionist 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage today&apos;s appointments and hospital queue.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
          >
            <UserPlus size={18} />
            Register Patient
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <Ticket size={18} />
            Walk-in Patient
          </button>

        </div>
      </div>

      {/* =====================================================
          HOSPITAL / DEPARTMENT INFO
      ====================================================== */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Hospital size={24} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                CityCare Hospital
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Cardiology Department
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <Stethoscope size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Doctor
              </p>

              <p className="text-sm font-semibold text-slate-900">
                Dr. Rahul Sharma
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs text-slate-400">
              Today
            </p>

            <p className="text-sm font-semibold text-slate-900">
              10 September 2026
            </p>
          </div>

        </div>
      </div>

      {/* =====================================================
          STAT CARDS
      ====================================================== */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Today's Patients"
          value="32"
          description="Total patients today"
          type="patients"
          trend="+8 today"
        />

        <StatCard
          title="Appointments"
          value="28"
          description="Scheduled appointments"
          type="appointments"
          trend="Today"
        />

        <StatCard
          title="Completed"
          value="17"
          description="Consultations completed"
          type="completed"
          trend="53% completed"
        />

        <StatCard
          title="Waiting"
          value="7"
          description="Patients currently waiting"
          type="waiting"
          trend="Live queue"
        />

      </div>

      {/* =====================================================
          CURRENT QUEUE CONTROL
      ====================================================== */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Current Patient */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-semibold text-blue-600">
                Current Queue
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Queue Control
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              Queue Active
            </div>

          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* Current Token */}
            <div className="rounded-2xl bg-blue-50 p-6 text-center">

              <p className="text-sm text-slate-500">
                Currently Serving
              </p>

              <p className="mt-2 text-5xl font-extrabold text-blue-600">
                A20
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Rohit Verma
              </p>

              <p className="mt-1 text-sm text-slate-500">
                In Consultation
              </p>

            </div>

            {/* Next Token */}
            <div className="rounded-2xl bg-slate-50 p-6 text-center">

              <p className="text-sm text-slate-500">
                Next Patient
              </p>

              <p className="mt-2 text-5xl font-extrabold text-slate-900">
                A21
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Neha Gupta
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Waiting
              </p>

            </div>

          </div>

          {/* Queue Buttons */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <PhoneCall size={17} />
              Call Next
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <PlayCircle size={17} />
              Start
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
            >
              <SkipForward size={17} />
              Skip
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              <UserX size={17} />
              No Show
            </button>

          </div>

          {/* Complete / Pause */}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
            >
              <CheckCircle2 size={17} />
              Complete Consultation
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <PauseCircle size={17} />
              Pause Queue
            </button>

          </div>

        </div>

        {/* Queue Summary */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900">
                Queue Summary
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Today&apos;s live status
              </p>
            </div>

            <Ticket className="text-blue-600" size={24} />
          </div>

          <div className="mt-6 space-y-5">

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Total Tokens
              </span>

              <span className="font-bold text-slate-900">
                32
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Completed
              </span>

              <span className="font-bold text-green-600">
                17
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Waiting
              </span>

              <span className="font-bold text-yellow-600">
                7
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Skipped
              </span>

              <span className="font-bold text-orange-600">
                3
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                No Show
              </span>

              <span className="font-bold text-red-600">
                5
              </span>
            </div>

          </div>

          <div className="mt-7 border-t border-slate-100 pt-5">

            <div className="mb-2 flex justify-between text-xs">
              <span className="text-slate-500">
                Queue progress
              </span>

              <span className="font-semibold text-blue-600">
                53%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[53%] rounded-full bg-blue-600"></div>
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          SEARCH PATIENT
      ====================================================== */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Patient Search
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Search patients by name, token or phone number.
            </p>
          </div>

          <div className="relative w-full md:max-w-md">

            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search patient..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

          </div>

        </div>

      </div>

      {/* =====================================================
          PATIENT QUEUE TABLE
      ====================================================== */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Today&apos;s Queue
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage patients waiting for consultation.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
            <Clock size={15} />
            Average: 7 min
          </div>

        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">

          <table className="w-full text-left">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Token
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Patient
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Doctor
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Time
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {patients.map((patient) => (
                <tr
                  key={patient.token}
                  className="transition hover:bg-slate-50"
                >

                  {/* Token */}
                  <td className="px-6 py-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                      {patient.token}
                    </span>
                  </td>

                  {/* Patient */}
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900">
                      {patient.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {patient.age} years • {patient.gender}
                    </p>
                  </td>

                  {/* Doctor */}
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">
                      {patient.doctor}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {patient.department}
                    </p>
                  </td>

                  {/* Time */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock size={15} />
                      {patient.time}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                        patient.status
                      )}`}
                    >
                      {getStatusText(patient.status)}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">

                    {patient.status === "WAITING" && (
                      <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                      >
                        Call
                      </button>
                    )}

                    {patient.status === "IN_CONSULTATION" && (
                      <button
                        type="button"
                        className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
                      >
                        Complete
                      </button>
                    )}

                    {patient.status === "COMPLETED" && (
                      <span className="text-xs font-medium text-slate-400">
                        Done
                      </span>
                    )}

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-slate-100 md:hidden">

          {patients.map((patient) => (
            <div
              key={patient.token}
              className="p-5"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                    {patient.token}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {patient.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {patient.age} years • {patient.gender}
                    </p>
                  </div>

                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                    patient.status
                  )}`}
                >
                  {getStatusText(patient.status)}
                </span>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                <div>
                  <p className="text-xs text-slate-400">
                    Doctor
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {patient.doctor}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Time
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {patient.time}
                  </p>
                </div>

              </div>

              {patient.status === "WAITING" && (
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  <PhoneCall size={17} />
                  Call Patient
                </button>
              )}

              {patient.status === "IN_CONSULTATION" && (
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  <CheckCircle2 size={17} />
                  Complete Consultation
                </button>
              )}

            </div>
          ))}

        </div>

      </div>

      {/* =====================================================
          EMERGENCY QUEUE
      ====================================================== */}
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5">

        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <AlertTriangle size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Emergency Queue
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Emergency patients should only be marked by authorized
              hospital staff. Emergency cases may be prioritized
              according to hospital policy.
            </p>

            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <AlertTriangle size={16} />
              Add Emergency Patient
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StaffDashboard;