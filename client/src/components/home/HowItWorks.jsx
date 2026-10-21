import {
  CalendarCheck,
  CheckCircle,
  Hospital,
  Search,
  Ticket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find a Hospital",
    description:
      "Search for hospitals and departments available near you.",
    icon: Hospital,
  },
  {
    number: "02",
    title: "Select a Doctor",
    description:
      "Choose a doctor based on department, availability and schedule.",
    icon: Search,
  },
  {
    number: "03",
    title: "Book Appointment",
    description:
      "Select an available date and time slot and confirm your appointment.",
    icon: CalendarCheck,
  },
  {
    number: "04",
    title: "Get Your Token",
    description:
      "Receive your queue token after successfully booking your appointment.",
    icon: Ticket,
  },
  {
    number: "05",
    title: "Track Your Queue",
    description:
      "Monitor your live queue position and estimated waiting time.",
    icon: CheckCircle,
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-20" id="how-it-works">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="font-semibold text-blue-600">
            SIMPLE PROCESS
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            How QueueCare Works
          </h2>

          <p className="mt-4 text-slate-500">
            From booking your appointment to tracking your queue,
            everything is simple and transparent.
          </p>

        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

          {steps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Number */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={27} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;