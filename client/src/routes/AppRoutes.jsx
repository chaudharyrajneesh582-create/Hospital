import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

// Patient Pages
import PatientDashboard from "../pages/patient/PatientDashboard";
import QueueTracker from "../pages/patient/QueueTracker";

// Staff Pages
import StaffDashboard from "../pages/staff/StaffDashboard";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      {/* ==================================================
          PUBLIC ROUTES
      ================================================== */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Route>

      {/* ==================================================
          DASHBOARD ROUTES
      ================================================== */}

      <Route element={<DashboardLayout />}>

        {/* ---------------- PATIENT ---------------- */}

        <Route
          path="/patient/dashboard"
          element={<PatientDashboard />}
        />

        <Route
          path="/patient/queue"
          element={<QueueTracker />}
        />

        {/* ---------------- STAFF ---------------- */}

        <Route
          path="/staff/dashboard"
          element={<StaffDashboard />}
        />

        {/* ---------------- ADMIN ---------------- */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Route>

      {/* ==================================================
          404 ROUTE
      ================================================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;