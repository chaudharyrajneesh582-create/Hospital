```jsx
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Ear,
  Smile,
  UserRound,
} from "lucide-react";

const iconMap = {
  Cardiology: HeartPulse,
  Neurology: Brain,
  Orthopedics: Bone,
  Dermatology: UserRound,
  Pediatrics: Baby,
  "General Medicine": Stethoscope,
  ENT: Ear,
  Dentistry: Smile,
};

function DepartmentCard({
  name,
  description,
  doctors = 0,
  onClick,
}) {
  const Icon = iconMap[name] || Stethoscope;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={28} />
      </div>

      {/* Department Name */}
      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Doctor Count */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm text-slate-500">
          Available Doctors
        </span>

        <span className="font-semibold text-blue-600">
          {doctors}
        </span>
      </div>

      {/* View Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();

          if (onClick) {
            onClick();
          }
        }}
        className="mt-4 w-full rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
      >
        View Doctors
      </button>
    </div>
  );
}

export default DepartmentCard;
```
