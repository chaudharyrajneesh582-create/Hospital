import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Baby,
  Bone,
  Brain,
  CalendarCheck,
  Check,
  Clock3,
  Ear,
  HeartPulse,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  TicketCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const departments = [
  {
    name: "Cardiology",
    description: "Heart and cardiovascular care",
    icon: HeartPulse,
    tint: "bg-rose-50 text-rose-600 ring-rose-100",
  },
  {
    name: "Neurology",
    description: "Brain and nervous system care",
    icon: Brain,
    tint: "bg-violet-50 text-violet-600 ring-violet-100",
  },
  {
    name: "Orthopedics",
    description: "Bone, joint and movement care",
    icon: Bone,
    tint: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    name: "Pediatrics",
    description: "Thoughtful healthcare for children",
    icon: Baby,
    tint: "bg-sky-50 text-sky-600 ring-sky-100",
  },
  {
    name: "ENT",
    description: "Ear, nose and throat specialists",
    icon: Ear,
    tint: "bg-orange-50 text-orange-600 ring-orange-100",
  },
  {
    name: "General Medicine",
    description: "Everyday care for the whole family",
    icon: Stethoscope,
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
];

const steps = [
  {
    number: "01",
    title: "Find your care",
    description: "Choose a hospital and the department that fits your needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Book a visit",
    description: "Pick a convenient appointment time with your doctor.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "Get your token",
    description: "Keep your queue token handy, right from your phone.",
    icon: TicketCheck,
  },
  {
    number: "04",
    title: "Know when to go",
    description: "Follow your place in line and estimated wait at a glance.",
    icon: Activity,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-[#f4f8fc]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 left-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-100/70 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-sm font-semibold text-blue-800 shadow-sm shadow-blue-950/[0.03]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                <HeartPulse size={13} />
              </span>
              A calmer way to manage your visit
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.5rem]">
              More care.
              <br />
              <span className="text-blue-700">Less waiting.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Plan your hospital visit, keep your appointment details close,
              and see your place in the queue — without spending the day in
              the waiting room.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Book an appointment
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                Track your queue
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-600" />
                Your information, protected
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone size={17} className="text-blue-700" />
                Designed for your phone
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-200/60 via-white to-cyan-100/80 blur-2xl"
            />
            <div className="relative rounded-[1.75rem] border border-white bg-white p-5 shadow-[0_28px_80px_-32px_rgba(15,45,85,0.35)] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Queue preview
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    CityCare Hospital
                  </h2>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin size={14} />
                    Cardiology
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Sample
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-[#102a56] p-6 text-white sm:p-7">
                <div className="flex items-center justify-between text-sm text-blue-100">
                  <span>Now serving</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-200">
                    <Activity size={14} />
                    Queue status
                  </span>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-6xl font-bold tracking-[-0.06em]">
                    A18
                  </span>
                  <span className="mb-1 text-sm text-blue-100">
                    Token number
                  </span>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[68%] rounded-full bg-cyan-300" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-blue-100">
                  <span>Queue in progress</span>
                  <span>68%</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <TicketCheck size={15} className="text-blue-700" />
                    Your token
                  </span>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    A24
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Clock3 size={15} className="text-amber-600" />
                    Estimated wait
                  </span>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    35 <span className="text-sm font-semibold text-slate-500">min</span>
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                Example queue data shown for demonstration.
              </p>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-slate-900/10 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Check size={18} />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-900">
                  Visit, simplified
                </span>
                <span className="block text-xs text-slate-500">
                  Your next step, at a glance
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Care that fits your needs
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore our departments
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Find the right place to start, with clear information about
                the care you are looking for.
              </p>
            </div>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-700 transition hover:text-blue-900 sm:self-auto"
            >
              Browse care options
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map(({ name, description, icon: Icon, tint }) => (
              <Link
                key={name}
                to="/register"
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_-24px_rgba(30,64,175,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${tint}`}>
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {name}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 bg-[#f4f8fc] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="A simple journey"
            title="From appointment to arrival"
            description="A few clear steps help you feel prepared before you reach the hospital."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <article
                key={number}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={21} />
                  </span>
                  <span className="text-sm font-bold tracking-[0.16em] text-slate-300">
                    {number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#102a56] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 ring-1 ring-white/15">
              <UsersRound size={23} />
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Make room for what matters.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
              Get started with a simpler way to plan your hospital visit and
              keep track of your queue.
            </p>
            <Link
              to="/register"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#102a56] transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Get started
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
