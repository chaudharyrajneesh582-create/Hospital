import { Link } from "react-router-dom";
import { Clock3, ArrowRight, Activity } from "lucide-react";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity size={16} />
              Smart Hospital Queue Management
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Skip the
              <span className="text-blue-600"> Waiting Room.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Track your hospital queue in real time and know exactly
              when it's your turn.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link to="/register">
                <Button className="flex items-center gap-2">
                  Find a Doctor
                  <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="/queue">
                <Button variant="outline" className="flex items-center gap-2">
                  <Clock3 size={18} />
                  Track My Queue
                </Button>
              </Link>

            </div>

          </div>

          {/* Queue Preview */}
          <div className="relative">

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 max-w-md mx-auto">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <p className="text-sm text-slate-500">
                    Cardiology Department
                  </p>

                  <h3 className="text-xl font-bold text-slate-900">
                    Live Queue
                  </h3>
                </div>

                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Live
                </span>

              </div>

              <div className="bg-blue-50 rounded-2xl p-5 text-center">

                <p className="text-sm text-slate-500">
                  Your Token
                </p>

                <p className="text-5xl font-bold text-blue-600 mt-2">
                  A24
                </p>

                <p className="text-slate-600 mt-2">
                  5 patients ahead
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-500">
                    Current Token
                  </p>

                  <p className="text-xl font-bold mt-1">
                    A18
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-500">
                    Est. Wait
                  </p>

                  <p className="text-xl font-bold mt-1">
                    ~35 min
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;