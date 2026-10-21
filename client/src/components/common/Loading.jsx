import { Loader2 } from "lucide-react";

function Loading({ message = "Loading..." }) {
  return (
    <div className="flex min-h-[250px] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2
          size={32}
          className="animate-spin text-blue-600"
        />

        <p className="text-sm font-medium text-slate-500">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Loading;