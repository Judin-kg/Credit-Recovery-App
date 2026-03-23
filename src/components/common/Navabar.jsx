// import React from "react";
// import "./Navabar.css";
// import { FaUsers, FaFileExcel, FaBell, FaSignOutAlt } from "react-icons/fa";

// const Navabar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         Credit <span>Recovery</span>
//       </div>

//       <ul className="navbar-links">
//         <li>
//           <FaUsers /> Customers
//         </li>
//         <li>
//           <FaFileExcel /> Import Excel
//         </li>
//         <li>
//           <FaBell /> Reminders
//         </li>
//       </ul>

//       <div className="navbar-profile">
//         <span className="company-name">Company Admin</span>
//         <button className="logout-btn">
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navabar;



import React from "react";
import "./Navabar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUsers, FaFileExcel, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Navabar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
        Credit <span>Recovery</span>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/customers" className="navbar-link">
            <FaUsers /> Customers
          </NavLink>
        </li>

        <li>
          <NavLink to="/upload-excel" className="navbar-link">
            <FaFileExcel /> Import Excel
          </NavLink>
        </li>

        <li>
          <NavLink to="/messages" className="navbar-link">
            <FaBell /> Reminders
          </NavLink>
        </li>
      </ul>

      <div className="navbar-profile">
        <span className="company-name">
          {user?.companyName || "Company Admin"}
        </span>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navabar;
