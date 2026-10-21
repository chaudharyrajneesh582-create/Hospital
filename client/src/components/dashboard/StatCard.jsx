import {
  CalendarDays,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  appointments: CalendarDays,
  patients: Users,
  completed: CheckCircle,
  waiting: Clock,
  average: TrendingUp,
};

function StatCard({
  title = "Today's Appointments",
  value = "24",
  description = "Appointments scheduled today",
  type = "appointments",
  trend,
}) {
  const Icon = iconMap[type] || CalendarDays;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Top Section */}
      <div className="flex items-start justify-between">

        {/* Text */}
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={24} />
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-4 border-t border-slate-100 pt-4">

        {trend && (
          <p className="mb-1 flex items-center gap-1 text-sm font-semibold text-green-600">
            <TrendingUp size={16} />
            {trend}
          </p>
        )}

        <p className="text-xs text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

export default StatCard;
