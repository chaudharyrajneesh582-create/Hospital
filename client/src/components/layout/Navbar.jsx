import { Link } from "react-router-dom";
import { HeartPulse, Menu } from "lucide-react";
import Button from "../common/Button";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <HeartPulse className="text-white" size={22} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              Queue<span className="text-blue-600">Care</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-600 hover:text-blue-600"
            >
              Home
            </Link>

            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#departments"
              className="text-slate-600 hover:text-blue-600"
            >
              Departments
            </a>

            <Link
              to="/login"
              className="text-slate-600 hover:text-blue-600"
            >
              Login
            </Link>

            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;