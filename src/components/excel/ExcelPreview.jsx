import React from "react";
import "./ExcelPreview.css";

const ExcelPreview = ({ data = [], onConfirm, onCancel }) => {
  return (
    <div className="excel-preview-container">
      <h2>Preview Imported Data</h2>

      <div className="preview-table-wrapper">
        <table className="preview-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Total Credit</th>
              <th>Paid</th>
              <th>Balance</th>
              <th>Due Date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  No data to preview
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.phone}</td>
                  <td>₹{row.totalCredit}</td>
                  <td>₹{row.paidAmount}</td>
                  <td>₹{row.balance}</td>
                  <td>{new Date(row.dueDate).toLocaleDateString()}</td>
                  <td>₹{row.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="preview-actions">
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="confirm-btn" onClick={onConfirm}>
          Save to Database
        </button>
      </div>
    </div>
  );
};

export default ExcelPreview;




// import React from "react";
// import "./ExcelPreview.css";

// const ExcelPreview = ({ data = [], onConfirm, onCancel }) => {
//   return (
//     <div className="excel-preview-container">
//       <h2>Preview Imported Data</h2>

//       <div className="preview-table-wrapper">
//         <table className="preview-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Total Credit</th>
//               <th>Paid</th>
//               <th>Balance</th>
//               <th>Due Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="no-data">
//                   No data to preview
//                 </td>
//               </tr>
//             ) : (
//               data.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.name}</td>
//                   <td>{row.phone}</td>
//                   <td>₹{row.totalCredit}</td>
//                   <td>₹{row.paidAmount}</td>
//                   <td>₹{row.balance}</td>
//                   <td>
//                     {row.dueDate
//                       ? new Date(row.dueDate).toLocaleDateString()
//                       : "-"}
//                   </td>
//                   <td>{row.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="preview-actions">
//         <button className="cancel-btn" onClick={onCancel}>
//           Cancel
//         </button>

//         <button className="confirm-btn" onClick={onConfirm}>
//           Save to Database
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExcelPreview;
