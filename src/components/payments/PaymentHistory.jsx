import React from "react";
import "./PaymentHistory.css";
import { FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

const PaymentHistory = ({ payments = [] }) => {
  return (
    <div className="payment-history-container">
      <h2>Payment History</h2>

      <table className="payment-history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Mode</th>
            <th>Reference</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">
                No payments recorded
              </td>
            </tr>
          ) : (
            payments.map((p, index) => (
              <tr key={index}>
                <td>
                  <FaCalendarAlt />{" "}
                  {new Date(p.date).toLocaleDateString()}
                </td>
                <td>
                  <FaRupeeSign /> ₹{p.amount}
                </td>
                <td>{p.mode}</td>
                <td>{p.reference || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
