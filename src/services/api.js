// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", // change when deploying
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Attach token automatically if exists
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// // Auth APIs
// export const login = (data) => API.post("/auth/login", data);
// export const register = (data) => API.post("/auth/register", data);

// // Customer APIs
// export const getCustomers = () => API.get("/customers");
// export const addCustomer = (data) => API.post("/customers", data);
// export const updateCustomer = (id, data) => API.put(`/customers/${id}`, data);
// export const deleteCustomer = (id) => API.delete(`/customers/${id}`);

// // Excel Upload
// export const uploadExcel = (formData) =>
//   API.post("/excel/upload", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // Payments
// export const addPayment = (customerId, data) =>
//   API.post(`/payments/${customerId}`, data);
// export const getPayments = (customerId) =>
//   API.get(`/payments/${customerId}`);

// // WhatsApp Reminder
// export const sendReminder = (customerId) =>
//   API.post(`/messages/send/${customerId}`);

// export default API;




import axios from "axios";

/**
 * Axios instance
 */
const API = axios.create({
  baseURL: "https://credit-recovery-app-server.vercel.app/api", // change on deployment
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Attach token automatically
 */
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Handle auth errors globally
 */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

/* ===========================
   AUTH APIs
=========================== */
export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

/* ===========================
   CUSTOMER APIs
=========================== */
export const getCustomers = () => API.get("/customers");
export const addCustomer = (data) => API.post("/customers", data);
export const updateCustomer = (id, data) =>
  API.put(`/customers/${id}`, data);
export const deleteCustomer = (id) =>
  API.delete(`/customers/${id}`);

/* ===========================
   EXCEL UPLOAD
=========================== */
export const uploadExcel = (formData) =>
  API.post("/excel/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

/* ===========================
   PAYMENTS
=========================== */
export const addPayment = (customerId, data) =>
  API.post(`/payments/${customerId}`, data);

export const getPayments = (customerId) =>
  API.get(`/payments/${customerId}`);

/* ===========================
   WHATSAPP / MESSAGE
=========================== */
export const sendReminder = (customerId) =>
  API.post(`/messages/send/${customerId}`);

export default API;
