



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Dashboards.css";
// import {
//   FaUsers,
//   FaRupeeSign,
//   FaExclamationCircle,
//   FaCalendarDay,
// } from "react-icons/fa";
// import MessageLog from "../../components/messages/MessageLog";

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboardStats();
//   }, []);

//   const fetchDashboardStats = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/dashboard/stats"
//       );
//       setStats(res.data);
//     } catch (error) {
//       console.error("Dashboard fetch failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div className="loader">Loading dashboard...</div>;

//   const dashboardCards = [
//     {
//       title: "Total Customers",
//       value: stats.totalCustomers,
//       icon: <FaUsers />,
//       color: "blue",
//     },
//     {
//       title: "Total Credit",
//       value: `₹ ${stats.totalCredit.toLocaleString()}`,
//       icon: <FaRupeeSign />,
//       color: "green",
//     },
//     {
//       title: "Overdue Accounts",
//       value: stats.overdueAccounts,
//       icon: <FaExclamationCircle />,
//       color: "red",
//     },
//     {
//       title: "Due Today",
//       value: stats.dueToday,
//       icon: <FaCalendarDay />,
//       color: "orange",
//     },
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard Overview</h2>

//       <div className="stats-grid">
//         {dashboardCards.map((item, index) => (
//           <div className={`stat-card ${item.color}`} key={index}>
//             <div className="stat-icon">{item.icon}</div>
//             <div>
//               <h3>{item.value}</h3>
//               <p>{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>


// <div style={{marginTop:"10px"}}>

// <MessageLog />

// </div>




//     </div>

    
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboards.css";
import {
  FaUsers,
  FaRupeeSign,
  FaExclamationCircle,
  FaCalendarDay,
} from "react-icons/fa";
import MessageLog from "../../components/messages/MessageLog";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get(
        "https://credit-server-bea3.onrender.com/api/dashboard/stats"
      );
      setStats(res.data);
    } catch (error) {
      console.error("Dashboard fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !stats)
    return <div className="loader">Loading dashboard...</div>;

  const dashboardCards = [
    {
      title: "Total Customers",
      value: stats.totalCustomers,
      icon: <FaUsers />,
      color: "blue",
    },
    {
      title: "Total Credit",
      value: `₹ ${stats.totalCredit.toLocaleString()}`,
      icon: <FaRupeeSign />,
      color: "green",
    },
    {
      title: "Overdue Accounts",
      value: stats.overdueAccounts,
      icon: <FaExclamationCircle />,
      color: "red",
    },
    {
      title: "Due Today",
      value: stats.dueToday,
      icon: <FaCalendarDay />,
      color: "orange",
    },
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>

      {/* Stats */}
      <div className="stats-grid">
        {dashboardCards.map((item, index) => (
          <div className={`stat-card ${item.color}`} key={index}>
            <div className="stat-icon">{item.icon}</div>
            <div>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Log */}
      <div className="message-section">
        <MessageLog />
      </div>
    </div>
  );
};

export default Dashboard;