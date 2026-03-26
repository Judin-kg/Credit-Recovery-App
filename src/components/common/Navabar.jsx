



// import React from "react";
// import "./Navabar.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaUsers, FaFileExcel, FaBell, FaSignOutAlt } from "react-icons/fa";
// import { useAuth } from "../../context/AuthContext";

// const Navabar = () => {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
//         Credit <span>Recovery</span>
//       </div>

//       <ul className="navbar-links">
//         <li>
//           <NavLink to="/customers" className="navbar-link">
//             <FaUsers /> Customers
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/upload-excel" className="navbar-link">
//             <FaFileExcel /> Import Excel
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/messages" className="navbar-link">
//             <FaBell /> Reminders
//           </NavLink>
//         </li>
//       </ul>

//       <div className="navbar-profile">
//         <span className="company-name">
//           {user?.companyName || "Company Admin"}
//         </span>

//         <button className="logout-btn" onClick={handleLogout}>
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navabar;




import React, { useState } from "react";
import "./Navabar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUsers, FaFileExcel, FaBell, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Navabar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
        Credit <span>Recovery</span>
      </div>

      {/* ☰ Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/customers" className="navbar-link" onClick={() => setMenuOpen(false)}>
            <FaUsers /> Customers
          </NavLink>
        </li>

        <li>
          <NavLink to="/upload-excel" className="navbar-link" onClick={() => setMenuOpen(false)}>
            <FaFileExcel /> Import Excel
          </NavLink>
        </li>

        <li>
          <NavLink to="/messages" className="navbar-link" onClick={() => setMenuOpen(false)}>
            <FaBell /> Reminders
          </NavLink>
        </li>

        {/* 👇 Mobile Profile Section */}
        <div className="mobile-profile">
          <span>{user?.companyName || "Company Admin"}</span>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </ul>

      {/* 💻 Desktop Profile */}
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