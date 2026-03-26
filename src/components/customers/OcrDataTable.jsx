



// import "../customers/CustomersTable.css";
// import { FaEye } from "react-icons/fa";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const OcrDataTable = ({ onView }) => {
//   const [ocrData, setOcrData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchOcrData = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         "http://localhost:5000/api/photo/ocr-data"
//       );

//       setOcrData(res.data.data || []);
//     } catch (error) {
//       console.error("Fetch OCR Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOcrData();
//   }, []);

//   return (
//     <div className="customer-table-container">
//       <h2>OCR Upload History</h2>

//       <table className="customer-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th></th>
//             <th></th>
//             <th></th>
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>

//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan="6">Loading...</td>
//             </tr>
//           ) : ocrData.length === 0 ? (
//             <tr>
//               <td colSpan="6" className="no-data">
//                 No OCR records found
//               </td>
//             </tr>
//           ) : (
//             ocrData.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>

//                 <td style={{ maxWidth: "250px" }}>
//                   {item.rawText?.slice(0, 80)}...
//                 </td>

//                 <td>{item.customers?.length || 0}</td>

//                 <td>{item.source}</td>

//                 <td>
//                   {new Date(item.createdAt).toLocaleDateString()}
//                 </td>

//                 <td>
//                   <button onClick={() => onView && onView(item)}>
//                     <FaEye />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OcrDataTable;


import React, { useEffect, useState } from "react";
import axios from "axios";

const OcrDataTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOcrData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://credit-recovery-app-server.vercel.app/api/photo/ocr-data"
      );

      const records = res.data.data || [];

      // extract only customers
      const allCustomers = records.flatMap(
        (item) => item.customers || []
      );

      setCustomers(allCustomers);

    } catch (error) {
      console.error("Fetch OCR Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOcrData();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  if (customers.length === 0) {
    return <p>No customers found</p>;
  }

  return (
<div>
<th>OCR CUSTOMERS </th>


    <table border="1" cellPadding="10" style={{ width: "100%" }}>

        
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Total Credit</th>
          <th>Balance</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((c) => (
          <tr key={c._id}>
            <td>{c.name.replace(/^\d+\s*/, "")}</td>
            <td>{c.phone}</td>
            <td>{c.totalCredit}</td>
            <td>{c.balance}</td>
            <td>{c.status}</td>
            <td>
              {c.dueDate
                ? new Date(c.dueDate).toLocaleDateString()
                : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default OcrDataTable;