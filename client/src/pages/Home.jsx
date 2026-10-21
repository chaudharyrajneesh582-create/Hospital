import { Link } from "react-router-dom";
import {
  Search,
  CalendarCheck,
  Ticket,
  Activity,
  ArrowRight,
  Clock,
  ShieldCheck,
  Smartphone,
  HeartPulse,
  Stethoscope,
  Brain,
  Bone,
  Baby,
  Ear,
  Sparkles,
} from "lucide-react";

function Home() {
  const departments = [
    {
      name: "Cardiology",
      icon: HeartPulse,
      description: "Heart and cardiovascular care",
    },
    {
      name: "Neurology",
      icon: Brain,
      description: "Brain and nervous system care",
    },
    {
      name: "Orthopedics",
      icon: Bone,
      description: "Bone and joint treatment",
    },
    {
      name: "Pediatrics",
      icon: Baby,
      description: "Healthcare for children",
    },
    {
      name: "ENT",
      icon: Ear,
      description: "Ear, nose and throat care",
    },
    {
      name: "General Medicine",
      icon: Stethoscope,
      description: "General healthcare services",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Find a Doctor",
      description:
        "Search for hospitals, departments and doctors based on your healthcare needs.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Book Appointment",
      description:
        "Select your preferred date and available appointment time.",
    },
    {
      number: "03",
      icon: Ticket,
      title: "Get Your Token",
      description:
        "Receive a queue token after successfully booking your appointment.",
    },
    {
      number: "04",
      icon: Activity,
      title: "Track Your Queue",
      description:
        "Monitor the live queue and see how many patients are ahead of you.",
    },
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

          {/* Hero Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={16} />
              Smart Hospital Queue Management
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Skip the{" "}
              <span className="text-blue-600">
                Waiting Room.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Track your hospital queue in real time and know
              exactly when it&apos;s your turn. Book appointments,
              get your token and avoid unnecessary waiting.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Book an Appointment
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                Track My Queue
              </Link>
            </div>

            {/* Small Benefits */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-600" />
                Secure
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600" />
                Real-time Updates
              </div>

              <div className="flex items-center gap-2">
                <Smartphone size={18} className="text-purple-600" />
                Mobile Friendly
              </div>
            </div>
          </div>

          {/* Queue Preview */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200 opacity-40 blur-3xl"></div>

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Live Queue
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    CityCare Hospital
                  </h2>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Live
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm text-slate-500">
                  Currently Serving
                </p>

                <p className="mt-2 text-5xl font-extrabold text-blue-600">
                  A18
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Cardiology Department
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Your Token
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    A24
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Patients Ahead
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    5
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">
                    Estimated waiting time
                  </span>

                  <span className="font-bold text-blue-600">
                    35 min
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[70%] rounded-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEPARTMENTS ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              Healthcare Departments
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Find the right department
            </h2>

            <p className="mt-4 text-slate-600">
              Explore doctors and healthcare services available
              across different medical departments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <div
                  key={department.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {department.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {department.description}
                  </p>

                  <button
                    type="button"
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Explore
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              How It Works
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Healthcare without the long wait
            </h2>

            <p className="mt-4 text-slate-600">
              From booking an appointment to reaching the doctor,
              QueueCare keeps you informed at every step.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Icon size={24} />
                    </div>

                    <span className="text-4xl font-extrabold text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to skip the waiting room?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Book your appointment and track your queue from
            anywhere.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Get Started
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;