import {
  CalendarDays,
  Clock,
  Hospital,
  MapPin,
  Ticket,
  Stethoscope,
} from "lucide-react";

function AppointmentCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Doctor Information */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Stethoscope size={26} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Dr. Rahul Sharma
            </h2>

            <p className="text-sm text-blue-600">
              Cardiologist
            </p>
          </div>

        </div>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
          Waiting
        </span>

      </div>

      {/* Appointment Information */}
      <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 md:grid-cols-2">

        <div className="flex items-center gap-3">
          <Hospital className="text-blue-600" size={20} />

          <div>
            <p className="text-xs text-slate-400">
              Hospital
            </p>

            <p className="text-sm font-semibold text-slate-700">
              CityCare Hospital
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-blue-600" size={20} />

          <div>
            <p className="text-xs text-slate-400">
              Department
            </p>

            <p className="text-sm font-semibold text-slate-700">
              Cardiology
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="text-blue-600" size={20} />

          <div>
            <p className="text-xs text-slate-400">
              Date
            </p>

            <p className="text-sm font-semibold text-slate-700">
              10 September 2026
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="text-blue-600" size={20} />

          <div>
            <p className="text-xs text-slate-400">
              Time
            </p>

            <p className="text-sm font-semibold text-slate-700">
              10:30 AM
            </p>
          </div>
        </div>

      </div>

      {/* Token */}
      <div className="mt-6 flex items-center justify-between rounded-xl bg-blue-50 p-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            <Ticket size={22} />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Your Queue Token
            </p>

            <p className="text-2xl font-bold text-blue-600">
              A24
            </p>
          </div>

        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500">
            Estimated Wait
          </p>

          <p className="font-bold text-slate-900">
            35 min
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">

        <button
          type="button"
          className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          View Live Queue
        </button>

        <button
          type="button"
          className="rounded-lg border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default AppointmentCard;
