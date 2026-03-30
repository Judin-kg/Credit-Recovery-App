// import React from "react";
// import "./MessageLog.css";
// import { FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

// const MessageLog = ({ logs = [] }) => {
//   return (
//     <div className="message-log-container">
//       <h2>WhatsApp Message Logs</h2>

//       <table className="message-log-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Customer</th>
//             <th>Phone</th>
//             <th>Message</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="no-data">
//                 No messages sent yet
//               </td>
//             </tr>
//           ) : (
//             logs.map((log, index) => (
//               <tr key={index}>
//                 <td>
//                   <FaCalendarAlt />{" "}
//                   {new Date(log.sentAt).toLocaleString()}
//                 </td>
//                 <td>{log.customerName}</td>
//                 <td>{log.phone}</td>
//                 <td className="message-text">{log.message}</td>
//                 <td>
//                   <span
//                     className={`status ${
//                       log.status === "Sent" ? "sent" : "failed"
//                     }`}
//                   >
//                     <FaWhatsapp /> {log.status}
//                   </span>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MessageLog;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MessageLog.css";
import { FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

const MessageLog = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔄 Fetch Message Logs
  const fetchLogs = async () => {
    try {
      const res = await axios.get(
        "https://credit-server-bea3.onrender.com/api/message-logs"
      );

      setLogs(res.data.logs || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load message logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="message-log-container">
      <h2>WhatsApp Message Logs</h2>

      {loading && <div className="loader">Loading messages...</div>}

      {error && (
        <div className="error-message">{error}</div>
      )}

      {!loading && !error && (
        <table className="message-log-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {logs.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-data">
                  No messages sent yet
                </td>
              </tr>
            ) : (
              logs.map((log) => (
                <tr key={log._id}>
                  <td>
                    <FaCalendarAlt />{" "}
                    {new Date(log.sentAt).toLocaleString()}
                  </td>
                  <td>{log.customerName}</td>
                  <td>{log.phone}</td>
                  <td className="message-text">{log.message}</td>
                  <td>
                    <span
                      className={`status ${
                        log.status === "Sent" ? "sent" : "failed"
                      }`}
                    >
                      <FaWhatsapp /> 
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MessageLog;

