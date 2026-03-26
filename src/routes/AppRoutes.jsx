import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import Dashboard from "../pages/dashboard/Dashboards";
// import UploadExcel from "../pages/upload/UploadExcel";
// import RecoveryReport from "../pages/reports/RecoveryReport";
// import MessageLog from "../components/messages/MessageLog";
// import Customers from "../pages/customers/CustomerList";

// import Navbar from "../components/common/Navabar";
// import Sidebar from "../components/common/Sidebar";
// import Footer from "../components/common/Footer";

// import useAuth from "../hooks/useAuth";

// // Protected Route Wrapper
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const AppRoutes = () => {
//   return (
//     <Router>
//       <div className="app-layout">
//         <Navbar />
//         <div className="main-content">
//           <Sidebar />
//           <div className="page-content">
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />

//               {/* Protected Routes */}
//               <Route
//                 path="/"
//                 element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 }
//               />

//               <Route
//                 path="/customers"
//                 element={
//                   <PrivateRoute>
//                     <Customers />
//                   </PrivateRoute>
//                 }
//               />

//               <Route
//                 path="/upload-excel"
//                 element={
//                   <PrivateRoute>
//                     <UploadExcel />
//                   </PrivateRoute>
//                 }
//               />

//               <Route
//                 path="/reports"
//                 element={
//                   <PrivateRoute>
//                     <RecoveryReport />
//                   </PrivateRoute>
//                 }
//               />

//               <Route
//                 path="/messages"
//                 element={
//                   <PrivateRoute>
//                     <MessageLog />
//                   </PrivateRoute>
//                 }
//               />
//             </Routes>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default AppRoutes;




// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import Dashboard from "../pages/dashboard/Dashboards";
// import UploadExcel from "../pages/upload/UploadExcel";
// import RecoveryReport from "../pages/reports/RecoveryReport";
// import MessageLog from "../components/messages/MessageLog";
// import Customers from "../pages/customers/CustomerList";

// import Navbar from "../components/common/Navabar";
// import Sidebar from "../components/common/Sidebar";
// import Footer from "../components/common/Footer";

// import useAuth from "../hooks/useAuth";

// /* ======================
//    PROTECTED ROUTE
// ====================== */
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// /* ======================
//    PUBLIC ROUTE (LOGIN)
// ====================== */
// const PublicRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <Navigate to="/" replace /> : children;
// };

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* FIRST PAGE → LOGIN */}
//         <Route
//           path="/"
//           element={
//             <PublicRoute>
//               <Login />
//             </PublicRoute>
//           }
//         />

//         <Route
//           path="/register"
//           element={
//             <PublicRoute>
//               <Register />
//             </PublicRoute>
//           }
//         />

//         {/* PROTECTED APP LAYOUT */}
//         <Route
//           path="/*"
//           element={
//             <PrivateRoute>
//               <div className="app-layout">
//                 <Navbar />
//                 <div className="main-content">
//                   <Sidebar />
//                   <div className="page-content">
//                     <Routes>
//                       <Route path="/dashboard" element={<Dashboard />} />
//                       <Route path="/customers" element={<Customers />} />
//                       <Route path="/upload-excel" element={<UploadExcel />} />
//                       <Route path="/reports" element={<RecoveryReport />} />
//                       <Route path="/messages" element={<MessageLog />} />
//                     </Routes>
//                   </div>
//                 </div>
//                 <Footer />
//               </div>
//             </PrivateRoute>
//           }
//         />

//         {/* FALLBACK */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;





import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboards";
import UploadExcel from "../pages/upload/UploadExcel";
import RecoveryReport from "../pages/reports/RecoveryReport";
import MessageLog from "../components/messages/MessageLog";
import Customers from "../pages/customers/CustomerList";

import Navbar from "../components/common/Navabar";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

import useAuth from "../hooks/useAuth";
import PaymentForm from "../components/payments/Payment";
import UploadPhoto from "../pages/upload/UploadPhoto";
import ImportCustomer from "../components/customers/ImportCustomer";
import UploadPreview from "../components/excel/PreviewPage";

/* =====================
   PROTECTED ROUTE
===================== */
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

/* =====================
   APP LAYOUT
===================== */
const AppLayout = ({ children }) => (
  <div className="app-layout">
    <Navbar />
    <div className="main-content">
      <Sidebar />
      <div className="page-content">{children}</div>
    </div>
    <Footer />
  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN FIRST */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </PrivateRoute>
          }
        />



        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <AppLayout>
                <Customers />
              </AppLayout>
            </PrivateRoute>
          }
        />

         {/* ✅ Payment Route Added */}
        <Route
          path="/payments"
          element={
            <PrivateRoute>
              <AppLayout>
                <PaymentForm />
              </AppLayout>
            </PrivateRoute>
          }
        />


        <Route
          path="/upload-excel"
          element={
            <PrivateRoute>
              <AppLayout>
                <UploadExcel />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/import-customer"
          element={
            <PrivateRoute>
              <AppLayout>
                <ImportCustomer />
              </AppLayout>
            </PrivateRoute>
          }
        />

         <Route
          path="/upload-photo"
          element={
            <PrivateRoute>
              <AppLayout>
               <UploadPhoto /> 
              </AppLayout>
            </PrivateRoute>
          }
        />

        {/* 🔥 NEW PREVIEW PAGE */}
<Route
  path="/upload-photo/preview"
  element={
    <PrivateRoute>
      <AppLayout>
        <UploadPreview />
      </AppLayout>
    </PrivateRoute>
  }
/>

        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <AppLayout>
                <RecoveryReport />
              </AppLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <AppLayout>
                <MessageLog />
              </AppLayout>
            </PrivateRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
