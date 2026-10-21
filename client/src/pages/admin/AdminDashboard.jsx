import { useState } from "react";
import {
  Users,
  UserRound,
  Stethoscope,
  Building2,
  CalendarDays,
  Clock3,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  Activity,
  Search,
  MoreVertical,
  Plus,
  BarChart3,
  Hospital,
  UserCog,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";

function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("appointments");

  // --------------------------------------------------
  // MOCK ADMIN DATA
  // Later this data will come from your backend API
  // --------------------------------------------------

  const stats = [
    {
      title: "Total Patients",
      value: "12,458",
      description: "Registered patients",
      trend: "+12.5%",
      type: "blue",
      icon: Users,
    },
    {
      title: "Total Doctors",
      value: "186",
      description: "Active doctors",
      trend: "+8.2%",
      type: "green",
      icon: Stethoscope,
    },
    {
      title: "Hospitals",
      value: "24",
      description: "Registered hospitals",
      trend: "+4.1%",
      type: "purple",
      icon: Building2,
    },
    {
      title: "Today's Appointments",
      value: "842",
      description: "Appointments today",
      trend: "+15.3%",
      type: "orange",
      icon: CalendarDays,
    },
  ];

  const appointmentStats = [
    {
      label: "Completed",
      value: "624",
      icon: CheckCircle,
      type: "green",
    },
    {
      label: "Waiting",
      value: "126",
      icon: Clock3,
      type: "orange",
    },
    {
      label: "Cancelled",
      value: "58",
      icon: XCircle,
      type: "red",
    },
    {
      label: "No Show",
      value: "34",
      icon: AlertCircle,
      type: "gray",
    },
  ];

  const appointments = [
    {
      id: "APT001",
      patient: "Rahul Kumar",
      doctor: "Dr. Amit Sharma",
      hospital: "CityCare Hospital",
      department: "Cardiology",
      token: "A24",
      time: "10:30 AM",
      status: "WAITING",
    },
    {
      id: "APT002",
      patient: "Priya Singh",
      doctor: "Dr. Neha Verma",
      hospital: "Metro Hospital",
      department: "Dermatology",
      token: "D12",
      time: "11:00 AM",
      status: "COMPLETED",
    },
    {
      id: "APT003",
      patient: "Aman Gupta",
      doctor: "Dr. Raj Mehta",
      hospital: "CityCare Hospital",
      department: "Orthopedics",
      token: "O18",
      time: "11:30 AM",
      status: "IN_CONSULTATION",
    },
    {
      id: "APT004",
      patient: "Sneha Sharma",
      doctor: "Dr. Pooja Singh",
      hospital: "HealthPlus Hospital",
      department: "Pediatrics",
      token: "P09",
      time: "12:00 PM",
      status: "CANCELLED",
    },
    {
      id: "APT005",
      patient: "Vikas Kumar",
      doctor: "Dr. Rahul Singh",
      hospital: "Metro Hospital",
      department: "Neurology",
      token: "N21",
      time: "12:30 PM",
      status: "NO_SHOW",
    },
  ];

  const hospitals = [
    {
      name: "CityCare Hospital",
      city: "Ghaziabad",
      doctors: 48,
      patients: 324,
      status: "ACTIVE",
    },
    {
      name: "Metro Hospital",
      city: "Noida",
      doctors: 62,
      patients: 412,
      status: "ACTIVE",
    },
    {
      name: "HealthPlus Hospital",
      city: "Delhi",
      doctors: 35,
      patients: 268,
      status: "ACTIVE",
    },
    {
      name: "LifeCare Hospital",
      city: "Ghaziabad",
      doctors: 41,
      patients: 194,
      status: "ACTIVE",
    },
  ];

  const departments = [
    {
      name: "Cardiology",
      appointments: 142,
      percentage: 82,
    },
    {
      name: "General Medicine",
      appointments: 128,
      percentage: 74,
    },
    {
      name: "Orthopedics",
      appointments: 96,
      percentage: 61,
    },
    {
      name: "Dermatology",
      appointments: 84,
      percentage: 53,
    },
    {
      name: "Pediatrics",
      appointments: 72,
      percentage: 45,
    },
  ];

  // --------------------------------------------------
  // FILTER APPOINTMENTS
  // --------------------------------------------------

  const filteredAppointments = appointments.filter((appointment) => {
    const search = searchTerm.toLowerCase();

    return (
      appointment.patient.toLowerCase().includes(search) ||
      appointment.doctor.toLowerCase().includes(search) ||
      appointment.hospital.toLowerCase().includes(search) ||
      appointment.department.toLowerCase().includes(search) ||
      appointment.id.toLowerCase().includes(search)
    );
  });

  // --------------------------------------------------
  // STATUS STYLE
  // --------------------------------------------------

  const getStatusStyle = (status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-700";

      case "WAITING":
        return "bg-yellow-100 text-yellow-700";

      case "IN_CONSULTATION":
        return "bg-blue-100 text-blue-700";

      case "CANCELLED":
        return "bg-red-100 text-red-700";

      case "NO_SHOW":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatStatus = (status) => {
    return status.replaceAll("_", " ");
  };

  // --------------------------------------------------
  // QUICK ACTIONS
  // --------------------------------------------------

  const quickActions = [
    {
      title: "Add Hospital",
      description: "Register a new hospital",
      icon: Hospital,
      color: "blue",
    },
    {
      title: "Add Doctor",
      description: "Register a new doctor",
      icon: Stethoscope,
      color: "green",
    },
    {
      title: "Add Staff",
      description: "Create staff account",
      icon: UserCog,
      color: "purple",
    },
    {
      title: "View Reports",
      description: "Check system reports",
      icon: BarChart3,
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              ADMIN PANEL
            </span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage hospitals, doctors, patients, appointments and system
            performance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
            <CalendarDays size={17} />
            Today
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700">
            <Plus size={17} />
            Add New
          </button>
        </div>
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
            trend={stat.trend}
            type={stat.type}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* =====================================================
          APPOINTMENT OVERVIEW
      ===================================================== */}

      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Today's Appointment Overview
            </h2>

            <p className="text-sm text-slate-500">
              Current appointment status across all hospitals
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-green-600">
            <Activity size={17} />
            System Live
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {appointmentStats.map((item) => {
            const Icon = item.icon;

            const styles = {
              green: "bg-green-50 text-green-600",
              orange: "bg-orange-50 text-orange-600",
              red: "bg-red-50 text-red-600",
              gray: "bg-slate-100 text-slate-600",
            };

            return (
              <div
                key={item.label}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${styles[item.type]}`}
                >
                  <Icon size={20} />
                </div>

                <p className="text-sm text-slate-500">{item.label}</p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          MAIN ANALYTICS SECTION
      ===================================================== */}

      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* APPOINTMENT CHART */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Appointments Overview
              </h2>

              <p className="text-sm text-slate-500">
                Appointment activity during the last 7 days
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
              <TrendingUp size={20} />
            </div>
          </div>

          {/* Simple chart */}

          <div className="flex h-64 items-end justify-between gap-3 border-b border-l border-slate-200 px-3 pb-3">
            {[
              { day: "Mon", value: 55 },
              { day: "Tue", value: 72 },
              { day: "Wed", value: 64 },
              { day: "Thu", value: 82 },
              { day: "Fri", value: 68 },
              { day: "Sat", value: 91 },
              { day: "Sun", value: 48 },
            ].map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className="w-full max-w-10 rounded-t-md bg-purple-500 transition-all hover:bg-purple-600"
                  style={{
                    height: `${item.value}%`,
                  }}
                  title={`${item.value}%`}
                ></div>

                <span className="text-xs font-medium text-slate-500">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DEPARTMENT PERFORMANCE */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              Top Departments
            </h2>

            <p className="text-sm text-slate-500">
              Appointment distribution
            </p>
          </div>

          <div className="space-y-5">
            {departments.map((department) => (
              <div key={department.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    {department.name}
                  </span>

                  <span className="text-xs font-semibold text-slate-500">
                    {department.appointments}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{
                      width: `${department.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            <BarChart3 size={16} />
            View Full Analytics
          </button>
        </div>
      </div>

      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}

      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="text-sm text-slate-500">
            Frequently used administration tools
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;

            const colors = {
              blue: "bg-blue-50 text-blue-600",
              green: "bg-green-50 text-green-600",
              purple: "bg-purple-50 text-purple-600",
              orange: "bg-orange-50 text-orange-600",
            };

            return (
              <button
                key={action.title}
                className="group rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${colors[action.color]}`}
                >
                  <Icon size={21} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {action.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          MANAGEMENT TABS
      ===================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* TAB HEADER */}

        <div className="border-b border-slate-200 px-5 pt-5 sm:px-6">
          <div className="flex gap-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`whitespace-nowrap border-b-2 pb-4 text-sm font-semibold transition ${
                activeTab === "appointments"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Appointments
            </button>

            <button
              onClick={() => setActiveTab("hospitals")}
              className={`whitespace-nowrap border-b-2 pb-4 text-sm font-semibold transition ${
                activeTab === "hospitals"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Hospitals
            </button>
          </div>
        </div>

        {/* =================================================
            APPOINTMENTS TAB
        ================================================= */}

        {activeTab === "appointments" && (
          <div className="p-5 sm:p-6">
            {/* SEARCH */}

            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-bold text-slate-900">
                  Recent Appointments
                </h3>

                <p className="text-sm text-slate-500">
                  Monitor appointments across hospitals
                </p>
              </div>

              <div className="relative w-full md:w-72">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search appointment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      ID
                    </th>

                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Patient
                    </th>

                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Doctor
                    </th>

                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Hospital
                    </th>

                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Token
                    </th>

                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Time
                    </th>

                    <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="pb-3"></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredAppointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <td className="py-4 text-sm font-medium text-purple-600">
                        {appointment.id}
                      </td>

                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600">
                            {appointment.patient.charAt(0)}
                          </div>

                          <span className="text-sm font-semibold text-slate-800">
                            {appointment.patient}
                          </span>
                        </div>
                      </td>

                      <td className="py-4 text-sm text-slate-600">
                        {appointment.doctor}
                      </td>

                      <td className="py-4">
                        <p className="text-sm font-medium text-slate-700">
                          {appointment.hospital}
                        </p>

                        <p className="text-xs text-slate-400">
                          {appointment.department}
                        </p>
                      </td>

                      <td className="py-4">
                        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-bold text-slate-700">
                          {appointment.token}
                        </span>
                      </td>

                      <td className="py-4 text-sm text-slate-600">
                        {appointment.time}
                      </td>

                      <td className="py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                            appointment.status
                          )}`}
                        >
                          {formatStatus(appointment.status)}
                        </span>
                      </td>

                      <td className="py-4">
                        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE CARDS */}

            <div className="space-y-3 lg:hidden">
              {filteredAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600">
                        {appointment.patient.charAt(0)}
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {appointment.patient}
                        </h4>

                        <p className="text-xs text-slate-500">
                          {appointment.id}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                        appointment.status
                      )}`}
                    >
                      {formatStatus(appointment.status)}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">Doctor</p>
                      <p className="mt-1 font-medium text-slate-700">
                        {appointment.doctor}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Token</p>
                      <p className="mt-1 font-bold text-slate-700">
                        {appointment.token}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Hospital</p>
                      <p className="mt-1 font-medium text-slate-700">
                        {appointment.hospital}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Time</p>
                      <p className="mt-1 font-medium text-slate-700">
                        {appointment.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAppointments.length === 0 && (
              <div className="py-10 text-center">
                <Search
                  size={35}
                  className="mx-auto mb-3 text-slate-300"
                />

                <h3 className="font-semibold text-slate-700">
                  No appointments found
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Try searching with another name or appointment ID.
                </p>
              </div>
            )}
          </div>
        )}

        {/* =================================================
            HOSPITALS TAB
        ================================================= */}

        {activeTab === "hospitals" && (
          <div className="p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-900">
                  Hospital Management
                </h3>

                <p className="text-sm text-slate-500">
                  Manage registered hospitals
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700">
                <Plus size={17} />
                Add Hospital
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {hospitals.map((hospital) => (
                <div
                  key={hospital.name}
                  className="rounded-xl border border-slate-200 p-5 transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <Building2 size={21} />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900">
                          {hospital.name}
                        </h4>

                        <p className="text-sm text-slate-500">
                          {hospital.city}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                      {hospital.status}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="text-xs text-slate-500">Doctors</p>

                      <p className="mt-1 text-lg font-bold text-slate-800">
                        {hospital.doctors}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="text-xs text-slate-500">Today's Patients</p>

                      <p className="mt-1 text-lg font-bold text-slate-800">
                        {hospital.patients}
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    Manage Hospital
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          SYSTEM SUMMARY
      ===================================================== */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white shadow-lg">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Activity size={19} />

              <span className="text-sm font-semibold">
                System Performance
              </span>
            </div>

            <h2 className="text-xl font-bold">
              Hospital Queue Tracker is running normally
            </h2>

            <p className="mt-1 text-sm text-purple-100">
              All major services are operational and queues are being monitored
              in real time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur">
              <p className="text-xs text-purple-100">Avg. Wait</p>

              <p className="mt-1 text-lg font-bold">28 min</p>
            </div>

            <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur">
              <p className="text-xs text-purple-100">Completion</p>

              <p className="mt-1 text-lg font-bold">74%</p>
            </div>

            <div className="col-span-2 rounded-xl bg-white/10 p-3 text-center backdrop-blur sm:col-span-1">
              <p className="text-xs text-purple-100">No Show</p>

              <p className="mt-1 text-lg font-bold">4.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;