import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Menu, X } from "lucide-react";
import Button from "../common/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 shadow-md shadow-blue-900/15">
              <HeartPulse className="text-white" size={21} />
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-950">
              Queue<span className="text-blue-700">Care</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">
              Home
            </Link>
            <Link to="/#how-it-works" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">
              How it works
            </Link>
            <Link to="/#departments" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">
              Departments
            </Link>
            <Link to="/login" className="text-sm font-semibold text-slate-700 transition hover:text-blue-700">
              Log in
            </Link>
            <Link to="/register">
              <Button className="rounded-xl px-4 py-2.5 text-sm shadow-sm shadow-blue-900/10">
                Get started
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="grid gap-1 border-t border-slate-100 py-3 md:hidden">
            {[
              ["Home", "/"],
              ["How it works", "/#how-it-works"],
              ["Departments", "/#departments"],
              ["Log in", "/login"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {label}
              </Link>
            ))}
            <Link to="/register" onClick={() => setMenuOpen(false)} className="mt-1">
              <Button className="w-full rounded-xl py-3 text-sm">
                Get started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;