// import React from "react";
// import "./Sidebar.css";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaFileExcel,
//   FaMoneyCheckAlt,
//   FaBell,
//   FaChartBar,
// } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">Credit Recovery</h2>

//       <ul className="sidebar-menu">
//         <li className="active">
//           <FaTachometerAlt /> Dashboard
//         </li>
//         <li>
//           <FaUsers /> Customers
//         </li>
//         <li>
//           <FaFileExcel /> Import Excel
//         </li>
//         <li>
//           <FaMoneyCheckAlt /> Payments
//         </li>
//         <li>
//           <FaBell /> Reminders
//         </li>
//         <li>
//           <FaChartBar /> Reports
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileExcel,
  FaMoneyCheckAlt,
  FaBell,
  FaChartBar,
  FaUpload,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Credit Recovery</h2>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className="sidebar-link">
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers" className="sidebar-link">
            <FaUsers /> Customers
          </NavLink>
        </li>

        <li>
      <NavLink to="/import-customer" className="sidebar-link">
       <FaUpload /> Import Customer
    </NavLink>
       </li>

        <li>
          <NavLink to="/upload-excel" className="sidebar-link">
            <FaFileExcel /> Import Excel
          </NavLink>
        </li>
           <li>
          <NavLink to="/upload-photo" className="sidebar-link">
       📷 Upload Photo
          </NavLink>
          </li>

        <li>
          <NavLink to="/payments" className="sidebar-link">
            <FaMoneyCheckAlt /> Payments
          </NavLink>
        </li>

        <li>
          <NavLink to="/messages" className="sidebar-link">
            <FaBell /> Reminders
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports" className="sidebar-link">
            <FaChartBar /> Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
