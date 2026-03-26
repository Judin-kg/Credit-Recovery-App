




// import React from "react";
// import "./Sidebar.css";
// import { NavLink } from "react-router-dom";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaFileExcel,
//   FaMoneyCheckAlt,
//   FaBell,
//   FaChartBar,
//   FaUpload,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const navLinkClass = ({ isActive }) =>
//     isActive ? "sidebar-link active" : "sidebar-link";

//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">Credit Recovery</h2>

//       <ul className="sidebar-menu">
//         <li>
//           <NavLink to="/dashboard" className={navLinkClass}>
//             <FaTachometerAlt /> Dashboard
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/customers" className={navLinkClass}>
//             <FaUsers /> Customers
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/import-customer" className={navLinkClass}>
//             <FaUpload /> Import Customer
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/upload-excel" className={navLinkClass}>
//             <FaFileExcel /> Import Excel
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/upload-photo" className={navLinkClass}>
//             📷 Upload Photo
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/payments" className={navLinkClass}>
//             <FaMoneyCheckAlt /> Payments
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/messages" className={navLinkClass}>
//             <FaBell /> Reminders
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/reports" className={navLinkClass}>
//             <FaChartBar /> Reports
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navLinkClass = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  return (
    <>
      {/* Toggle Button */}
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">Credit Recovery</h2>

        <ul className="sidebar-menu">
          {/* <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/customers" className={navLinkClass}>
              <FaUsers /> Customers
            </NavLink>
          </li>

          <li>
            <NavLink to="/import-customer" className={navLinkClass}>
              <FaUpload /> Import Customer
            </NavLink>
          </li>

          <li>
            <NavLink to="/upload-excel" className={navLinkClass}>
              <FaFileExcel /> Import Excel
            </NavLink>
          </li>

          <li>
            <NavLink to="/upload-photo" className={navLinkClass}>
              📷 Upload Photo
            </NavLink>
          </li>

          <li>
            <NavLink to="/payments" className={navLinkClass}>
              <FaMoneyCheckAlt /> Payments
            </NavLink>
          </li>

          <li>
            <NavLink to="/messages" className={navLinkClass}>
              <FaBell /> Reminders
            </NavLink>
          </li>

          <li>
            <NavLink to="/reports" className={navLinkClass}>
              <FaChartBar /> Reports
            </NavLink>
          </li> */}

          <li>
  <NavLink to="/dashboard" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaTachometerAlt /> Dashboard
  </NavLink>
</li>

<li>
  <NavLink to="/customers" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaUsers /> Customers
  </NavLink>
</li>

<li>
  <NavLink to="/import-customer" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaUpload /> Import Customer
  </NavLink>
</li>

<li>
  <NavLink to="/upload-excel" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaFileExcel /> Import Excel
  </NavLink>
</li>

<li>
  <NavLink to="/upload-photo" className={navLinkClass} onClick={() => setIsOpen(false)}>
    📷 Upload Photo
  </NavLink>
</li>

<li>
  <NavLink to="/payments" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaMoneyCheckAlt /> Payments
  </NavLink>
</li>

<li>
  <NavLink to="/messages" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaBell /> Reminders
  </NavLink>
</li>

<li>
  <NavLink to="/reports" className={navLinkClass} onClick={() => setIsOpen(false)}>
    <FaChartBar /> Reports
  </NavLink>
</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;