import {
  Clock,
  Users,
  Ticket,
  Activity,
  ArrowRight,
} from "lucide-react";

function QueueCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Live Queue
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            CityCare Hospital • Cardiology
          </p>
        </div>

        {/* Live Status */}
        <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Live
        </div>

      </div>

      {/* Main Token */}
      <div className="mt-6 rounded-xl bg-blue-50 p-6 text-center">

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <Activity size={18} />
          Current Token
        </div>

        <p className="mt-2 text-5xl font-bold text-blue-600">
          A18
        </p>

        <p className="mt-2 text-sm font-medium text-green-600">
          Now Serving
        </p>

      </div>

      {/* Queue Information */}
      <div className="mt-5 grid grid-cols-2 gap-4">

        {/* Your Token */}
        <div className="rounded-xl bg-slate-50 p-4">

          <div className="flex items-center gap-2 text-slate-500">
            <Ticket size={18} />
            <span className="text-xs">
              Your Token
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            A24
          </p>

        </div>

        {/* Patients Ahead */}
        <div className="rounded-xl bg-slate-50 p-4">

          <div className="flex items-center gap-2 text-slate-500">
            <Users size={18} />
            <span className="text-xs">
              Patients Ahead
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            5
          </p>

        </div>

      </div>

      {/* Waiting Time */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-100 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <Clock size={20} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Estimated Waiting Time
            </p>

            <p className="mt-1 font-bold text-slate-900">
              35 minutes
            </p>
          </div>

        </div>

      </div>

      {/* Queue Progress */}
      <div className="mt-5">

        <div className="mb-2 flex justify-between text-xs text-slate-500">
          <span>Queue Progress</span>
          <span>5 patients ahead</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: "70%" }}
          ></div>
        </div>

      </div>

      {/* Queue Sequence */}
      <div className="mt-6">

        <p className="mb-3 text-sm font-semibold text-slate-700">
          Queue Sequence
        </p>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-slate-100 px-2 text-sm font-semibold text-slate-600">
            A18
          </span>

          <ArrowRight size={15} className="text-slate-400" />

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-slate-100 px-2 text-sm font-semibold text-slate-600">
            A19
          </span>

          <ArrowRight size={15} className="text-slate-400" />

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-slate-100 px-2 text-sm font-semibold text-slate-600">
            A20
          </span>

          <ArrowRight size={15} className="text-slate-400" />

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-slate-100 px-2 text-sm font-semibold text-slate-600">
            A21
          </span>

          <ArrowRight size={15} className="text-slate-400" />

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-slate-100 px-2 text-sm font-semibold text-slate-600">
            A22
          </span>

          <ArrowRight size={15} className="text-slate-400" />

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-blue-600 px-2 text-sm font-bold text-white">
            A24
          </span>

        </div>

      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        View Full Queue
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default QueueCard;
