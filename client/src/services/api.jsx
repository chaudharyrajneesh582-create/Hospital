import axios from "axios";

// =====================================================
// AXIOS INSTANCE
// =====================================================

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV ? "http://localhost:5000/api" : "/api"),

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

// =====================================================
// REQUEST INTERCEPTOR
// =====================================================

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// =====================================================
// RESPONSE INTERCEPTOR
// =====================================================

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response) {
      // Unauthorized
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Redirect to login
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

// =====================================================
// AUTH APIs
// =====================================================

export const authAPI = {
  register: (userData) =>
    api.post("/auth/register", userData),

  login: (loginData) =>
    api.post("/auth/login", loginData),

  forgotPassword: (email) =>
    api.post("/auth/forgot-password", { email }),

  resetPassword: (token, password) =>
    api.post(`/auth/reset-password/${token}`, { password }),
};

// =====================================================
// HOSPITAL APIs
// =====================================================

export const hospitalAPI = {
  getAll: (params = {}) =>
    api.get("/hospitals", { params }),

  getById: (id) =>
    api.get(`/hospitals/${id}`),

  create: (hospitalData) =>
    api.post("/hospitals", hospitalData),

  update: (id, hospitalData) =>
    api.put(`/hospitals/${id}`, hospitalData),

  delete: (id) =>
    api.delete(`/hospitals/${id}`),
};

// =====================================================
// DOCTOR APIs
// =====================================================

export const doctorAPI = {
  getAll: (params = {}) =>
    api.get("/doctors", { params }),

  getById: (id) =>
    api.get(`/doctors/${id}`),

  create: (doctorData) =>
    api.post("/doctors", doctorData),

  update: (id, doctorData) =>
    api.put(`/doctors/${id}`, doctorData),

  delete: (id) =>
    api.delete(`/doctors/${id}`),
};

// =====================================================
// DEPARTMENT APIs
// =====================================================

export const departmentAPI = {
  getAll: (params = {}) =>
    api.get("/departments", { params }),

  getById: (id) =>
    api.get(`/departments/${id}`),

  create: (departmentData) =>
    api.post("/departments", departmentData),

  update: (id, departmentData) =>
    api.put(`/departments/${id}`, departmentData),

  delete: (id) =>
    api.delete(`/departments/${id}`),
};

// =====================================================
// APPOINTMENT APIs
// =====================================================

export const appointmentAPI = {
  getAll: (params = {}) =>
    api.get("/appointments", { params }),

  getById: (id) =>
    api.get(`/appointments/${id}`),

  create: (appointmentData) =>
    api.post("/appointments", appointmentData),

  update: (id, appointmentData) =>
    api.put(`/appointments/${id}`, appointmentData),

  cancel: (id) =>
    api.patch(`/appointments/${id}/cancel`),

  reschedule: (id, appointmentData) =>
    api.patch(`/appointments/${id}/reschedule`, appointmentData),
};

// =====================================================
// QUEUE APIs
// =====================================================

export const queueAPI = {
  getByDoctor: (doctorId, date) =>
    api.get(`/queue/${doctorId}`, {
      params: { date },
    }),

  callNext: (doctorId) =>
    api.post(`/queue/${doctorId}/next`),

  complete: (appointmentId) =>
    api.post(`/queue/${appointmentId}/complete`),

  skip: (appointmentId) =>
    api.post(`/queue/${appointmentId}/skip`),

  noShow: (appointmentId) =>
    api.post(`/queue/${appointmentId}/no-show`),

  pause: (doctorId) =>
    api.post(`/queue/${doctorId}/pause`),

  resume: (doctorId) =>
    api.post(`/queue/${doctorId}/resume`),
};

// =====================================================
// PATIENT APIs
// =====================================================

export const patientAPI = {
  getProfile: () =>
    api.get("/patients/profile"),

  updateProfile: (patientData) =>
    api.put("/patients/profile", patientData),

  getAppointments: () =>
    api.get("/patients/appointments"),

  getHistory: () =>
    api.get("/patients/history"),
};

// =====================================================
// NOTIFICATION APIs
// =====================================================

export const notificationAPI = {
  getAll: () =>
    api.get("/notifications"),

  markAsRead: (id) =>
    api.patch(`/notifications/${id}/read`),

  markAllAsRead: () =>
    api.patch("/notifications/read-all"),

  delete: (id) =>
    api.delete(`/notifications/${id}`),
};

// =====================================================
// REVIEW APIs
// =====================================================

export const reviewAPI = {
  getDoctorReviews: (doctorId) =>
    api.get(`/reviews/doctor/${doctorId}`),

  create: (reviewData) =>
    api.post("/reviews", reviewData),

  update: (id, reviewData) =>
    api.put(`/reviews/${id}`, reviewData),

  delete: (id) =>
    api.delete(`/reviews/${id}`),
};

// =====================================================
// ADMIN APIs
// =====================================================

export const adminAPI = {
  getDashboardStats: () =>
    api.get("/admin/dashboard"),

  getAnalytics: (params = {}) =>
    api.get("/admin/analytics", { params }),

  getPatients: (params = {}) =>
    api.get("/admin/patients", { params }),

  getDoctors: (params = {}) =>
    api.get("/admin/doctors", { params }),

  getStaff: (params = {}) =>
    api.get("/admin/staff", { params }),

  getHospitals: (params = {}) =>
    api.get("/admin/hospitals", { params }),

  getAppointments: (params = {}) =>
    api.get("/admin/appointments", { params }),
};

// =====================================================
// STAFF APIs
// =====================================================

export const staffAPI = {
  getDashboard: () =>
    api.get("/staff/dashboard"),

  getTodayQueue: (doctorId) =>
    api.get(`/staff/queue/${doctorId}`),

  searchPatients: (search) =>
    api.get("/staff/patients/search", {
      params: { search },
    }),

  registerWalkIn: (patientData) =>
    api.post("/staff/patients/walk-in", patientData),
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default api;