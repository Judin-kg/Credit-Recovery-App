import React from "react";

import "../customers/CustomersTable.css";
import { FaWhatsapp, FaEye } from "react-icons/fa";
// import OcrDataTable from "./OcrDataTable";

const CustomerTable = ({ customers = [], onView, onSendReminder }) => {
  return (
    <div className="customer-table-container">
      <h2>Customer Credit List</h2>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Total Credit</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data">
                No customers found
              </td>
            </tr>
          ) : (
            customers.map((c, index) => (
              <tr key={index} className={c.status === "Overdue" ? "overdue" : ""}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>₹{c.totalCredit}</td>
                <td>₹{c.paidAmount}</td>
                <td>₹{c.balance}</td>
                <td>{new Date(c.dueDate).toLocaleDateString()}</td>
                <td>
                  {/* <span className={`status ${c.status.toLowerCase()}`}> */}
                    {c.status}
                  {/* </span> */}
                </td>
                <td className="actions">
                  <button onClick={() => onView(c)}>
                    <FaEye />
                  </button>
                  <button
                    className="whatsapp-btn"
                    onClick={() => onSendReminder(c)}
                  >
                    <FaWhatsapp />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* <OcrDataTable /> */}
    </div>
    
  );
};

export default CustomerTable;
