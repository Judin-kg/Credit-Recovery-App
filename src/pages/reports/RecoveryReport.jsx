import React from "react";
import "./RecoveryReport.css";

const RecoveryReport = () => {
  const reportData = [
    { label: "Total Customers", value: 120 },
    { label: "Total Credit", value: "₹4,50,000" },
    { label: "Recovered Amount", value: "₹3,20,000" },
    { label: "Pending Amount", value: "₹1,30,000" },
    { label: "Overdue Accounts", value: 25 },
  ];

  return (
    <div className="recovery-report-container">
      <h2>Credit Recovery Report</h2>

      <div className="report-grid">
        {reportData.map((item, index) => (
          <div className="report-card" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="report-note">
        <p>Note: This report shows overall recovery status for your company.</p>
      </div>
    </div>
  );
};

export default RecoveryReport;
